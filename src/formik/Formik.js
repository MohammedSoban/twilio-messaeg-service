import React from "react";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import Error from "./Error";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .max(225, "must be shorter tha 225")
    .required("must enter a name"),
  email: Yup.string()
    .email("Must be a proper email")
    .max(225, "must be shorter tha 225")
    .required("must enter a email")
});

export default function formik() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values,{setSubmiting,resetForm})=>{
          setSubmiting(true);
       // alert("submitting");

       
       setTimeout(()=>{
           alert(JSON.stringify(values,null,2))
           resetForm();
           setSubmiting(false)
       }, 500)

      }}
    >
      {({ values, errors, touched, handleChange, handleBlur,
      handleSubmit,isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          {/* {JSON.stringify(values)} */}
          <div className="input-row">
            <input
              type="text"
              name="name"
              ide="name"
              placeholder="Enter your Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-error" : null}
            />
          </div>
          <Error touched={touched.name} message={errors.name} />
          <div className="input-row">
            <input
              type="email"
              name="email"
              ide="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.name && errors.name ? "has-error" : null}
            />
          </div>
          <Error touched={touched.email} message={errors.email} />
          <div>
            <button type="submit" disabled={isSubmitting}>submit</button>
          </div>
        </form>
      )}
    </Formik>
  );
}
