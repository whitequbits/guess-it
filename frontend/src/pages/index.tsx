import Head from 'next/head'
import { Inter } from '@next/font/google'
import Card from '@/components/card'
import CardBoard from '@/components/cardboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Who Is It | by floatman</title>
        <meta name="description" content="A Simple Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardBoard />
      </main>
    </>
  )
}
