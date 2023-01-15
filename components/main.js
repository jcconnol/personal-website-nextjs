import React from "react"
import styles from "../styles/main.module.css"

export default function Main({ children }) {
  return (
    <div className={styles.content}>
        <div className={`${styles["body-section"]} ${styles.flex} ${styles["items-center"]} ${styles["justify-center"]}`}>
            {children}
        </div>
    </div>
  )
}