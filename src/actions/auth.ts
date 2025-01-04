'use server'

export async function loginSubmit (formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  console.log({ email, password })

  if (!email || !password) {
    return { error: 'Por favor, completa todos los campos' }
  }

  if (email === 'test@test') {
    return { error: 'Credenciales incorrectas' }
  }

  return { success: true }
}