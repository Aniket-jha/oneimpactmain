import React from "react";
import { Formik, Form, Field } from "formik";
import { FileInput, ImageInput } from "formik-file-and-image-input/lib";
import { client } from "../../../lib/client";
import { useRouter } from 'next/router'
import axios from "axios";
const CustomFileInputWrapper = ({onClick, fileName}) => {
    return (
        <div>
            <button onClick={onClick}>Choose File</button>
            <p style={{color:"white"}} >{fileName}</p>
        </div>
    )
}

const ContactArch = () => {
  const messageRef = React.useRef(null);
  const [fileUpload, setFileUpload] = React.useState(null)
  const router = useRouter()
  console.log(fileUpload)
  const fileFormats = ["application/pdf"];
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const handleFileUpload = (e)=>{
       const { type, name } = e.target.files[0];
         client.assets
        .upload("file", e.target.files[0], {
          contentType: type,
          filename: name,
        })
        .then((document) => {
          setFileUpload(document);
     
        })
        .catch((error) => {
          console.log("Image upload error", error);
        });
    }
   const sendMessage = async (ms, val, doc) =>{
    
      console.log(ms, val);
      console.log(process.env.NEXT_PUBLIC_BASE_URL)
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/careerContact`,doc)
      router.push('/')
    
  };
  return (
    <section
      id="contact-arch"
      className="contact-sec style2 section-padding position-re bg-img"
      style={{ backgroundImage: "url(/img/patrn1.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="form wow fadeInUp" data-wow-delay=".5s">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                  contact:"",
                  position:"",
                  
                }}
                onSubmit={async (values) => {
                   const doc = {
                    _type: "carrerContact",
                    name: values.name,
                    email: values.email,
                    contact: values.contact,
                    position:values.position,
                    message: values.message,
                    cv: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: fileUpload?._id,
          },
        },
                  };
                  await sendMessage(500,values,doc);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. We will contact you soon.";
                  // Reset the values
                  
                  values.name = "";
                  values.email = "";
                  values.message = "";
                   values.contact="";
                 values.position="";
                  values.file=""
                  setFileUpload()
                  // clear message
                
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <br />

                    <div className="controls">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_name"
                              type="text"
                              name="name"
                              placeholder="Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              validate={validateEmail}
                              id="form_email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              required="required"
                            />
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
                            )}
                          </div>
                        </div>
                          <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="contact"
                              type="tel"
                              name="contact"
                              placeholder="Phone no."
                              required="required"
                            />
                          </div>
                        </div>
                          <div className="col-lg-6">
                          <div className="form-group">
                            <Field
                              id="form_position"
                              type="text"
                              name="position"
                              placeholder="Position Name"
                              required="required"
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              id="form_message"
                              name="message"
                              placeholder="Cover Letter"
                              rows="4"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                               <label for="file">File upload</label>
                  <input id="file" name="cv"  type="file" onChange={handleFileUpload}  />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                     
                </div>
                </div>
                        <div className="col-12">
                          <div className="text-center">
                            <button
                              type="submit"
                              className="nb butn light mt-30 full-width"
                            >
                              <span className="ls3 text-u">Send Massege</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArch;
