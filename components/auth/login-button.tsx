"use client"
import { useRouter } from "next/navigation"

interface loginButtonProps {
    children: React.ReactElement
    mode?: "model" | "redirect"
    asChild?: boolean
}

export const LoginButton = ({
    children, mode, asChild
}: loginButtonProps) => {

    const router = useRouter()
    
    const onClick = () => {
        router.push( "auth/login")
    }
    return <div>
        <span onClick={onClick}>
            {children}
        </span>

    </div>
}