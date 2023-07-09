export interface IJob {
  id: number
  title: string
  company: string
  city: string
  timeAgo: string
  companyLogoUrl?: string
  isFullTime?: boolean
  description?: string
  howToApply?: string
}
