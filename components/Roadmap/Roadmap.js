import React from 'react'
import styles from "./Roadmap.module.css"
import { useMediaQuery } from 'react-responsive'
export default function Roadmap() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  return (
    <div id='roadmap' style={{position:'relative'}}>
        <img className={styles.roadmap} src={ isDesktopOrLaptop ? './roadmap2.png' : './roadmap.png'} alt=''/>
        <img className={styles.roadmapInside} src='./roadmapIn.png' alt=''/>
        <img className={styles.roadmapBack} src='./roadmapBack.png' alt=''/>


    </div>
  )
}
