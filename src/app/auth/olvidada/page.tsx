import Link from 'next/link'


function ForgotPage() {
  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Recupera tu contraseña
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Ingresá tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Dirección de correo electrónico"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Enviar correo de recuperación
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/auth/ingreso" className="font-medium text-purple-500 hover:text-purple-400">
            Volver al ingreso
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ForgotPage
