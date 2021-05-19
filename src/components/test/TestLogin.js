// import React, { useState } from "react";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";
// import styles from "./loginstyles.module.css";

// export default function TestLogin() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       onSubmit={(values, { setSubmitting }) => {
//         // HÄR SKRIVER VI VAD SOM HÄNDER VID LOGIN
//         console.log("Submitting");
//       }}
//       validationSchema={Yup.object().shape({
//         email: Yup.string()
//           .email("Ogiltigt format")
//           .required("Ange epostadress"),
//         password: Yup.string().required("Ange lösenord")
//       })}
//     >
//       {(props) => {
//         const {
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit
//         } = props;
//         return (
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.email && touched.email && "error"}
//             />
//             {errors.email && touched.email && (
//               <div className="input-feedback">{errors.email}</div>
//             )}
//             <label htmlFor="email">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.password && touched.email && "error"}
//             />
//             {errors.password && touched.password && (
//               <div className="input-feedback">{errors.password}</div>
//             )}
//             <button type="submit" disabled={isSubmitting}>
//               Login
//             </button>
//           </form>
//         );
//       }}
//     </Formik>
//   );
// }
