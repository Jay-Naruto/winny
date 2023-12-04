import React from 'react'
import styles from "./About.module.css"
import Typewriter from 'typewriter-effect';
import { useMediaQuery } from 'react-responsive';
export default function About() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
  return (
    <div id='about-us' className={styles.about}>
        <div className={styles.aboutBox}>
            <div  data-aos="zoom-in-down" className={styles.about1}>
                <img src='./about1.png' alt=''/>
            </div>
            <div  data-aos="zoom-in-down"  data-aos-delay="200" className={styles.about2Outer} >
                <div className={styles.about2}>

                        <div>
                        Our Vision
                        </div>
                        <p>
                            
                        The Trillioner project is aiming to bring trust and security to the world of crypto by providing convenient and instant payment solutions. With the rise of digital currencies, it's important to have a reliable and secure payment method that users can trust.
                        </p>

                </div>
               
                    <img  src="./about2.png" alt=''/>
          
                <div>

                </div>
            </div>

            <div  data-aos="zoom-in-down" data-aos-delay="300"  id='mission' className={styles.about3Outer}>
                <div className={styles.about3Header}>
                About Trillioner
                </div>
                <div className={styles.about3Inner}>
                <div className={styles.about3InnerInner}>

                    <div className={styles.about3InnerHeader}>
                    Our Mission
                    </div>
                    <p className={styles.about3InnerText}>
                    The Trillioner crypto project aims to bridge the gap between traditional finance and the crypto world by offering financial services for both crypto projects and private users. This will include access to our products as well as traditional fiat banking and financial services for blockchain businesses and individuals.
                    </p>
                    <img className={styles.ellipse1} src='./ellipse1.png' alt=''/>
                </div>
         {
            !isDesktopOrLaptop &&
            <div className={styles.learnmore}>
                          <a target='_blank' href='./whitepaper.pdf'>
              <img src='./about3.png' alt=''/>
              </a>

            </div>
         }




                </div>
                {
            isDesktopOrLaptop &&
            <div className={styles.learnmore}>
            <img src='./about3_m.png' alt=''/>

            </div>
         }

            </div>

        </div>
        
    </div>
  )
}
