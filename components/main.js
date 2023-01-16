import React from "react"
import styles from "../styles/main.module.css"

export default function Main({ children }) {
  return (
    <div className={styles.content}>
      <style jsx>{`
        @media (max-width: 1080px){
          main {
              padding: 0px 100px;
          }
        }
        
        @media (max-width: 768px) {
            main {
                padding: 0px 50px;
            }
        }
        
        @media (max-width: 480px){
            main {
                padding: 0px 25px;
            }
        }
        
        h1 {
            font-size: 4.5em;
            margin: 0;
            text-align: center;
            padding-right: 0;
            padding-left: 0;
        }
        
        h2 {
            font-size: 3em;
            margin: 0;
            /*text-align: center;*/
            padding-right: 0;
            padding-left: 0;
        }
        
        h3 {
            font-size: 2em;
            margin: 0;
            text-align: center;
            padding-right: 0;
            padding-left: 0;
        }
      `}</style>
        <div className={`${styles["body-section"]} ${styles.flex} ${styles["items-center"]} ${styles["justify-center"]}`}>
            {children}
      </div>
    </div>
  )
}