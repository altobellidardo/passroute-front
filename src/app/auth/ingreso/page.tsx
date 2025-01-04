import Link from 'next/link'
import LoginForm from './form'

function Login() {
  return (
    <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Ingresar a tu cuenta de PassRoute
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Bienvenido de nuevo! Listo para explorar más eventos?
          </p>
        </div>

        <LoginForm />
        
        <div className="text-center">
          <p className="text-sm text-gray-400">
            No tienes una cuenta?{' '}
            <Link href="/auth/registro" className="font-medium text-purple-500 hover:text-purple-400">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Login
