import React from "react";
import Layout from "../components/layout"
import Main from "../components/main"
import Header from "../components/header"
import Seo from "../components/seo"
import ProjectCard from "../components/projectCard"
import IndexPageItems from "../components/indexPageItems"
import styles from "../styles/index.module.css"

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
                shootingStarObject.map((element, index) => (
                  <span 
                    className={styles["shooting-star"]}
                    style={{
                      top: element.top,
                      left: element.left,
                      animationDelay: element.delay
                    }}
                    key={index}
                  ></span>
                ))
              }
            </div>
            <Main className="main">
              <style jsx>{`
              @media (max-width: 1080px){
                main {
                    padding: 0px 100px;
                }
              }
              
              @media (max-width: 768px) {
                  main {
                      padding: 0px 50px;
                  }
              }
              
              @media (max-width: 480px){
                  main {
                      padding: 0px 25px;
                  }
              }
              
              h1 {
                  font-size: 4.5em;
                  margin: 0;
                  text-align: center;
                  padding-right: 0;
                  padding-left: 0;
              }
              
              h2 {
                  font-size: 3em;
                  margin: 0;
                  /*text-align: center;*/
                  padding-right: 0;
                  padding-left: 0;
              }
              
              h3 {
                  font-size: 2em;
                  margin: 0;
                  text-align: center;
                  padding-right: 0;
                  padding-left: 0;
              }
              `}</style>
                <div className={styles["main-inner-container"]}>
                  <h1 className={`${styles.fadeIn} ${styles["index-header-text"]} h1`}>
                      <span className={styles["index-name"]}>John Connolly</span>
                  </h1>
                  <h3 className={`${styles.fadeIn} ${styles["index-subtext"]}`}>
                      Engineer. Tester. Automator.
                  </h3>
                  <div className={`${styles["index-card-container"]} ${styles.fadeIn}`}>
                    {
                      IndexPageItems.map((item, index) => {
                        return (
                          <div className={styles["index-card"]} key={index}>
                            <ProjectCard 
                              title={item.title}
                              description={item.description}
                              projectLink={item.projectLink}
                              githubLink={item.githubLink}
                              key={index}
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