"use client"

import { FcGoogle} from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export const Social = () => {
    return (
        <div className="flex gap-x-2 w-1/2 items-center">
          
            <Button size="lg"
                className="w-full"
                variant="outline"
                onClick = {()=>{}}>
                <FcGoogle />
            </Button>
            <Button size="lg"
                className="w-full"
                variant="outline"
                onClick = {()=>{}}>
                <FaGithub />
            </Button>
            </div>
    )
}