import React, { useEffect, useState } from 'react'
import styles from "./Swap.module.css"

export default function Swap() {

  return (
    <div className={styles.swap}>
        <div className={styles.swapInside}>
        <img className={styles.dots} src='./dots.png' alt=''/>

            <div>
            <img className={styles.calc} src='./calc.png' alt=''/>
            </div>
            <div className={styles.swapContent}>
            <div className={styles.swapH1}>
            Instantly Swap 
                </div>
                <div className={styles.swapH2}>
                Your TLC Coin
                </div>
                <div className={styles.swapP}>
                Lorem ipsum dolor sit amet consectetur. Lacus purus in placerat nibh. In diam scelerisque quam scelerisque viverra eget. Tellus velit at lectus condimentum est morbi egestas dignissim eu. Lectus nibh in lectus id facilisis ut dictum urna. Risus tellus lectus purus leo fringilla ipsum. Nulla potenti nisi nibh dictum commodo orci.
                </div>
                <div className={styles.swapBtn}>
            <img src='./swapbtn.png' alt=''/>
                </div>

            </div>

        </div>
    </div>
  )
}
