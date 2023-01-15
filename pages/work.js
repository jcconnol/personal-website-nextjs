import * as React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import GithubProject from "../components/github-project"
import ProjectData from "../components/projectItems"
import "../styles/work.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Index() {
  return (
    <Layout>
      <Header title="work"/>
      <div className="page-content work-content fadeIn">
        <Seo
          title={"Work"}
          description={"Main page for the personal website of John Connolly."}
        />
        <h1>
          <b>Work</b>
        </h1>
        <div>
          <p className="center"><b>What I have built or am currently building...</b></p>
          <div className="project-grid">
            {
              ProjectData.map(item => {
                return (
                  <div className="project">
                    <GithubProject 
                      title={item.title}
                      description={item.description}
                      projectLink={item.projectLink}
                      githubLink={item.githubLink}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}