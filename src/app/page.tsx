import Copyright from '@/components/Copyright/copyright'
import HeroSection from '@/components/HeroSection/HeroSection'
import SignIn from '@/components/SignIn/SignIn'
import Stripe from '@/components/Stripe/Stripe'
import Blur from '@/components/blur/Blur'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r border-white-100/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* blur */}
        <Blur />
        {/* stripes */}
        <Stripe />
        {/* SINGIN */}
        <SignIn />
        {/* hero section */}
        <HeroSection />

        {/* copyright */}
        <Copyright />
      </div>

      {/* Right */}
      <div className="bg-cover flex flex-col bg-[url(../assets/bg-stars.svg)] p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="underline hover:text-gray-50" href="">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
