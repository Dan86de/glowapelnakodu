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
            <li>produktywności</li>
            <li>nauce programowania</li>
            <li>zdobywaniu pierwszej pracy</li>
            <li>przekwalifikowaniu się na IT</li>
            <li>budowaniu swojego brandu w IT</li>
            <li>zdobywaniu i rozwijaniu umiejętności miękkich</li>
          </ul>
          <GuestSuggestionForm />
        </Container>
      </div>
    </div>
  )
}
