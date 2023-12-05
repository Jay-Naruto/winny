import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trillioner</title>
        <meta name="description" content="Trillioner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="./roadmapIn.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="./roadmapIn.ico" />
          <link rel="icon"  sizes="32x32" href="./roadmapIn.ico"/>
          <link rel="icon"  sizes="16x16" href="./roadmapIn.ico"/>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script type="text/javascript" src="https://widgets.rubic.exchange/iframe/bundle.min.js"></script>
        <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
        <script async src="https://static.coinstats.app/widgets/coin-chart-widget.js"></script>
        <script async src="https://static.coinstats.app/widgets/coin-price-widget.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
        <script>
  AOS.init();
</script>
      </Head>
  <Component {...pageProps} />

    </>
  )
}
