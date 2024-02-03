import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Landing from '@/components/Landing/Landing'
import About from '@/components/About/About'
import VerticalTab from '@/components/Services/VerticalTab'
import Data from "../data.js";
import PlayStore from '@/components/PlayStore/PlayStore.js'
// import Future from '@/components/Future/Future.js'
// import Swap from '@/components/Swap/Swap.js'
import Partners from '@/components/Partners/Partners.js'
import Script from 'next/script';
import Founder from '@/components/Founder/Founder.js'
import Footer from '@/components/Footer/Footer.js'
import Header from '@/components/Header/Header.js'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading.js'
import dynamic from 'next/dynamic'
// import Map from '@/components/Map/Map.js'
// import Bottom from '@/components/Bottom/Bottom.js'
const Roadmap = dynamic(() => import('@/components/Roadmap/Roadmap.js'), { ssr: false })
const Future = dynamic(() => import('@/components/Future/Future.js'), { ssr: false })
const Swap = dynamic(() => import('@/components/Swap/Swap.js'), { ssr: false })
const Map = dynamic(() => import('@/components/Map/Map.js'), { ssr: false })
const Bottom = dynamic(() => import('@/components/Bottom/Bottom.js'), { ssr: false })

// const Partners = dynamic(() => import('@/components/Partners/Partners.js'), { ssr: false })

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
      <Head>
        <title>Winny</title>
        <meta name="description" content="Winny" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="./vec.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="./vec.ico" />
          <link rel="icon"  sizes="32x32" href="./vec.ico"/>
          <link rel="icon"  sizes="16x16" href="./vec.ico"/>
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
      <Future/>
      {/* <PlayStore/> */}
      <Swap/>
      <Roadmap/>

      <Partners/>
      <Map/>
      <Bottom/>



 
      {/* <Footer/> */}
        
      </>

      

  )
}
