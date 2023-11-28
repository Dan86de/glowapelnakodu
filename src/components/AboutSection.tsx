'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props: React.ComponentPropsWithoutRef<'section'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-zinc-900">
        <TinyWaveFormIcon
          colors={['fill-zinc-400', 'fill-brand']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">O podcaście</span>
      </h2>
      <div
        className={clsx(
          'mt-2 text-base leading-7 text-zinc-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        <p className="pb-4">
          Głowa Pełna Kodu to podcast, który prowadzi Cię w fascynującą podróż
          do umysłów ciekawych ludzi z różnych dziedzin.
        </p>

        <p className="pb-4">
          ZapraszamCię do wzięcia udziału w niezwykłych rozmowach, które
          odsłaniają różne aspekty życia ciekawych ludzi.{' '}
          <em>Głowa Pełna Kodu</em> to przestrzeń, w której nie ma miejsca na
          kompromisy, a jedynie prawdziwe historie, spojrzenia i przeżycia.
        </p>

        <p>
          Przyłącz się do moich fascynujących spotkań, gdzie każdy gość
          przekazuje swoją wiedze i doswiadczenie. Odkryjemy razem tajemnice,
          które skrywają się za pozornie zwyczajnymi ludźmi i będziemy czerpać
          inspirację z ich niezwykłych historii. To podcast, który rzuca
          wyzwanie konwencjom i stawia na autentyczność, aby każdy mógł poznać
          prawdę, która kryje się w <em>“Głowie Pełnej Kodu"</em>.
        </p>
      </div>
      {!isExpanded && (
        <button
          type="button"
          className="text-brand mt-2 hidden text-sm font-bold leading-6 hover:text-orange-700 active:text-orange-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Więcej
        </button>
      )}
    </section>
  )
}
