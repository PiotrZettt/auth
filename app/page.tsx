import Image from "next/image";
import { LoginButton } from "@/components/auth/login-button";

export default async function Home() {
  return (
    <div className="flex h-full items-center justify-center bg-radial-[at_95%_15%] from-sky-200 via-blue-400 to-blue-900 to-90%">
      <LoginButton>
        <h1 className="text-2xl rounded-2xl border-2 border-white p-4 cursor-pointer">Auth</h1>
      </LoginButton>
    </div>
  );
}
