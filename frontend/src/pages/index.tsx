import Head from 'next/head'
import GameContainer from '@/components/game_container'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess it | by floatman</title>
        <meta name="description" content="A Simple Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-blue-200 min-h-screen min-w-screen m-auto'>
        <div className='flex flex-col gap-8 items-center justify-center min-h-screen min-w-screen'>
            <h1 className='font-semibold text-2xl tracking-tight text-white'>Guess it !!!</h1>
            <Link href="/game#player-1-cardboard">
              <button className='text-sm px-4 py-2 w-18 lg:text-lg lg:w-40 leading-none border rounded text-white border-white bg-blue-500 hover:border-transparent hover:text-blue-500 hover:bg-white'>Create Room</button>
            </Link>
            <Link href="/about">
              <button className='text-sm px-4 py-2 w-18 lg:text-lg lg:w-40 leading-none border rounded text-white border-white bg-blue-500 hover:border-transparent hover:text-blue-500 hover:bg-white'>About</button>
            </Link>
        </div>
      </main>
    </>
  )
}
