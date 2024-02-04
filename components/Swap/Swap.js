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
                BIG WIN
                </div>
                <div className={styles.swapP}>
 Tellus velit at lectus condimentum est morbi egestas dignissim eu. Lectus nibh in lectus id facilisis ut dictum urna. Risus tellus lectus purus leo fringilla ipsum. Nulla potenti nisi nibh dictum commodo orci.
                </div>
                <div className={styles.swapBtn}>
            <img src='./download.png' alt=''/>
                </div>

            </div>

        </div>
    </div>
  )
}
