import React from "react"
import Link from 'next/link';
import styles from "../styles/mobilenav.module.css"

export default function MobileNav({ menuItems }) {
  
  return (
    <div className={`${styles.overlay} ${styles.navigation}`}>
        <div className={styles["overlay-content"]}>
          {
            menuItems.map((item, index) => {
              return (
                <Link to={item.path} href={item.path} key={index}>{item.name}</Link>
              )
            })
          }
        </div>
    </div>
  )
}