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
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-zinc-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        Podcast, który jest pełen praktycznych porad i inspiracji dla
        początkujących oraz doświadczonych programistów. Każdy odcinek to dawka
        wiedzy o zdobywaniu pierwszej pracy, rozwijaniu umiejętności, tworzeniu
        efektywnego portfolio i wielu innych aspektach, które pomogą Ci wyróżnić
        się na rynku pracy.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Więcej
        </button>
      )}
    </section>
  )
}
