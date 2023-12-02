import { getDb } from '@/service/notion'

const sides = [
  { id: 1, name: 'Siebie', value: 'self' },
  { id: 2, name: 'Kogoś innego', value: 'other' },
]

export const GuestSuggestionForm = () => {
  return (
    <form className="pt-4 accent-brand" action={getDb}>
      <fieldset>
        <legend className="text-base font-semibold text-zinc-900">
          Kogo sugerujesz?
        </legend>
        <div className="mt-4 divide-y divide-zinc-200 border-b border-t border-zinc-200">
          {sides.map((side, sideIdx) => (
            <div key={sideIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label
                  htmlFor={`side-${side.id}`}
                  className="select-none font-medium text-zinc-900"
                >
                  {side.name}
                </label>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <input
                  id={`side-${side.id}`}
                  name="who"
                  type="radio"
                  defaultChecked={side.id === 2}
                  className="h-4 w-4 border-zinc-300 text-orange-600 focus:ring-orange-600"
                  value={side.value}
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
      <div className="space-y-2 py-6">
        <legend className="text-base font-semibold text-zinc-900">
          Dane kontaktowe
        </legend>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-zinc-900"
          >
            Imię
          </label>
          <div className="mt-2">
            <input
              required
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              placeholder="Wpisz imię"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="surname"
            className="block text-sm font-medium leading-6 text-zinc-900"
          >
            Nazwisko
          </label>
          <div className="mt-2">
            <input
              required
              type="text"
              name="surname"
              id="surname"
              className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              placeholder="Wpisz nazwisko"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-zinc-900"
          >
            Email gościa
          </label>
          <div className="mt-2">
            <input
              required
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
              placeholder="Wpisz email"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2 py-4">
        <legend className="text-base font-semibold text-zinc-900">
          Dodatkowe informacje
        </legend>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6 text-zinc-900"
          >
            Napisz coś więcej na temat proponowanej osoby
          </label>
          <div className="mt-2">
            <textarea
              required
              minLength={50}
              rows={4}
              name="message"
              id="message"
              className="block w-full resize-none rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300  placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 sm:text-sm sm:leading-6"
              defaultValue={''}
              placeholder="Napisz dlaczego powinienem porozmawiać z proponowaną przez Ciebie osobą. Jeżeli możesz podaj informacje takie jak nazwa firmy, wiek firmy, adres www firmy, proponowany temat rozmowy, linki do social mediów i ciekawe fakty. Wszystko co może mi pomóc, odpowiednio przygotować się do wywiadu."
            />
          </div>
        </div>
      </div>
      <button type="submit">Zaproponuj gościa</button>
    </form>
  )
}
