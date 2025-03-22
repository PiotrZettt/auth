import { CheckCircledIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message?: string
}

export const FormSuccess = ({
    message
}: FormErrorProps) => {

    if (!message) return null

    return (
        <div className="bg-emerald-500/15 p-3 round-md rounded-md flex justify-center items-center gap-x-2 text-emerald-500">
            <CheckCircledIcon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    )

}