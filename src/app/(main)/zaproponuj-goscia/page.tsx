import { Container } from '@/components/Container'
import { GuestSuggestionForm } from '@/components/GuestSuggestionForm'

export default async function GuestSuggestion() {
  return (
    <div className="px-4 pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-zinc-900">
          Zaproponuj gościa
        </h1>
      </Container>
      <div className="sm:mt-4 lg:mt-8 lg:border-t lg:border-zinc-100">
        {/* content */}
        <Container className="py-4">
          <p>
            Standardowo chciałbym rozmawiać z kimś, kto ma coś do powiedzenia na
            temat:
          </p>
          <ul className="list-disc pt-2">
            <li>budowania i rozwoju swoich produktów</li>
            <li>pozyskiwania użytkowników</li>
            <li>zwiększania sprzedaży</li>
            <li>walidowania pomysłów biznesowych</li>
            <li>zmianę branży i naukę programowania</li>
          </ul>
          <GuestSuggestionForm />
        </Container>
      </div>
    </div>
  )
}
