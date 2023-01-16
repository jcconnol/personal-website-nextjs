import * as React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import styles from "../styles/experience.module.css"

export default function Index() {
  /* improvement is to make map and have info be in json file */
  return (
    <Layout>
      <style jsx>{`
        @media screen and (max-width: 625px) {
          h1 b{
              font-size: 13vw;
          }
        }
        
        @media screen and (min-width: 625px) {
            h1 b{
                font-size: 6vw;
            }
        }
      `}
      </style>
      <Header title="experience"/>
      <div className={`${styles["page-content"]} ${styles["experience-content"]} ${styles.fadeIn}`}>
        <Seo
          title={"Experience"}
          description={"Experience page for John Connolly. A list of my past work history."}
        />
        <h1>
          <b>Experience</b>
        </h1>
        <div>
          <p><b><u>Test engineering at Ramsey Solutions</u></b></p>
          <p>
            I have been working for <a href="https://www.ramseysolutions.com/">Ramsey solutions</a> since 
            July 2021 as a test engineer and QA. I moved to Tenessee from Indiana to work there and absolutely
            love my job and the people I work with! The mission of Ramsey Solutions makes it a wonderful a fulfilling
            place to work.
          </p>
        </div>
        <div>
          <p><b><u>Software engineering at Walker Information</u></b></p>
          <p>
            <a href="https://walkerinfo.com/">Walker Information</a> is a small customer experience company
            that works closely with Qualtrics. I started working with them in December 2019 and had a lot of fun
            and learned a lot working for them. I worked with a PERN stack and wrote a lot of vanilla JavaScript. 
            Qualtrics has a lot of functionality and technology concepts that carry over to a lot of 
            other portions of technology.
          </p>
        </div>
        <div>
          <p><b><u>Base Commissioner for the Boy Scouts of America Brinton Environmental Center</u></b></p>
          <p>
            Sea Base is comprised of multiple adventures htat scouts can go on. The most common at the Brinton
            Environmental Center is one called Out Island where scouts paddle 6 miles to a deserted island and 
            go camping for 3 days and 4 nights. While there the scouts go deep sea fishing and explore the island.
            As a Base Commissioner I planned logistics for groups going to the island. Ensuring the crews had enough water
            and gear, handle any medical issues that might arise and manage over 60 people and their individual schedules at a given time
          </p>
        </div>
        <div>
          <p><b><u>Veterans Association Lab Intern</u></b></p>
          <p>
            The Veteran's Association in Temple Texas has a research lab that has multiple biological 
            rearch studies going on. I was fortunate enough to be able to be an intern and work on a few of
            the research projects.
          </p>
          <p>
            The main study I helped with was a resusitation drug study that was being tested in an Ex-Vivo 
            method. This involved live ultrasounding of lab mice hearts where the mice had a genetic tag that
            produced a defect in the heart. This made it easier to test resucitation cocktails. 
          </p>
          <p>
            Since the current cocktail of resucitation drugs have less than a 5% success rate, research on a 
            new cocktail of resucitation drugs is necessary and a better one is almost certainly out there.
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}