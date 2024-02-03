import React from 'react'
import styles from "./Future.module.css"
// import { Tilt } from 'react-tilt'
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from 'react-responsive'

const defaultOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            35,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  speed:          2000,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "ease",    // Easing on enter/exit.
}

export default function Future() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 1000px)'
  })

  
  return (
    <div className={styles.future}>
      <img className={styles.landingbkg} src='./landingbkg.png' alt=''/>

        <div  className={styles.futureBox}>
            <div  className={styles.futureContent}>
            <div className={styles.textPink}>
            A Community For Gamers
            </div>
            <div  className={styles.textWhite}>
            by Winny
            </div>
            <div  className={styles.textSmallWhite}>
            Meet, network, make new friends play together and <strong>WIN BIG</strong>
            </div>

            <div className={styles.btnRow}>
                <div  className={styles.btn1}>
<img src='./download.png' alt=''/>
                </div>
                <div className={styles.btn1}>
                <img src='./works.png' alt=''/>
                </div>
            </div>

            </div>
            <div  className={styles.futureImg}>
            <Fade className={styles.center} direction='right'>
              <img src='./mobile.png' alt=''/>
              </Fade>


            </div>


        </div>

    </div>
  )
}
