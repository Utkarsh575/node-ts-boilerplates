import { z } from "zod";

export const UserLoginSchema = z.object({
    username:z.string().trim().optional(),
    email:z.string().trim(),
    password:z.string().trim(),
    
})

export const UserRegistrationSchema = z.object({
    username:z.string().trim().optional(),
    email:z.string().trim(),
    password:z.string().trim(),
})

export interface JwtPayload{
    email: string
  }

export type User = z.infer<typeof UserRegistrationSchema>