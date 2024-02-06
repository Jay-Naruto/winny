import React, { useEffect, useRef, useState } from 'react'
import styles from "./Roadmap.module.css"
import { useMediaQuery } from 'react-responsive'
import { Fade, Zoom } from 'react-awesome-reveal'
export default function Roadmap() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  return (
    <div  className={styles.ringBody} style={{position:'relative'}}>
       <img className={styles.confetti} src='./confetti.png' alt=''/>



        <img className={styles.roadmapBack} src='./multiring.png' alt=''/>
        <Fade delay={1000} className={styles.mobile4} direction='bottom'>
        <img  src='./mobile4.png' alt=''/>
        </Fade>
        <div >
          <Zoom>
          <div className={styles.textCenter}>
       
          WINNY</div>
          </Zoom>
        </div>


        <Fade className={styles.car} delay={1000} direction='left'>
       <img  src='./car.png' alt=''/>
       </Fade>
       <Fade className={styles.watch} delay={1000} direction='top'>
       <img src='./watch.png' alt=''/>
      </Fade>
       <Fade className={styles.bike} delay={1000} direction='right'>
       <img  src='./bike.png' alt=''/>
      </Fade>
    </div>
  )
}
