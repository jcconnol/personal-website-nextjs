import React, { useState } from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Header from '../components/header'
import Footer from '../components/footer'
import styles from "../styles/page.module.css"

const Custom404 = () => {
  //TODO change dog photo to picture of cat on throne
  const [imageType, setImage] = useState("1");
  
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <Header title="404" />
      <div className={styles['page-content']}>
        <h1>
          <b>404 page not found!</b>
        </h1>
        <p style={{
          textAlign: "center",
          padding: "0% 25%"
        }}>
          Oops, looks like this page doesn't exist or has not been built yet. 
          To hopefully make up for this disappointment, there is a picture of a cat.
        </p>
        <p style={{
          textAlign: "center",
          fontSize: "10px"
        }}>
          (If you happen to be a dog person, please click
            <button
              style={{
                fontSize:"10px",
                padding: "2px",
                marginLeft: "2px"
              }}
              onClick={() => setImage(() => (setImage(1 ? !imageType : imageType)))}>
                here
            </button>)
        </p>
        <div className={styles.center}>
          <img style={{
            width: "40%",
            height: "40%",
            paddingBottom: "5%"
          }}
            src={(imageType ? '../kitten.png' : '../puppy.png')}
            alt={(imageType ? "adorable kitten" : "cute puppy")}
          />
        </div>
        <div className={styles.center} style={{
          paddingBottom: "5%"
        }}>
          <a href="/">Go Back.</a>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Custom404
