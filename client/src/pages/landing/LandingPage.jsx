import { LoginForm } from "@/components/login-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-slate-900">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
