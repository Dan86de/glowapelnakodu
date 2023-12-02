import { Container } from '@/components/Container'
import { Waveform } from '@/components/Waveform'
import Image from 'next/image'
import Link from 'next/link'

import avatarImage from '../../images/avatar.webp'
import signature from '../../images/signature.webp'

export default async function SugestiaPodziekowanie() {
  return (
    <main className="relative flex h-full items-center py-36 lg:px-8">
      <Waveform className="absolute left-0 top-0 h-20 w-full" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6 lg:px-0">
        <h1 className="my-4 text-lg font-bold text-zinc-900">
          Dziękuję za zasugerowanie gościa do podcastu
        </h1>
        <p>
          Być moze będziesz zainteresowany najnowszym filmem na kanale{' '}
          <Link
            href="https://youtube.com/c/danielnoworyta"
            className="mt-4 text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
          >
            Programistafrontend{' '}
          </Link>
          lub zapisem na newsletter{' '}
          <Link
            href="https://programistafrontend.pl"
            className="mt-4 text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
          >
            Programistafrontend.
          </Link>
        </p>
        <div className="flex w-full justify-end pt-8">
          <div className="flex items-start gap-1">
            <Image
              src={avatarImage}
              alt="Avatar"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="flex flex-col justify-start pl-2">
              <strong>Daniel Noworyta</strong>
              <Link
                className="items-center text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
                href={'https://glowapelnakodu.pl'}
              >
                {'GlowaPelnaKodu.pl'}
              </Link>
              <Image
                src={signature}
                alt="Signature"
                className="h-20 w-40 -translate-x-5 object-cover"
              />
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="mt-4 text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  )
}
