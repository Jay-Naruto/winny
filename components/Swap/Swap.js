import React, { useEffect, useState } from 'react'
import styles from "./Swap.module.css"
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'

export default function Swap() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })

  return (
    <div id='about' className={styles.swap}>
        <img className={styles.confetti} src='./confetti.png' alt=''/>

        <div className={styles.swapInside}>

        <Fade style={{zIndex: !isDesktopOrLaptop ? -2 : 2}} direction='left'>
        <img className={styles.dots} src='./mobile3.png' alt=''/>
        </Fade>
         
         <div className={styles.swapContent}>
        <img className={styles.el1} src='./el1.png' alt=''/>
        <img className={styles.pirate} src='./pirate.png' alt=''/>

        

            <div className={styles.swapH1}>
           PLAY AND
                </div>
                <div className={styles.swapH2}>
                WIN BIG 
                </div>
                <div className={styles.swapP}>
                Unlock endless gaming possibilities with Winny, powered by its unique native token!      
                </div>
                <div className={styles.swapBtn}>
            <img src='./download.png' alt=''/>
                </div>

            </div>

        </div>
    </div>
  )
}
