import * as React from "react"
import styles from "../styles/sidebar.module.css"
// import GithubIcon from "../github_icon.svg"
// import LinkedinIcon from "../linkedin_icon.svg"
// import FacebookIcon from "../facebook_icon.svg"

export default function LeftSidebar() {
  return (
    <div className={styles["left-sidebar"]}>
      <ul className={styles["left-sidebar-inner"]}>
        <li>
          <a href="https://github.com/jcconnol" target="_blank" rel="noreferrer">
            <img src={"../github_icon.svg"} alt="github icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/john-connolly-677196157/" target="_blank" rel="noreferrer">
            <img src={"../linkedin_icon.svg"} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/john.connolly.984/" target="_blank" rel="noreferrer">
            <img src={"../facebook_icon.svg"} alt="facebook icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}