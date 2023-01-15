import * as React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Seo from "../components/seo"
import Header from "../components/header"
import styles from "../styles/contact.module.css"

export default function Index() {
  //TODO make contact form go away after it is submitted
  //TODO add recaptcha to form
  return (
    <Layout>
      <Header title="contact"/>
      <div className={`${styles["page-content"]} ${styles["contact-content"]} ${styles.fadeIn}`}>
        <Seo
          title={"Contact"}
          description={"Contact page for John Connolly. Feel free to message me through social media or fill out the form below."}
        />
        <h1>
          <b>Contact</b>
        </h1>
        <div>
          <p>
            If you wish to get a ask me a question about something I have built, 
            you want to ask me to help you with a project or you wish to insult me in an original way
            then please contact me with the form below.
          </p>
          <ContactForm />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}