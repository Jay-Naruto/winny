import React from 'react'
import styles from "./Future.module.css"
import { useMediaQuery } from 'react-responsive'
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
              <img src='./mobile.png' alt=''/>


            </div>


        </div>

    </div>
  )
}
