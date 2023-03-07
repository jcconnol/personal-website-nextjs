import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Model from "../components/model"
import ContactForm from "../components/contactForm"
import styles from "../styles/3d-printing.module.css"

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
            <p className={styles.center}>
               If you would like something 3d printed, please  fill out the form below
            </p>
            <div className={styles["print-model"]}>
              <Model fileUrl={"/backpack_holder.stl"} colorHex="black" cameraPosition={{ position: [50, 50, 50], fov: 50 }} />
            </div>
            <div className={styles["print-model"]}>
              <Model fileUrl={"/little_piggy_bank.stl"} colorHex="green" cameraPosition={{ position: [50, 50, 50], fov: 50 }} />
            </div>
            <div className={styles["print-model"]}>
              <Model fileUrl={"/whistle.stl"} colorHex="red" cameraPosition={{ position: [50, 50, 50], fov: 50 }} />
            </div>
            <ContactForm useCase="3dPrint" />
            <Footer />
            </div>
        </Layout>
    )
}