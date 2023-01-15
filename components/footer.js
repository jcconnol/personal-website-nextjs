import * as React from "react"
import "../styles/footer.module.css"
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
              <div className="footer-line">
                <hr />
              </div>
              <div className="footer">
                  © John Connolly  
                  
                  <div className="footer-images-container">
                    <a className="footer-image" 
                        href="https://www.linkedin.com/in/john-connolly-677196157/" 
                        target="_blank" 
                        rel="noreferrer">
                      <FaLinkedinIn className="" /> 
                    </a>
                    <a className="footer-image" 
                        href="https://github.com/jcconnol" 
                        target="_blank" 
                        rel="noreferrer">
                      <BsGithub /> 
                    </a>
                    <a className="footer-image" 
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