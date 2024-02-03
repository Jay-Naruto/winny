import React from 'react'
import styles from "./Bottom.module.css"
import CardsComp from '../CardsComp/CardsComp'
import { useMediaQuery } from 'react-responsive'
export default function Bottom() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
  return (
    <div className={styles.partners}>
        <div className={styles.bkgBody}>
        <img  className={styles.spAll} src= 
        { isDesktopOrLaptop ? "./Section 6.png" : './Section 6.png'} alt=''/>
      
        <div className={styles.spContent}>
        Lorem ipsum dolor sit amet
            <br></br><br>
            </br>
            <img src='./download.png' alt=''/>
         
        </div>

        </div>
        <div className={styles.footer}>
            <div  className={styles.footer1}>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>

            </div>
            <div  className={styles.footer2}>
            Copyright © <strong>Winny</strong> 
            </div>
        </div>
    </div>
  )
}
