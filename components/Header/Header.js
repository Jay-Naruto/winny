import React, { useState } from 'react'
import styles from "./Header.module.css"
import {useMediaQuery} from "react-responsive"
export default function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
    const [open,setOpen]=useState(0)
  return (
    <div  className={styles.nav}>
        <div className={styles.header}>
            <img className={styles.logo} src='./logo.png' alt=''/>
            {
                open ?
                <img onClick={()=>{setOpen(0)}} className={styles.menu} src='./cros.png' alt=''/>
                    :
          <img onClick={()=>{setOpen(1)}}  src='./menu.png' alt=''/>

            }
            {
                open === 1 ?
                <div className={styles.menubox}>
                <div>
                    <a href='/'>
                        Home
                    </a>
                </div>
                <div>
                    <a href='#about-us'>
                        About Us
                    </a>
                </div>
                <div>
                    <a href='#mission'>
                        Mission
                    </a>
                </div>
                <div>
                    <a href='#services'>
                        Services
                    </a>
                </div>
                {/* <div>
                    <a href='#team'>
                        Team
                    </a>
                </div>
                <div>
                    <a href='#tokenomics'>
                        Tokenomics
                    </a>
                </div> */}
                <div>
                    <a href='#media'>
                        Media
                    </a>
                </div>

            </div>:null

            }
            

        </div>
    </div>
  )
}
