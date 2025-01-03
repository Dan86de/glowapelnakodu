'use server'

import { Client } from '@notionhq/client'
import { redirect } from 'next/navigation'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export const suggestGuest = async (data: FormData) => {
  const name = (data.get('name') as string) ?? ''
  const who = (data.get('who') as string) ?? ''
  const surname = (data.get('surname') as string) ?? ''
  const email = (data.get('email') as string) ?? ''
  const message = (data.get('message') as string) ?? ''

  const databaseId = process.env.NOTION_DB_ID

  if (!databaseId) throw new Error('Database ID not found')

  const res = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      'Imię': {
        title: [
          {
            text: {
              content: `${name} ${surname}`,
            },
          },
        ],
      },
      'Adres Email': {
        email: email,
      },
      'Additional Info': {
        rich_text: [
          {
            text: {
              content: `Proponuję: ${who}\n ${message}`,
            },
          },
        ],
      },
    },
  })
  redirect('/sugestia-podziekowanie')

}
