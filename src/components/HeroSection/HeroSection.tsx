import Image from 'next/image'

import nlwLogo from '../../assets/nlw-spacetime-logo.svg'

export default function HeroSection() {
  return (
    <div className="space-y-5">
      {/* logo */}
      <Image src={nlwLogo} alt="Nlw logo" />

      <div className="max-w-[420px] space-y-1">
        {/* title */}
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>

        {/* sub-title */}
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        className="inline-block rounded-full bg-green-500 px-5  py-3 font-alt text-sm uppercase leading-none text-black-100 transition-colors hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}
