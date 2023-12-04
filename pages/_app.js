import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
            <Head>
        <title>Trillioner</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="./roadmapIn.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="./roadmapIn.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./roadmapIn.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="./roadmapIn.png"/>
        
      </Head>
  <Component {...pageProps} />

    </>
  )
}
