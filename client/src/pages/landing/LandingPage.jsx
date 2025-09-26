import { LoginForm } from "@/components/login-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 absolute inset-0 -z-10 h-full  px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
