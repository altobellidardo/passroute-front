import { ArrowRight, Calendar, MapPin, Music } from 'lucide-react'

const events = [
  { title: 'Neon Nights', date: 'June 15, 2024', location: 'Downtown Club', genre: 'Electronic' },
  { title: 'Retro Groove', date: 'June 22, 2024', location: 'Vintage Lounge', genre: 'Disco' },
  { title: 'Summer Bash', date: 'July 1, 2024', location: 'Beach Resort', genre: 'Pop' }
]

export default function Home () {
  return (
    <>
    <main className='flex-grow'>
      <section className='py-60 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Bienvenido a <span className='text-purple-600'>PassRoute</span></h1>
        <p className='text-xl mb-8'>¡Encuentra y promociona los eventos más populares!</p>
        <a href='#events' className='border-2 border-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors'>
          Explorar Eventos <ArrowRight className='ml-2' />
        </a>
      </section>

      <section id='events' className='py-20 bg-purple-900/10'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-12 text-center'>Eventos destacados</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {events.map((event, index) => (
              <div key={index} className='bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold mb-2'>{event.title}</h3>
                  <p className='flex items-center mb-2'><Calendar className='mr-2' size={18} /> {event.date}</p>
                  <p className='flex items-center mb-2'><MapPin className='mr-2' size={18} /> {event.location}</p>
                  <p className='flex items-center mb-4'><Music className='mr-2' size={18} /> {event.genre}</p>
                  <a href='#' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-block transition-colors'>Get Tickets</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='about' className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold mb-8 text-center'>About PassRoute</h2>
          <p className='text-xl text-left max-w-3xl mx-auto'>
            PassRoute es el destino ideal para descubrir y promocionar las fiestas y eventos más emocionantes de la ciudad. Conectamos a los asistentes a las fiestas con experiencias inolvidables y ayudamos a los organizadores de eventos a llegar a su público objetivo.
          </p>
        </div>
      </section>
    </main>
    <footer className='bg-gray-800 py-6 text-center'>
      <p>&copy; 2024 PassRoute. All rights reserved.</p>
    </footer>
    </>
  )
}
