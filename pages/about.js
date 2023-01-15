import * as React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import styles from "../styles/page.module.css"
import styles from "../styles/about.module.css"

export default function Index() {
  /* TODO improvement is to make map and have info be in json file */
  return (
    <Layout>
      <Header title={"about"}/>
      <div className={`${styles["page-content"]} ${styles["about-content"]} ${styles.fadeIn}`}>
        <Seo
          title={"About"}
          description={"About page for John Connolly. A tale about my life's story and work history."}
        />
        <h1>
          <b>About</b>
        </h1>
        <p>
          <b>I currently work in Nashville for Ramsey Solutions as a test engineer and previously worked as a software engineer in Indianapolis.</b>
        </p>
        <p>
          I have been working in the technology sector for over four years and have loved every minute of it!
          Learning new technologies and systems is a passion of mine. So, if you need help with a project,
          then I will be happy to help.
        </p>
        <p>
          When attending University of Arkansas in Fayetteville, AR, I wanted to become a doctor.
          I loved the problem solving and fast-paced environment of the medical field and thought it
          was the only field that would allow me to work in that kind of environment. This led me to 
          complete my Bachelor's of Science in Biology.
        </p>
        <p>
          Half-way through my undergraduate degree, I found computer science and coding. I immediately knew it 
          was the right path for me and I pursued a minor in computer science. Since then, I have never looked back 
          and am very passionate about the software field and try to learn more about it every chance I get.
        
        </p>
        <p>
          <b>If you have a project that you would like help with these are a few 
            things I would be happy join in with:</b>
        </p>
        <p>
          <ul>
            <li>
              Formatting and outputting data in a RESTFUL API
            </li>
            <li>
              Building of websites in React or Wordpress
            </li>
            <li>
              Robotics for small-scale automated processes or funny use cases
            </li>
            <li>
              Test and QA webpage functionality and finding possible process improvements and application optimization areas
            </li>
            <li>
              Test and QA application functionality as a 2nd or 3rd party
            </li>
            <li>
              Automation of regression and confirmation tests
            </li>
          </ul>
        </p>
        <Footer />
      </div>
    </Layout>
  )
}