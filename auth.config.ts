import bcrypt from 'bcryptjs'
import Keycloak from "next-auth/providers/keycloak";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schemas"
import { getUserByEmail } from "./data/user";

import type { NextAuthConfig } from "next-auth"

export default {
    providers: [
        Github,
        Google, 
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (passwordsMatch) return user
                }
                return null
            }
        })]
} satisfies NextAuthConfig

