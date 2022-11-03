import style from "../styles/Form.module.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  function ContactForm() {
    const [state, handleSubmit] = useForm("xaykeroy");
    if (state.succeeded) {
      return (
        <p>
          Thanks for Requesting for A Quotation <br /> from KPFC Builders
          Hardware!
        </p>
      );
    }
    return (
    
      <div className={style.container}>
        
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xaykeroy"
          method="POST"
        >
          <ul className={style.flexOuter}>
         
            <li >
       
              <input className={style.inputLabel}
                type="text"
                id="first-name"
                placeholder="Your Name"
                
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </li>
    
            <li>
        
              <input
                type="email"
                id="email"
                placeholder="Your Email"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </li>
            <li>
     
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone"
              />
            </li>
            <li>
      
              <textarea
                rows="6"
                id="message"
                placeholder="Message"
              ></textarea>
            </li>
           
            <li>
              <button type="submit" disabled={state.submitting}>
                {"Request a Quote "}
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }

  return (
    
    <div className={style.formContainer}>
        <div className={style.requestQuote}>
      <h4>Request a Quote</h4>
    </div>
      <ContactForm />
    </div>
  );
};

export default Form;
