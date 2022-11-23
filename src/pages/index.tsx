import Head from 'next/head'
import * as Style from '../styles/style'

export default function Home() {
  return (
    <Style.Container>
      <Head>
        <title>Homepage</title>
        <meta name="home" content="Página inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </Style.Container>
  )
}
