import { revalidatePath } from "next/cache"

function Form () {
  async function actionSubmit (formData: FormData) {
    'use server'

    const name = formData.get('name')
    await fetch('http://localhost:3000/event', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    revalidatePath('/prueba')
  }

  return (
    <form action={actionSubmit}>
      <input type="text" name="name" id="name" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
