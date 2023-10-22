import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/Landing/Landing'
import About from '@/components/About/About'
import VerticalTab from '@/components/Services/VerticalTab'
import Data from "../data.js";
import Roadmap from '@/components/Roadmap/Roadmap.js'
import PlayStore from '@/components/PlayStore/PlayStore.js'
import Future from '@/components/Future/Future.js'
import Swap from '@/components/Swap/Swap.js'
import Partners from '@/components/Partners/Partners.js'
import Founder from '@/components/Founder/Founder.js'
import Footer from '@/components/Footer/Footer.js'
import Header from '@/components/Header/Header.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Trillioner</title>
        <meta name="description" content="Trillioner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/roadmapIn.png" />
        <script type="text/javascript" src="https://widgets.rubic.exchange/iframe/bundle.min.js"></script>
        <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
        <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script>
        <script src="https://widgets.coingecko.com/coingecko-coin-list-widget.js"></script>
      </Head>
      <Header/>
      <Landing/>
      <About/>
      <VerticalTab data={Data.jobs} />
      <Roadmap/>
      <PlayStore/>
      <Future/>
      <Swap/>
      <Partners/>
      <Founder/>
      <Footer/>
      
    </>
  )
}
