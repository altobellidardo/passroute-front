import Form from "./form"

async function Page () {
  const res = await fetch('http://localhost:3000/event')
  const data = await res.json()

  return (
    <main>
      <h1>Prueba</h1>
      <p>{JSON.stringify(data)}</p>

      <Form />
    </main>
  )
}

export default Page
