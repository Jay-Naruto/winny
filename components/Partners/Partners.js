import React, { useEffect } from 'react'
import styles from "./Partners.module.css"
import CardsComp from '../CardsComp/CardsComp'
import { useMediaQuery } from 'react-responsive'
export default function Partners() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
      useEffect(() => {

      }, []);
  return (
    <div className={styles.partners}>
        <div className={styles.bkgBody}>
        <img data-aos="fade-up" className={styles.spAll} src= 
        { isDesktopOrLaptop ? "./Section 3.png" : './Section 3.png'} alt=''/>
      
        <div className={styles.spContent}>
        Lorem ipsum dolor sit amet
            <br></br><br>
            </br>
            <img src='./download.png' alt=''/>
         
        </div>
        </div>
        <img className={styles.el2} src='./el2.png' alt=''/>
 
        <div className={styles.project}>

        <img className={styles.box} src='./box.png' alt=''/>


            <div  className={styles.projectContent} >
                <div className={styles.projectBody}>

                <div className={styles.text1} >
                   CALL OF
                </div>
                <div className={styles.text1}>
                    DUTY
                </div>
                <div className={styles.text2}>BLACK OPS</div>
                <div className={styles.text3}>
 Tellus velit at lectus condimentum est morbi egestas dignissim eu. Lectus nibh in lectus id facilisis ut dictum urna. Risus tellus lectus purus leo fringilla ipsum. Nulla potenti nisi nibh dictum commodo orci.
                    
                </div>

                </div>

                <div
                className={styles.projectSqImg} 
                >

                </div>
                </div>


            </div>
        </div>
  )
}
