import * as React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FishCamera from "../components/fishCamera"
import styles from "../styles/about.module.css"

export default function FishCam() {
  /* TODO improvement is to make map and have info be in json file */
  return (
    <Layout>
      <Header title={"Fish Cam"}/>
      <div className={`${styles["page-content"]} ${styles.fadeIn}`}>
        <Seo
          title={"Fish Cam"}
          description={"A live feed of the fish of John Connolly."}
        />
        <h1>
          <b>Fish Cam</b>
        </h1>

        <FishCamera />
        
        <Footer />
      </div>
    </Layout>
  )
}