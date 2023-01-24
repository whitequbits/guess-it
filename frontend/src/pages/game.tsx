import Head from 'next/head'
import GameContainer from '@/components/game_container'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Game() {
  return (
    <>
      <Head>
        <title>Guess it | by floatman</title>
        <meta name="description" content="A Simple Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <GameContainer />
        <Footer />
      </main>
    </>
  )
}
