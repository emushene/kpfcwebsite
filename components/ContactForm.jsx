// import { useState, useEffect } from "react";

// import "./styles.css";
// import { useForm, regexGroup, validateForm } from "./../helpers";
// import { Header, Form, Message, SubmitButton } from "./Form";
// import {
//   TextInput,
//   TextareaInput,
//   RadioInput,
//   Checkbox
// } from "./Form/Input";

// const ContactForm = () => {
//   const { regexText, regexEmail, regexTest } = regexGroup;

//   const { values, handleChange, handleOnSubmit, errors } = useForm(
//     submitForm,
//     validateForm
//   );

//   function submitForm() {
//     setIsSubmitted(true);
//   }

//   const styledBorderError = { border: "1px solid crimson" };

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   useEffect(() => {
//     const setIntervalId = setTimeout(() => {
//       setIsSubmitted(false);
//     }, 2000);

//     return () => clearInterval(setIntervalId);
//   });

//   return (
//     <div className="container">
//       <Header title="Contact Form" />

//       <Form handleSubmit={handleOnSubmit}>
//         <div className="paragraph-wrapper">
//           <p className="paragraph-required">*All fields required</p>
//         </div>
//         <TextInput
//           label="Name"
//           placeholder="enter your name"
//           name="name"
//           values={values.name}
//           handleChange={handleChange}
//           stylederror={errors.name ? styledBorderError : null}
//           error={errors.name}
//           regexTest={regexTest}
//           validation={regexText}
//         />

//         <TextInput
//           label="Surname"
//           placeholder="enter your surname"
//           name="surname"
//           values={values.surname}
//           handleChange={handleChange}
//           stylederror={errors.surname ? styledBorderError : null}
//           error={errors.surname}
//           regexTest={regexTest}
//           validation={regexText}
//         />

//         <TextInput
//           label="Email"
//           placeholder="enter your email"
//           name="email"
//           values={values.email}
//           handleChange={handleChange}
//           stylederror={errors.email ? styledBorderError : null}
//           error={errors.email}
//           regexTest={regexTest}
//           validation={regexEmail}
//         />

//         <TextareaInput
//           label="Description"
//           name="description"
//           values={values.description}
//           handleChange={handleChange}
//           stylederror={errors.description ? styledBorderError : null}
//           error={errors.description}
//         />

//         <div className="form-control-wrapper">
//           <div>
//             <p className="form-paragraph">Geneder options:</p>

//             <RadioInput
//               name="gender"
//               label="female"
//               checked={values.gender === "female"}
//               onChange={handleChange}
//             />

//             <RadioInput
//               name="gender"
//               label="male"
//               checked={values.gender === "male"}
//               onChange={handleChange}
//             />

//             <RadioInput
//               name="gender"
//               label="other"
//               checked={values.gender === "other"}
//               onChange={handleChange}
//             />
//             {errors.gender && <p className="style-require">{errors.gender}</p>}
//           </div>
//         </div>

//         <Checkbox
//           label="I read terms and conditions"
//           name="termsRead"
//           checked={values.termsRead}
//           onChange={handleChange}
//           error={errors.termsRead}
//         />

//         <SubmitButton label="send" />
//       </Form>

//       <Message isSubmitted={isSubmitted} />
//     </div>