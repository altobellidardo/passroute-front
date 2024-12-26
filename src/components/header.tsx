'use client'

import { cn } from '@/libs/tailwind'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function HeaderLink ({ href, children, active }: { href: string, children: React.ReactNode, active: boolean }) {
  const classes = cn('hover:text-purple-500 transition-colors', {'text-purple-500 font-bold': active })
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

function Header() {
  const pathname = usePathname()
  const isAuthPage = pathname.includes('auth')

  return (
    <header className='bg-purple-900/10 py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/' className='text-3xl font-bold text-purple-500'>PassRoute</Link>
        <nav>
          <ul className='flex space-x-6'>
            <li><HeaderLink href='/' active={pathname === '/'}>Inicio</HeaderLink></li>
            <li><HeaderLink href='/eventos' active={pathname === '/eventos'}>Eventos</HeaderLink></li>
            <li><HeaderLink href='/nosotros' active={pathname === '/about'}>Nosotros</HeaderLink></li>
          </ul>
        </nav>

        {isAuthPage
          ? <h5 className='text-purple-500 font-semibold'>Únete a la comunidad</h5>
          : (<div className='flex space-x-2'>
            <Link href='/auth/ingreso' className='border-2 text-purple-100 border-purple-600 hover:bg-purple-700 font-semibold py-1 px-4 rounded-lg transition-colors'>Ingresar</Link>
            <Link href='/auth/registro' className='border-2 border-purple-600 bg-purple-600 hover:bg-purple-700 text-purple-100 font-semibold py-1 px-4 rounded-lg transition-colors'>Registrarse</Link>
          </div>)
        }
      </div>
    </header>
  )
}

export default Header;
