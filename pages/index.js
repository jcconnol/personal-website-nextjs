import React from "react";
import Layout from "../components/layout"
import Main from "../components/main"
import Header from "../components/header"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"
import IndexPageItems from "../components/indexPageItems"
import styles from "../styles/index.module.css"

//TODO add github squares at the bottom of the index page
export default function Index() {
  var SHOOTING_STAR_MAX_NUMBER = 15;

  var shootingStarObject = [];

  for(var i = 0; i < SHOOTING_STAR_MAX_NUMBER; i++){
    var starTop =  Math.ceil(Math.random() * (20)) + "%";
    var starLeft =  Math.ceil(10 + (Math.random() * (90))) + "%";
    var starDelay =  Math.ceil(Math.random() * (25)) + "s";

    shootingStarObject.push({
      top: starTop,
      left:starLeft,
      delay: starDelay
    });
  }
  
  return (
    <Layout>
      <Header title="index"/>
      <div>
        <Seo
          title={"JCC"}
          description={"Main page for the personal website of John Connolly."}
        />
          <div className={styles["space-container"]}>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div className={styles["shooting-star-container"]}>
              {
                shootingStarObject.map(element => (
                  <span 
                    className={styles["shooting-star"]}
                    style={{
                      top: element.top,
                      left: element.left,
                      animationDelay: element.delay
                    }}
                  ></span>
                ))
              }
            </div>
            <Main className="main">
                <div className={styles["main-inner-container"]}>
                  <h1 className={`${styles.fadeIn} ${styles["index-header-text"]} h1`}>
                      <span className={styles["index-name"]}>John Connolly</span>
                  </h1>
                  <h3 className={`${styles.fadeIn} ${styles["index-subtext"]}`}>
                      Engineer. Tester. Automator.
                  </h3>
                  <div className={`${styles["index-card-container"]} ${styles.fadeIn}`}>
                    {
                      IndexPageItems.map(item => {
                        return (
                          <div className={styles["index-card"]}>
                            <ProjectCard 
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
            </Main>
        </div>  
      </div>
    </Layout>
  )
}