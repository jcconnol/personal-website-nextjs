import axios from 'axios'
import React from "react";
import styles from "../styles/contactForm.module.css"

//TODO make form disappear after submitted
const ContactForm = (props) => {

    const initialFormData = Object.freeze({
        emailAddress: "",
        message: "",
        name: ""
    });

    const initialFormDisplay = Object.freeze({
        showError: false,
        showSuccess: false,
        showForm: true
    });

    const [formData, updateFormData] = React.useState(initialFormData);
    const [formDisplay, updateFormDisplay] = React.useState(initialFormDisplay);

    const handleChange = (e) => {
        updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = async (e) => {
        //TODO disable button on click until end 
        e.preventDefault()

        updateFormData({
            ...formData,
            null: null
        });

        console.log(e)

        let headers = {
            headers: {
              "x-api-key": process.env.GATSBY_EMAIL_API_KEY,
            }
        }

        const emailConfig = {
          fromEmail: formData.email,
          name: formData.name,
          message: formData.message
        };
        
        await axios.post("https://yc5ez9aoni.execute-api.us-east-2.amazonaws.com/dev/api/email", emailConfig, headers)
          .then(res => {
            updateFormDisplay({
                ...formDisplay,
                showError: false,
                showSuccess: true,
                showForm: false
            });

          }).catch((e) => {
            console.log(e);
            //show error

            updateFormDisplay({
                ...formDisplay,
                showError: true,
                showSuccess: false,
                showForm: true
            });
            console.log("failed");

          });
    }

    return (
        <div className={styles["contact-form"]}>
            {
                formDisplay.showForm ?
                    <form acceptCharset="UTF-8" onSubmit={e => {handleSubmit(e)}} target="_blank">
                        <div>
                            <label>Full Name</label>
                            <div>
                                <input 
                                    className={styles["contact-name-input"]}
                                    onChange={handleChange} 
                                    type="text" name="name" 
                                    placeholder=" Enter your first and last name" 
                                    required="required" />
                            </div>
                        </div>
                        <br />
                        <div>
                            <label>Email address</label>
                            <div>
                                <input
                                    className={styles["contact-email-input"]}
                                    type="email" 
                                    name="email"
                                    onChange={handleChange}
                                    placeholder=" Enter your email address" 
                                    required="required" />
                            </div>
                        </div>
                        <br />
                        {
                            props.useCase == "3dPrint" ?
                                <div>
                                    <label>
                                        Describe requested print
                                        <br />
                                        (include link if applicable) 
                                    </label>
                                    <div>
                                        <textarea
                                            className={styles["contact-message-input" ]}
                                            type="text" name="message"
                                            onChange={handleChange} 
                                            placeholder=" Enter your message" 
                                            required="required" />
                                    </div>
                                    <br />
                                </div>
                            :
                                null
                        }
                        <div>
                            <label>Message</label>
                            <div>
                                <textarea 
                                    className={styles["contact-message-input" ]}
                                    type="text" name="message"
                                    onChange={handleChange} 
                                    placeholder=" Enter your message" 
                                    required="required" />
                            </div>
                        </div>
                        <br />
                        {
                            formDisplay.showError ?
                                <p><b>Something went wrong, please try again later or email me directly.</b></p>
                            : null
                        }
                        <button className={styles["contact-submit-button"]} type="submit">SUBMIT</button>
                    </form>
                : null
            }
            {
                formDisplay.showSuccess ?
                    <p><b>Thank you for your message! I will contact you as soon as I can.</b></p>
                : null
            }
        </div>
    )
}

export default ContactForm;