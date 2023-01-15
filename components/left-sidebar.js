import * as React from "react"
import "../styles/sidebar.module.css"
import GithubIcon from "./static/github_icon.svg"
import LinkedinIcon from "./static/linkedin_icon.svg"
import FacebookIcon from "./static/facebook_icon.svg"

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <ul className="left-sidebar-inner">
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