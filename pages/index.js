import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/Landing/Landing'
import About from '@/components/About/About'
import VerticalTab from '@/components/Services/VerticalTab'
import Data from "../data.js";
import PlayStore from '@/components/PlayStore/PlayStore.js'
import Future from '@/components/Future/Future.js'
import Swap from '@/components/Swap/Swap.js'
import Partners from '@/components/Partners/Partners.js'
import Founder from '@/components/Founder/Founder.js'
import Footer from '@/components/Footer/Footer.js'
import Header from '@/components/Header/Header.js'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading.js'
import dynamic from 'next/dynamic'
const Roadmap = dynamic(() => import('@/components/Roadmap/Roadmap.js'), { ssr: false })
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [loader,setLoader]=useState(0)
  useEffect(()=>{
    setLoader(1)
 setTimeout(()=>{
setLoader(0)
 },2000)
  },[])
  return (
    <>

      {
        loader === 1?
        <Loading/>
        :
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


      }


      
    </>
  )
}
