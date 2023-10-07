<script setup lang="ts">
import { MONTHS, DAYS_OF_WEEK } from '~/constants/index'
import { TicketProps } from '~/components/ticket/types'

interface Props {
  ticket: TicketProps
}

const props = defineProps<Props>()

const parseDate = () => {
  const date = new Date(props.ticket.created_at)
  return {
    date: date.getDate(),
    day: date.getDay(),
    monthName: MONTHS[date.getMonth()],
    dayName: DAYS_OF_WEEK[date.getDay()],
    time: props.ticket.time.substring(0, 5)
  }
}

const eventDate = parseDate()
</script>

<template>
  <section class="ticket-info">
    <div class="ticket-info--meta">
      <h1>JS CONF 2024</h1>
      <time>
        <span>{{ eventDate.day }} {{ eventDate.monthName }}</span>
        <span>{{ eventDate.dayName }}</span>
        <b>{{ eventDate.time }}</b>
      </time>
    </div>
    <address>
      <TicketIconsLocation />
      <p class="text-capitalize">{{ ticket.location }}</p>
    </address>
  </section>
</template>

<style scoped>
.ticket-info {
  padding: 1rem;
}

.ticket-info--meta {
  display: flex;
  flex-wrap: wrap;
}

.ticket-info--meta > * {
  flex: 1;
}

h1 {
  font-size: 29px;
  font-weight: 900;
}

time {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 29px;
  text-transform: uppercase;
  text-align: right;
}

address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

address p {
  font-size: 20px;
}
</style>
