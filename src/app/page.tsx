import { User } from 'lucide-react'
import Image from 'next/image'

// imgs
import nlwLogo from './../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r border-white-100/10 bg-[url(../assets/bg-stars.svg)] px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
          href=""
        >
          {/* profile photo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
            <User className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* hero section */}

        <div className="space-y-5">
          {/* logo */}
          <Image src={nlwLogo} alt="Nlw logo" />

          <div className="max-w-[420px] space-y-1">
            {/* title */}
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>

            {/* sub-title */}
            <p>
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a className="inline-block" href="">
            CADASTRAR LEMBRANÇA
          </a>
        </div>
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
