'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ text = 'Wyślij' }: { text: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded-md border border-transparent bg-brand px-4 py-2.5 text-sm font-bold leading-6 text-brand text-zinc-50 shadow-sm  outline-none ring-1 ring-inset ring-zinc-300 transition-colors duration-200 ease-in-out placeholder:text-gray-400 hover:bg-orange-700 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 active:text-orange-900 lg:inline-block"
    >
      {text}
    </button>
  )
}
