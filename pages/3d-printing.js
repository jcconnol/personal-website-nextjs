import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import Footer from "../components/footer"
import ThreeDModelCard from "../components/3d-model-card"
import ContactForm from "../components/contactForm"
import styles from "../styles/3d-printing.module.css"
import modelCardstyles from "../styles/3d-model-card.module.css"

export default function Index() {
    return (
        <Layout>
        <Header title={"about"}/>
        <div className={`${styles["page-content"]} ${styles["about-content"]} ${styles.fadeIn}`}>
          <Seo
            title={"About"}
            description={"About page for John Connolly. A tale about my life's story and work history."}
          />
            <h1>
                <b>3D Printing</b>
            </h1>
            <h3 className={`${styles.center} ${styles["max-40"]}`}>
               Check out the items below. Move them around and zoom in and out to get a better view of them.
            </h3>
            <h3 className={`${styles.center} ${styles["max-40"]}`}>
              If you would like something 3d printed, please  fill out the form at the bottom of the page.
            </h3>
            <div className={styles["print-model-container"]}>
              <ThreeDModelCard
                fileUrl={"/backpack_holder.stl"}
                colorHex="black"
                cameraPosition={{ position: [-60, 70, -80], fov: 50 }}
                description="Backpack holder for desk."
                priceNumber={6}
                />
              <ThreeDModelCard
                fileUrl={"/little_piggy_bank.stl"}
                colorHex="green"
                cameraPosition={{ position: [50, 50, -70], fov: 70 }}
                description="Piggy bank."
                priceNumber={2}
                />

            </div>
            <div className={styles["print-model-container"]}>
              <ThreeDModelCard
                  fileUrl={"/whistle.stl"}
                  colorHex="red"
                  cameraPosition={{ position: [50, 50, 50], fov: 50 }}
                  description="Small and very loud whistle."
                  priceNumber={0.50}
                  />
              <ThreeDModelCard
                fileUrl={"/DeskPenHolder.stl"}
                colorHex="black"
                cameraPosition={{ position: [100, 50, 100], fov: 50 }}
                description="Pin this to your desk and hold 5 pens"
                priceNumber={1.00}
                />
            </div>
            <div className={modelCardstyles["print-model-container"]}>
              <div className={modelCardstyles["print-model-card"]}>
                <div className={styles["print-model-image"]}>
                  <img src="/images/custom_3d_print.png"
                      alt="custom 3d prints"
                      className={styles["custom-print-image"]} />
                </div>
                <div className={modelCardstyles["description"]}>
                  Custom 3D Print
                </div>
                <div className={modelCardstyles["price"]}>
                  $0.25 per gram
                </div>
              </div>
            </div>
            <div className={styles["form-container"]}>
              <ContactForm useCase="3dPrint" />
            </div>
            <Footer />
            </div>
        </Layout>
    )
}
