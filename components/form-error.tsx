import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message?: string
}

export const FormError = ({
    message
}: FormErrorProps) => {

    if (!message) return null

    return (
        <div className="bg-destructive/15 p-3 rounded-md flex justify-center items-center gap-x-2 text destructive">
            <ExclamationTriangleIcon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    )

}