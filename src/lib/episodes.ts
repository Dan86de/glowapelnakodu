import { parse as parseFeed } from 'rss-to-json'

export interface Episode {
  id: number
  title: string
  published: Date
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
}

export async function getAllEpisodes() {
  type Enclosure = {
    url: string
    type: string
    length: number
  }

  let feed = await parseFeed(
    'https://www.spreaker.com/show/6021143/episodes/feed',
  )

  let items = feed.items

  let episodes: Array<Episode> = items.map(
    ({ id, title, description, content, enclosures, published }) => {


      const episodeInfo = {
        id: id.split('/')[4],
        title,
        published: new Date(published),
        description: description.split(`NOTATKI`)[0].replace(/<[^>]*>/g, ''),
        content: transformHtmlString(`NOTATKI${description.split('NOTATKI')[1]}`),
        audio: enclosures.map((enclosure: Enclosure) => ({
          src: enclosure.url,
          type: enclosure.type,
        }))[0],
      }
      return episodeInfo
    },
  )

  return episodes.reverse()
}

export function transformHtmlString(input: string): string {
  let transformed = input

  transformed = transformed.replace(
    'NOTATKI',
    '<h2 id="topics">Opis odcinka</h2>',
  )

  transformed = transformed.replace(
      'ROZDZIAŁY',
      '<h2 id="sponsors">Główne zagadnienia</h2>',
  )

  transformed = transformed.replace(
      'LINKI',
      '<h2 id="links">Linki</h2>',
  )

  return transformed
}

