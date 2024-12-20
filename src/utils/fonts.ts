import { Poppins, Michroma } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins'
})

export const michroma = Michroma({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-michroma'
})