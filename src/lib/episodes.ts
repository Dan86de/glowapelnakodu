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
    // 'https://their-side-feed.vercel.app/api/feed',
  )

  let items = feed.items

  let episodes: Array<Episode> = items.map(
    ({ id, title, description, content, enclosures, published }) => ({
      id: id.split('/')[4],
      title,
      published: new Date(published),
      description: transformHtmlString(description).split('NOTATKI\n')[0],
      content: transformHtmlString(description).split('NOTATKI\n')[1],
      audio: enclosures.map((enclosure: Enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }),
  )

  return episodes
}

export function transformHtmlString(input: string): string {
  // Define replacements for various HTML elements
  const replacements: { [key: string]: string } = {
    '<br />': '\n',
    '</ul>': '\n</ul>\n',
    '<ul>': '<ul>\n',
    '<li>': '<li>',
    '</li>': '</li>\n',
  }

  // Replace HTML tags with the corresponding replacements
  let transformed = input.replace(
    /<br \/>|<\/?ul>|<\/?li>/g,
    (match) => replacements[match] || '',
  )

  transformed = transformed.replace(
    '<ul>',
    '<h2 id="topics">Poruszane zagadnienia</h2>\n<ul>',
  )

  return transformed
}

// TODO: ulepszyć logikę parsowania feeda
