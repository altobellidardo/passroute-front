import { Calendar, MapPin, Music } from 'lucide-react'
import Link from 'next/link'

const events = [
  { title: 'Neon Nights', date: 'June 15, 2024', location: 'Downtown Club', genre: 'Electronic' },
  { title: 'Retro Groove', date: 'June 22, 2024', location: 'Vintage Lounge', genre: 'Disco' },
  { title: 'Summer Bash', date: 'July 1, 2024', location: 'Beach Resort', genre: 'Pop' }
]

function EventsPage () {
  return (
    <main className='flex-grow bg-purple-900/10'>
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-center'>Eventos destacados</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {events.map((event, index) => (
              <div key={index} className='bg-gray-800/60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold mb-2'>{event.title}</h3>
                  <p className='flex items-center mb-2'><Calendar className='mr-2' size={18} /> {event.date}</p>
                  <p className='flex items-center mb-2'><MapPin className='mr-2' size={18} /> {event.location}</p>
                  <p className='flex items-center mb-4'><Music className='mr-2' size={18} /> {event.genre}</p>
                  <a href='#' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-block transition-colors'>
                    Ver más
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='pb-20 mx-auto px-4 flex flex-col items-center space-y-4'>
        <h3 className='text-2xl font-bold text-center'>Para ver todos los eventos disponibles, crea tu cuenta</h3>
        <Link href='/auth/registro' className='border-2 border-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-2xl inline-flex items-center transition-colors'>
          Registrarse
        </Link>
      </section>
    </main>
  )
}

export default EventsPage
