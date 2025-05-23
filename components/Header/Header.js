import React, { useState } from 'react'
import styles from "./Header.module.css"
import {useMediaQuery} from "react-responsive"
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
    const [open,setOpen]=useState(0)
  return (
    <div  className={styles.nav}>
        <div className={styles.header}>
            <img className={styles.logo} src='./Group 3.png' alt=''/>

            {
                !isDesktopOrLaptop ?

            <div className={styles.menulinks}>
                <div><a href='/'>Home</a></div>
                <div><a href='#about'>About</a></div>
                <div><a href='#roadmap'>Roadmap</a></div>
                <div><a href='#games'>Games</a></div>

            </div>
            :
            
                open ?
                <img onClick={()=>{setOpen(0)}} className={styles.menu} src='./cross2.png' alt=''/>
                    :
                <img onClick={()=>{setOpen(1)}}  className={styles.menu}  color='white' src='./menu2.png' alt=''/>

            
        }


            {
                open === 1 ?
                <div className={styles.menubox}>
                <div><a href='/'>Home</a></div>
                <div><a href='#about'>About</a></div>
                <div><a href='#roadmap'>Roadmap</a></div>
                <div><a href='#games'>Games</a></div>


            </div>:null

            }
            

        </div>
    </div>
  )
}
