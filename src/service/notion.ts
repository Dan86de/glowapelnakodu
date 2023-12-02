'use server'

import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export const getDb = async (data: FormData) => {
  const name = (data.get('name') as string) ?? ''
  const surname = (data.get('surname') as string) ?? ''
  const email = (data.get('email') as string) ?? ''
  const message = (data.get('message') as string) ?? ''

  const databaseId = process.env.NOTION_DB_ID

  if (!databaseId) throw new Error('Database ID not found')

  try {
    const res = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `${name} ${surname}`,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        'Additional Info': {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    })
    console.log(res)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
