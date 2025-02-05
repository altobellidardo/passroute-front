import Footer from '@/components/footer'
import Button from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home () {
  return (
    <>
    <main className='flex-grow pb-20'>
      <section className='py-60 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Bienvenido a <span className='text-purple-600'>PassRoute</span></h1>
        <p className='text-xl mb-8'>¡Encuentra y promociona los eventos más populares!</p>
        <Link href='/eventos'>
          <Button variant='primary' size='xl' rounded className='inline-flex items-center'>
            Explorar Eventos <ArrowRight className='ml-2' />
          </Button>
        </Link>
      </section>

      <section id='about' className='py-20'>
        <div className='container px-4 max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold mb-8'>Acerca de PassRoute</h2>
          <p className='text-xl text-left max-w-3xl mx-auto'>
            <span className='text-purple-600 font-bold'>PassRoute</span> es el destino ideal para descubrir y promocionar las fiestas y eventos más emocionantes de la ciudad. Conectamos a los asistentes a las fiestas con experiencias inolvidables y ayudamos a los organizadores de eventos a llegar a su público objetivo.
          </p>
        </div>
      </section>

      <section id='contact' className='py-20'>
        <div className='container px-4 max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold mb-8'>Contacto</h2>
          <p className='text-xl text-left max-w-3xl mx-auto'>
            Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. Estamos aqui para ayudarte.
          </p>
        </div>
      </section>
    </main>

    <Footer />
    </>
  )
}
