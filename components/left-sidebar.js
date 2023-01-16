import * as React from "react"
import styles from "../styles/sidebar.module.css"
import GithubIcon from "../public/github_icon.svg"
import LinkedinIcon from "../public/linkedin_icon.svg"
import FacebookIcon from "../public/facebook_icon.svg"

export default function LeftSidebar() {
  return (
    <div className={styles["left-sidebar"]}>
      <ul className={styles["left-sidebar-inner"]}>
        <li>
          <a href="https://github.com/jcconnol" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="github icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/john-connolly-677196157/" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/john.connolly.984/" target="_blank" rel="noreferrer">
            <img src={FacebookIcon} alt="facebook icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}