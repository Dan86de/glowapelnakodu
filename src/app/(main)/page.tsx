import Link from 'next/link'

import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { type Episode, getAllEpisodes } from '@/lib/episodes'

function PauseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
      />
    </svg>
  )
}

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
    </svg>
  )
}

function EpisodeEntry({ episode,episodeNumber }: { episode: Episode, episodeNumber: number}) {
  let date = new Date(episode.published)

  return (
    <article
      aria-labelledby={`episode-${episodeNumber}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${episodeNumber}-title`}
            className="mt-2 text-lg font-bold text-zinc-900"
          >
            <Link href={`/${episode.season}/${episodeNumber}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-zinc-500"
          />
          <p className="mt-1 text-base leading-7 text-zinc-700">
            {episode.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <EpisodePlayButton
              episode={episode}
              className="text-brand flex items-center gap-x-3 text-sm font-bold leading-6 hover:text-orange-700 active:text-orange-900"
              playing={
                <>
                  <PauseIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Słuchaj</span>
                </>
              }
              paused={
                <>
                  <PlayIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Słuchaj</span>
                </>
              }
            />
            <span
              aria-hidden="true"
              className="text-sm font-bold text-zinc-400"
            >
              /
            </span>
            <Link
              href={`/${episode.season}/${episodeNumber}`}
              className="text-brand flex items-center text-sm font-bold leading-6 hover:text-orange-700 active:text-orange-900"
              aria-label={`Notatki do odcinka ${episode.title}`}
            >
              Notatki do odcinka
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default async function Home() {
  let episodes = await getAllEpisodes()

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-zinc-900">Odcinki</h1>
      </Container>
      <div className="divide-y divide-zinc-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-zinc-100">
        {episodes.map((episode,index) => (
          <EpisodeEntry key={episode.id} episode={episode} episodeNumber={index+1} />
        )).reverse()}
      </div>
    </div>
  )
}

export const revalidate = 10
