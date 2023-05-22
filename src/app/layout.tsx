import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import Blur from '@/components/blur/Blur'
import Stripe from '@/components/Stripe/Stripe'
import Profile from '@/components/Profile/Profile'
import SignIn from '@/components/SignIn/SignIn'
import HeroSection from '@/components/HeroSection/HeroSection'
import Copyright from '@/components/Copyright/copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma capsula do tempo construida com react, next.Js, tailwindCSS e typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white-100/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* blur */}
            <Blur />
            {/* stripes */}
            <Stripe />
            {/* SINGIN */}
            {isAuthenticated ? <Profile /> : <SignIn />}
            {/* hero section */}
            <HeroSection />

            {/* copyright */}
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
