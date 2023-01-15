import * as React from "react"
import styles from "../styles/sidebar.module.css" 

export default function RightSidebar() {
  return (
    <div className={styles["right-sidebar"]}>
      <div className={styles["right-sidebar-inner"]}>
        <a className={styles["right-vertical-text"]} href="mailto:jcconnol4@gmail.com">
          jcconnol4@gmail.com
        </a>
      </div>
    </div>
  )
}