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
            <div className={style.requestQuote}>
              <h4>Request a Quote</h4>
            </div>
            <li >
              <label for="first-name" >First Name</label>
              <input className={style.inputLabel}
                type="text"
                id="first-name"
                placeholder="Enter your first name here"
                
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </li>
            <li>
              <label for="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name here"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </li>
            <li>
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </li>
            <li>
              <label for="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone here"
              />
            </li>
            <li>
              <label for="message">List Products</label>
              <textarea
                rows="6"
                id="message"
                placeholder="Enter your message here"
              ></textarea>
            </li>
            <li>
              <p>Select Service Area</p>
              <ul className={style.flexInner}>
                <li>
                  <input type="checkbox" id="twenty-to-twentynine" />
                  <label for="twenty-to-twentynine">Plumbing</label>
                </li>
                <li>
                  <input type="checkbox" id="thirty-to-thirtynine" />
                  <label for="thirty-to-thirtynine">Metal & Steel</label>
                </li>
                <li>
                  <input type="checkbox" id="fourty-to-fourtynine" />
                  <label for="fourty-to-fourtynine">Wood</label>
                </li>
                <li>
                  <input type="checkbox" id="fifty-to-fiftynine" />
                  <label for="fifty-to-fiftynine">Building Materials</label>
                </li>
                <li>
                  <input type="checkbox" id="sixty-to-sixtynine" />
                  <label for="sixty-to-sixtynine">Wholesale</label>
                </li>
                <li>
                  <input type="checkbox" id="other" />
                  <label for="other">Other</label>
                </li>
              </ul>
            </li>
            <li>
              <button type="submit" disabled={state.submitting}>
                {"Submit "}
              </button>
            </li>
          </ul>
        </form>
      </div>
    );
  }

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Form;
