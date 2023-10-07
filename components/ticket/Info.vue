<template>
    <section class="ticket-info">
        <div class="ticket-info--meta">
            <h1>JS CONF 2024</h1>
            <time>
                <span>22 ekim</span>
                <span>salı</span>
                <b>19:00</b>
            </time>
        </div>
        <address>
            <TicketIconsLocation />
            <p>İstanbul - Maslak</p>
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

.ticket-info--meta>* {
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
}

address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .3rem;
}

address p {
    font-size: 20px;
}
</style>