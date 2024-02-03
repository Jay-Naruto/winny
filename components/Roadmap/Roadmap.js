import React, { useEffect, useRef, useState } from 'react'
import styles from "./Roadmap.module.css"
import { useMediaQuery } from 'react-responsive'
import { Fade, Zoom } from 'react-awesome-reveal'
export default function Roadmap() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  return (
    <div id='roadmap' className={styles.ringBody} style={{position:'relative'}}>

        <img className={styles.roadmapBack} src='./multiring.png' alt=''/>
        <Fade delay={1000} className={styles.mobile4} direction='bottom'>
        <img  src='./mobile4.png' alt=''/>
        </Fade>
        <div>
          <Zoom>
          <div className={styles.textCenter}>
          WINNY</div>
          </Zoom>
        </div>



    </div>
  )
}
