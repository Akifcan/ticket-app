export interface NewTicketDto {
  customerName: string
  endDate: string
  location: string
  startDate: string
  startTime: string
}

export interface TicketProps {
  id: number
  end_at: string
  is_active: boolean
  created_at: string
  location: string
  name: string
  otp_code: string
  start_at: string
  time: string
}
