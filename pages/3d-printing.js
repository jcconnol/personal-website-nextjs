import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import Footer from "../components/footer"
import ThreeDModelCard from "../components/3d-model-card"
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
              <ThreeDModelCard 
                fileUrl={"/whistle.stl"} 
                colorHex="red" 
                cameraPosition={{ position: [50, 50, 50], fov: 50 }}
                description="Small and very loud whistle." 
                priceNumber={0.50}
                />
            </div>
            <ContactForm useCase="3dPrint" />
            <Footer />
            </div>
        </Layout>
    )
}