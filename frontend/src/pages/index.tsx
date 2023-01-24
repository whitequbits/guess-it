import Head from 'next/head'
import { Inter } from '@next/font/google'
import CardBoard from '@/components/cardboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess it | by floatman</title>
        <meta name="description" content="A Simple Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='container mx-auto px-4 py-4'>
          <CardBoard />
        </div>
      </main>
    </>
  )
}
