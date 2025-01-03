import { notFound } from 'next/navigation'
import { cache } from 'react'

import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'
import { getAllEpisodes } from '@/lib/episodes'
import { Metadata } from 'next'


type PageProps = {
  params: Promise<{
    episode: string
  }>
}

const getEpisode = cache(async (id: string) => {
  const allEpisodes = await getAllEpisodes()

  const episode = allEpisodes[parseInt(id)-1]

  if (!episode) {
    notFound()
  }

  return episode
})

function makeUrlsClickable(text:string) {
  const urlRegex = /(http[s]?:\/\/[^\s<]+)/g;
  const transformedText = text.replace(urlRegex, '<a href="$&" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; color: rgb(234 88 12 / var(--tw-bg-opacity))">$&</a>');
  return transformedText;
}

export async function generateMetadata(
  props: {
    params: Promise<{ episode: string }>
  }
): Promise<Metadata> {
  const params = await props.params;
  let episode = await getEpisode(params.episode)

  return {
    title: episode.title,
    description: episode.description,
    openGraph: {
      title: episode.title,
      description: episode.description,
      audio: {
        url: episode.audio.src,
        type: episode.audio.type,
      },
    },
  }
}

export default async function Episode({params}: PageProps) {
  const { episode:episodeId } = await params
  let episode = await getEpisode(episodeId)
  let date = new Date(episode.published)

  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex flex-col">
          <div className="flex items-center gap-6">
            <EpisodePlayButton
              episode={episode}
              className="group relative flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-900 focus:outline-none focus:ring focus:ring-zinc-700 focus:ring-offset-4"
              playing={
                <PauseIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
              paused={
                <PlayIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
            />
            <div className="flex flex-col">
              <h1 className="mt-2 text-4xl font-bold text-zinc-900">
                {episode.title}
              </h1>
              <FormattedDate
                date={date}
                className="order-first font-mono text-sm leading-7 text-zinc-500"
              />
            </div>
          </div>
          <p className="ml-24 mt-3 text-lg font-medium leading-8 text-zinc-700">
            {episode.description}
          </p>
        </header>
        <hr className="my-12 border-gray-200" />
        <div
          className="prose prose-zinc [&>h2:nth-of-type(3n)]:before:bg-orange-600 [&>h2:nth-of-type(3n+2)]:before:bg-orange-600 [&>h2]:flex [&>h2]:items-center
           [&>h2]:mt-4 [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-bold [&>h2]:leading-7 [&>h2]:text-zinc-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-orange-600 [&>ul]:mt-2 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>a]:underline"
          dangerouslySetInnerHTML={{ __html: makeUrlsClickable(episode.content) }}
        />
      </Container>
    </article>
  )
}
