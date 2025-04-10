"use client"

import { CardWrapper} from "@/components/auth/card-wrapper"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "../form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"


export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(()=>{
            register(values)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success)
            })
        }
        )
    }

    console.log(" Error Login", error)

    return (
        <CardWrapper showSocial headerLabel="Register" backButtonHref="/auth/login/" backButtonLabel="Already have an account?">
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    >
                    <div className="space-y-4">
                    <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="First Last"
                                            type="name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                         />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="name@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                         />
                         <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                         />
                         <FormError message={error} />
                         <FormSuccess message={success}/>
                         <Button disabled={isPending} type="submit" className="w-full">
                            Create an account 
                         </Button>
                    </div>

                </form>
            </Form>
        </CardWrapper>)
 
}