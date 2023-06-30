import { z } from 'zod'

export const GuestEntrySchema = z.object({
  name: z.string().min(1, { message: 'name is required' }),
  message: z.string().min(1)
})

export const EmailLoginFormData = z.object({
  email: z.string().email({ message: 'Invalid email address' })
})
