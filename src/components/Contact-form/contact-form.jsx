import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { Formik, Form, Field } from "formik";
import { client } from "../../../lib/client";
import axios from "axios";
import { useRouter } from "next/router";
const CustomFileInputWrapper = ({onClick, fileName}) => {
    return (
        <div>
            <button onClick={onClick}>Choose File</button>
            <p style={{color:"white"}} >{fileName}</p>
        </div>
    )
}

const ContactForm = () => {
  const messageRef = React.useRef(null);
  const router = useRouter()
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = async (ms, val, doc) =>{
    
      console.log(ms, val);
      console.log(process.env.NEXT_PUBLIC_BASE_URL)
       await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,doc)
            router.push('/')
    
  };
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get  In Touch.</h4>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  contact: "",
                  message: "",
                }}
                onSubmit={async (values) => {
                  const doc = {
                    _type: "mainContact",
                    name: values.name,
                    email: values.email,
                    contact: values.contact,
                    message: values.message,
                    
                  };

                  await sendMessage(500, values, doc);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. We  will contact you asap.";
                  // Reset the values
                  values.name = "";
                  values.email = "";
                  values.contact = "";
                  values.message = "";
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = "";
                  }, 2000);
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_contact"
                          type="tel"
                          name="contact"
                          placeholder="Contact"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      />
                    </div>
                          
                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="mailto:contact@oneimpact.co">contact@oneimpact.co</a>
                  <p>+91 90049 77350</p>
                </h5>
                
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                Office No 2037, 2nd Floor, Oberoi Garden Estate, 
                  <br />
                 Chandivali Farm Rd, Andheri East, Mumbai 400072
                </h6>
              </div>
              <div className="social mt-50">
                
                <a target="_blank" href="https://www.linkedin.com/company/oneimpactagency/mycompany/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/oneimpactagency/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
               <a target="_blank" href="https://www.google.com/search?sxsrf=ALiCzsYgc_hlE3Z8w6jVp6ZdzGP_iizIWw:1664454807276&q=One+Impact&ludocid=3927663868234021664&gsas=1&client=ms-android-samsung-ga-rev1&lsig=AB86z5UaGTNivnb132yBs-KvI_6P&shem=lsse&kgs=29a9d1cde0eabb75&shndl=-1&source=sh/x/kp/local/2&entrypoint=sh/x/kp/local">
                  <i className="far fa-map"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
