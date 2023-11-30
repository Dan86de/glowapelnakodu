import { Container } from '@/components/Container'
import Link from 'next/link'
import avatarImage from '../../../images/avatar.webp'
import signature from '../../../images/signature.webp'
import Image from 'next/image'

export default async function PortwierdzenieNagrania() {
  return (
    <div className="px-4 pb-12 pt-16 sm:pb-4 lg:px-8 lg:pt-24">
      <Container>
        <h1 className="text-2xl font-bold leading-9 text-zinc-900 lg:text-3xl">
          Nagranie podcastu Głowa Pełna Kodu - informacje techniczne
        </h1>
        <p className="pt-12 lg:pt-18">
          W przypadku podcastu liczy się nie tylko ciekawa treść, ale również
          poprawność techniczna. Jeżeli jakość dźwięku będzie bardzo słaba, to
          wielu odbiorców zrezygnuje z słuchania rozmowy na początku. Szkoda by
          było, prawda? Dlatego proszę o uważne zapoznanie się z poniższymi
          informacjami przed nagraniem. Jeżeli po przeczytaniu tej instrukcji
          nadal będziesz mieć pytania związane z nagraniem, daj mi znać, pisząc
          na adres <strong>daniel@programistafrontend.pl</strong>.
        </p>
        <h2 className="pt-8 text-xl font-bold leading-7 text-zinc-900 md:text-2xl">
          Co i w jaki sposób nagrywamy?
        </h2>
        <ul className="list-disc">
          <li className="pb-2 pt-8">
            Rozmowę grywamy w formie video na platformie{' '}
            <strong>Riverside.fm</strong> (link do studia, gdzie będziemy
            nagrywać
            <Link
              className="inline items-center text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
              href={
                'https://riverside.fm/studio/glowa-pelna-kodu?t=71adee18a9eabbdb9b7f'
              }
            >
              {' Studio'}
            </Link>
            )
          </li>
          <li className="pb-2">
            Wersję video umieszczam na swoim kanale YouTube{' '}
            <Link
              className="inline items-center text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
              href={'https://youtube.com/c/danielnoworyta'}
            >
              {' Programistafrontend'}
            </Link>
            , w dedykowanej odcinkom podcastu playliście.
          </li>
          <li className="pb-2">
            Ściezka dzwiękowa z rozmowy jest publikowana jako{' '}
            <Link
              className="inline items-center text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
              href={'https://glowapelnakodu.pl'}
            >
              {' podcast do słuchania'}
            </Link>
            .
          </li>
          <li className="pb-2">
            Nagraniem zajmuję się ja, ale{' '}
            <strong>Ciebie proszę o nagranie swojego głosu</strong>. Dzięki temu
            jakość dzwięku jest dużo lepsza. Wskazówki jak to zrobić znajdziesz
            w dajszej części instrukcji.
          </li>
        </ul>
        <h2 className="pt-8 text-xl font-bold leading-7 text-zinc-900 md:text-2xl">
          Jakiego sprzętu potrzebujesz?
        </h2>
        <p className="pb-4 pt-6 lg:pt-8">
          Żeby cała rozmowa nagrała się w dobrej jakości, potrzebujesz sprzętu
          do nagrywania wideo oraz dzwięku. Niezbędne są tutaj:
        </p>
        <ul className="list-decimal">
          <li className="pb-2">komputer z kamerą.</li>
          <li className="pb-2">słuchawki z mikrofonem.</li>
          <li className="pb-2">smartfon, dyktafon lub mikrofon USB.</li>
        </ul>
        <p className="pt-4 lg:pt-8">
          Poniżej znajdziesz opis wszystkich potrzebnych udządzeń:
        </p>

        <ol className="list-decimal pt-6">
          <li>
            <strong>Komputer z kamerą</strong> (i zainstalowaną przeglądarką
            Chrome lub Edge)
            <ul className="list-disc pl-4">
              <li className="pb-2 pt-1 lg:pt-3">
                Zamiast komputera może być tablet lub smartfon - ważne, żeby
                miał kamerę i zainstalowaną przeglądarkę Chrome lub Edge.
              </li>
              <li className="pb-2">
                Zadbaj, żeby urządzenie było ustawione stabilnie, nie chwiało
                się, a kamera znajdowała się mniej więcej na wysokości Twojego
                wzroku.
              </li>
            </ul>
          </li>
          <li className="pt-2">
            <strong>Schawki z mikrofonem</strong> (podłączone do komputera)
            <ul className="list-disc pl-4">
              <li className="pb-2 pt-1 lg:pt-3">
                Słuchawki są niezbędne, bo podczas nagrania nie możesz mnie
                słyszeć przez głośniki.
              </li>
              <li className="pb-2">
                Słuchawki muszą być wyposażone w mikrofon, bo inaczej nie będę
                Cię słyszał. Najlepiej sprawdzają się douszne słuchawki z
                mikrofonem na kabelku, takie jak do smartfona.
              </li>
              <li className="pb-2">
                Ważne! Sprawdź jak najszybciej czy słuchawki da się podłączyć do
                komputera i używać ich podczas rozmowy przez Skype`a. Niektóre
                komputery mają dwa osobne gniazda: do słuchawek i do mikrofonu.
                W takiej sytuacji używanie słuchawek od smartfona może być
                niemożliwe i zamiast komputera trzeba skorzystać ze smartfona
                lub tabletu.
              </li>
            </ul>
          </li>
          <li className="pt-2">
            <strong>Smartfon, dyktafon lub mikrofon USB</strong>
            <ul className="list-disc pl-4">
              <li className="pb-2 pt-1 lg:pt-3">
                Każdego z tych urządzeń można użyć jako mikrofonu, żeby nagrać
                Twój głos w dobrej jakości.
              </li>
              <li className="pb-2">
                Mikrofon, który masz na kabelku słuchawek od smartfona, nie
                nadaje się do tego celu.
              </li>
            </ul>
          </li>
        </ol>
        <p className="pt-2 lg:pt-4">
          W razie pytań i wątpliwości napisz do mnie{' '}
          <Link
            className="inline items-center text-sm font-bold leading-6 text-brand hover:text-orange-700 active:text-orange-900"
            href={'mailto:daniel@programistafrontend.pl'}
          >
            {' daniel@programistafrontend.pl'}
          </Link>
        </p>
        <h2 className="pt-8 text-xl font-bold leading-7 text-zinc-900 md:text-2xl">
          Pomieszczenie do nagrywania i inne ważne wskazówki
        </h2>
        <p className="pt-6 lg:pt-8">
          Pomieszczenie, w którym nagrywasz, ma bardzo duże znaczenie, dlatego
          uważnie przeczytaj poniższe wskazówki.
        </p>
        <ol className="list-decimal pt-6">
          <li className="mb:pb-4 pb-3">
            Znajdź ciche, spokojne miejsce, gdzie nikt Ci nie będzie
            przeszkadzał.
          </li>
          <li className="pb-3 md:pb-4">
            Unikaj pomieszczeń z gołymi ścianami, bo dźwięk się od nich odbija.
            Twój głos jest wtedy zniekształcony i słuchacz się męczy. Im więcej
            dookoła tkanin, mebli tapicerowanych, książek itp. - tym lepiej.
          </li>
          <li className="pb-3 md:pb-4">
            Jeżeli od czasu do czasu za oknem będzie słychać przejeżdżający
            samochód, to nie ma wielkiego problemu. Znacznie gorszy jest cichy,
            ale jednostajny dźwięk, np. wentylator. W przypadku gdy wiatrak w
            Twoim komputerze hałasuje, postaraj się jak najbardziej odsunąć go
            od mikrofonu i oddzielić np. ustawioną na blacie książką w twardej
            oprawie (żeby stała stabilnie).
          </li>
          <li className="pb-3 md:pb-4">
            Ze względu na wideo nie powinieneś mieć za plecami źródła światła
            (np. okna). Jeżeli masz lampę do wideo (softbox) to może się
            przydać, żeby doświetlić twarz.
          </li>
          <li className="pb-3 md:pb-4">
            Ważne jest szybkie i stabilne łącze internetowe. Wybierz miejsce,
            gdzie sieć działa najlepiej.
          </li>
          <li className="pb-3 md:pb-4">
            Jeżeli masz taką możliwość, skorzystaj z internetu podłączonego
            kablem, a nie wi-fi (wtedy połączenie jest lepszej jakości).
          </li>
          <li className="pb-3 md:pb-4">
            Przed nagraniem zresetuj komputer i wyłącz wszystkie aplikacje
            działające w tle (Dropbox, aktualizacje systemu itp.).
          </li>
          <li className="pb-3 md:pb-4">
            W czasie nagrania staraj się jak najczęściej patrzeć prosto w
            kamerę, a nie na ekran.
          </li>
        </ol>
        <h2 className="pt-8 text-xl font-bold leading-7 text-zinc-900 md:text-2xl">
          W jaki sposób promuję podcast?
        </h2>
        <ul className="list-disc">
          <li className="pb-2 pt-8">
            Do promocji podcastu używam głównie fragmentów naszej rozmowy. Przed
            wypuszczeniem odcinka staram się nagrać zapowiedź w krótkiej
            jednominutowej formie, gdzie mogę zamieścić interesujące fragmenty
            naszej rozmowy.
          </li>
          <li className="pb-2">
            Będę potrzebował Twoje zdjęcie najlepiej takie, w którym patrzysz
            prosto w obiektyw. Zdjęcie będzie wykorzystane do zrobienia okładki
            podcastu i miniaturki na wersję video na kanale YouTube.
          </li>
          <li className="pb-2">
            Jeżeli masz jakieś bio lub notkę dla mediów podziel się proszę, jej
            treścią ze mną.
          </li>
          <li className="pb-2">
            Odcinek promuję również na innych kanałach w Social Mediach, oraz w
            newsletterze programistafrontend.
          </li>
        </ul>
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
      </Container>
    </div>
  )
}
