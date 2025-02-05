'use client'

import { loginSubmit } from "@/actions/auth"
import PasswordInput from "@/components/passwordInput"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

function LoginForm() {
  const router = useRouter()

  async function login(formData: FormData) {
    const res = await loginSubmit(formData)

    if (res.error) {
      toast.error(res.error)
    } else {
      toast.success("Has iniciado sesión correctamente")
      router.push("/dashboard")
    }
  }

  return (
    <form className="mt-8 space-y-6" action={login}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-800"
            placeholder="Dirección de correo electrónico"
          />
        </div>
        <PasswordInput />
      </div>

      <div className="text-sm">
        <Link href="/auth/olvidada" className="font-medium text-purple-500 hover:text-purple-400">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Ingresar
        </button>
      </div>
    </form>
  )
}

export default LoginForm
