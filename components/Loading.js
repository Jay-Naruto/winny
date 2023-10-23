import React from 'react'
import styles from "./Loading.module.css"
export default function Loading() {
  return (
    <div className={styles.load}>
        <div  className={styles.box}>
            <img src='./roadmapIn.png' alt=''/>
        </div>
    </div>
  )
}
