import React from 'react'
import styles from "./Landing.module.css"
import Typewriter from 'typewriter-effect';

export default function Landing() {
  return (
    <div>
            <img className={styles.looper} src='./Looper-3.png' alt=''/>

        <div className={styles.landing} >
            <div  className={styles.landingTitle} >
            Empowering a new<br></br>Generation of Trillionaires
            </div>
            <div  className={styles.landingContent} >
            <Typewriter
                            options={{
                                strings: [" Trillioner Coin: One stop solution for Crypto Banking."],
                                autoStart: true,
                                loop: true,
                            }}
                            />
           
            </div>
            <div  className={styles.landingBtn} >
              <a target='_blank' href='./whitepaper.pdf'>
              <img src='./bttn.png' alt=''/>
              </a>
           
            </div>
            <div className={styles.landingImage}>
            <img src='./front_bg.png' alt=''/>

            </div>
        </div>
    </div>
  )
}
