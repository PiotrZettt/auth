"use server";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import * as z from "zod"
import bcrypt from "bcryptjs"
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email.toLowerCase())

    if (existingUser) {
        return { error: "Email already in use 😔"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
    return { success: "User created!"}
}