import './globals.css'
import Header from '@/components/header'
import { poppins, michroma } from '@/utils/fonts'

export const metadata = {
  title: 'PassRoute - Tu portal de eventos',
  description: '¡Encuentra y promociona las fiestas más populares de la ciudad!'
}

function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={`dark ${poppins.variable} ${michroma.variable} antialiased`}>
      <body className='bg-gray-900 text-white font-poppins'>
        <div className='min-h-screen flex flex-col'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout
