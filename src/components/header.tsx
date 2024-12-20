import Link from 'next/link'

function Header() {
  return (
    <header className='bg-purple-900/10 py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/' className='text-3xl font-bold text-purple-500'>PassRoute</Link>
        <nav>
          <ul className='flex space-x-6'>
            <li><Link href='/' className='hover:text-purple-500 transition-colors'>Home</Link></li>
            <li><Link href='/events' className='hover:text-purple-500 transition-colors'>Events</Link></li>
            <li><Link href='/about' className='hover:text-purple-500 transition-colors'>About</Link></li>
          </ul>
        </nav>

        <div className='flex space-x-2'>
          <Link href='/auth/registro' className='border-2 text-purple-600 border-purple-600 hover:bg-purple-700 hover:text-black font-semibold py-1 px-4 rounded-xl transition-colors'>Registrarse</Link>
          <Link href='/auth/ingreso' className='border-2 border-purple-600 bg-purple-600 hover:bg-purple-700 text-black font-semibold py-1 px-4 rounded-xl transition-colors'>Ingresar</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
