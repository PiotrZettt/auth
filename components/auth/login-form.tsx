"use client"

import { CardWrapper} from "@/components/auth/card-wrapper"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


export const LoginForm = () => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <CardWrapper showSocial headerLabel="Welcome back!" backButtonHref="/auth/register" backButtonLabel="Don't have an account?">
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(()=>{})}
                    className="space-y-6"
                    >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="name@example.com"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                         />
                    </div>

                </form>
            </Form>
        </CardWrapper>)
 
}