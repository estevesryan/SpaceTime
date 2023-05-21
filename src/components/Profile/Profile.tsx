import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatar_url } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      {/* profile photo */}
      <Image
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
        src={avatar_url}
        alt="profile picture"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}
