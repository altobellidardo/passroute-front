import { Users, Calendar, Globe, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <main className="flex-grow">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Acerca de PassRoute</h1>
          <p className="text-xl mb-12 text-center text-gray-300">
            Conectando a los amantes de la fiesta con experiencias inolvidables desde 2024.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-800/60 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-500">Nuestra Misión</h2>
              <p className="text-gray-300">
                En PassRoute, estamos en una misión para revolucionar la forma en que las personas descubren y experimentan fiestas y eventos. Creemos que todos merecen acceso a las experiencias más emocionantes y memorables en su ciudad.
              </p>
            </div>
            <div className="bg-gray-800/60 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-500">Nuestra Visión</h2>
              <p className="text-gray-300">
              Imaginamos un mundo donde encontrar el evento perfecto sea fácil, donde cada noche de fiesta sea una aventura y donde las conexiones se forjen a través de experiencias compartidas. PassRoute no es sólo una plataforma; es una puerta de entrada a momentos inolvidables.  
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Lo que nos diferencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, title: "Impulsado por la comunidad", description: "Nuestra plataforma se nutre de las recomendaciones y reseñas de los usuarios." },
              { icon: Calendar, title: "Eventos seleccionados", description: "Seleccionamos cuidadosamente los mejores eventos para garantizar experiencias de calidad." },
              { icon: Globe, title: "Alcance global", description: "Descubra eventos en ciudades de todo el mundo." },
              { icon: Sparkles, title: "Ofertas Exclusivas", description: "Disfrute de descuentos especiales y acceso VIP a través de PassRoute." },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/60 p-6 rounded-lg shadow-lg text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/60 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Únete a la comunidad PassRoute</h2>
            <p className="text-xl text-center text-gray-300 mb-8">
            Si usted es un asistente a la fiesta que busca su próxima aventura o un organizador de eventos que desea llegar a una audiencia más amplia, PassRoute está aquí para conectarlo con oportunidades increíbles.
            </p>
            <div className="text-center">
              <Link href="/auth/registro" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full inline-block transition-colors">
                ¡Comienza hoy!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

