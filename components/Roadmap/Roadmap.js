import React, { useEffect, useRef, useState } from 'react'
import styles from "./Roadmap.module.css"
import { useMediaQuery } from 'react-responsive'
export default function Roadmap() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  return (
    <div id='roadmap' className={styles.ringBody} style={{position:'relative'}}>

        <img className={styles.roadmapBack} src='./multiring.png' alt=''/>
        <img  className={styles.mobile4} src='./mobile4.png' alt=''/>
        <div className={styles.textCenter}>WINNY</div>


    </div>
  )
}
