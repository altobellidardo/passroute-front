'use client'

import { cn } from '@/libs/tailwind'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/button'

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
            <li><HeaderLink href='/nosotros' active={pathname === '/nosotros'}>Nosotros</HeaderLink></li>
          </ul>
        </nav>

        {isAuthPage
          ? <h5 className='text-purple-500 font-semibold'>Únete a la comunidad</h5>
          : (<div className='flex space-x-4'>
            <Link href='/auth/ingreso'>
              <Button>Ingresar</Button>
            </Link>
            <Link href='/auth/registro'>
              <Button variant='secondary'>Registrarse</Button>
            </Link>
          </div>)
        }
      </div>
    </header>
  )
}

export default Header;
