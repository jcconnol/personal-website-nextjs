import * as React from "react"
import styles from "../styles/footer.module.css"
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';

const Footer = (props) => {
  const pageName = props.pageName;

  return (
    <div>
      <footer>
        {
          pageName !== "index" ?
            <>
              <div className={styles["footer-line"]}>
                <hr />
              </div>
              <div className={styles.footer}>
                  © John Connolly  
                  
                  <div className={styles["footer-images-container"]}>
                    <a className={styles["footer-image"]} 
                        href="https://www.linkedin.com/in/john-connolly-677196157/" 
                        target="_blank" 
                        rel="noreferrer">
                      <FaLinkedinIn /> 
                    </a>
                    <a className={styles["footer-image"]}
                        href="https://github.com/jcconnol" 
                        target="_blank" 
                        rel="noreferrer">
                      <BsGithub /> 
                    </a>
                    <a className={styles["footer-image"]}
                        href="https://www.facebook.com/john.connolly.984/" 
                        target="_blank" 
                        rel="noreferrer">
                      <CgFacebook />
                    </a>
                  </div>
              </div>
            </>
            : null
        }
      </footer>
    </div>
  )
}

export default Footer;