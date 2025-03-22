import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Valid email is required"
    }),
    password: z.string().min(8, {message: "Password must have at least 8 characters"})
})

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email({
        message: "Valid email is required"
    }),
    password: z.string().min(8, {message: "Password must have at least 8 characters"})
})