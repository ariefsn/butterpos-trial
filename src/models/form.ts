import { z } from "zod";

export const formSchema = z.object({
  personalInfo: z.object({
    name: z.string().min(1),
    identity: z.number().min(1).optional(),
    identityImage: z.string().min(1),
    tax: z.number().min(1).optional(),
    taxImage: z.string().min(1),
    phone: z.number().min(1).optional()
  }),
  companyInfo: z.object({
    name: z.string(),
    pic: z.string().min(1),
    email: z.string().email().optional(),
  }),
  bankInfo: z.object({
    name: z.string().min(1),
    accountNumber: z.number().min(1).optional(),
    accountName: z.string().min(1, 'Account Name is required')
  }),
  signature: z.string().min(1, 'Signatur is required')
})

export type FormPayload = z.infer<typeof formSchema>
