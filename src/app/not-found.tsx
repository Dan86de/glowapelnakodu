import Link from 'next/link'

import { Waveform } from '@/components/Waveform'

export default function NotFound() {
  return (
    <main className="relative flex h-full items-center py-36 lg:px-8">
      <Waveform className="absolute left-0 top-0 h-20 w-full" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6 lg:px-0">
        <p className="font-mono text-sm leading-7 text-zinc-500">404</p>
        <h1 className="mt-4 text-lg font-bold text-zinc-900">
          Strony nie znaleziono
        </h1>
        <p className="mt-2 text-base leading-7 text-zinc-700">
          Sorry, nie znalazłem strony którą szukasz.
        </p>
        <p>
          Być moze będziesz zainteresowany najnowszym filmem na kanale{' '}
          <Link
            href="https://youtube.com/c/danielnoworyta"
            className="text-brand mt-4 text-sm font-bold leading-6 hover:text-orange-700 active:text-orange-900"
          >
            Programistafrontend{' '}
          </Link>
          lub zapisem na newsletter{' '}
          <Link
            href="https://danielnoworyta.pl/newsletter"
            className="text-brand mt-4 text-sm font-bold leading-6 hover:text-orange-700 active:text-orange-900"
          >
            Programistafrontend.
          </Link>
        </p>
        <Link
          href="/"
          className="text-brand mt-4 text-sm font-bold leading-6 hover:text-orange-700 active:text-orange-900"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  )
}
