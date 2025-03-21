const AuthLayout = ({children}: {children: React.ReactNode}) => {

    return <div className="flex h-full items-center justify-center bg-radial-[at_95%_15%] from-sky-200 via-blue-400 to-blue-900 to-90%">
        {children}
        </div>

}

export default AuthLayout