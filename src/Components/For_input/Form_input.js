import React from "react";
import "./Form_input.css";
import { Container, Grid } from "@mui/material";
import { Formik, Form, validateYupSchema, Field } from "formik";

const Form_input = ({names,labels,value,placeholder}) => {
  return (
    <div>
     <Grid container md={12} lg={12} xs={12} sm={12} className="input_sec">
        <label htmlFor={names}
            className="input_label"
          style={{
            display: "flex",
          }}
        >
          {labels}
        </label>
        <Field
          id={names}
          className="form_input"
          name={names}
          placeholder={placeholder}
          type="text"
          style={{
            display: "flex",
          }}
          //  onChange={Formik.handleChange}
          //  value={formik.values.firstName}
          // value={value} // Set the value prop to the initial value
        // onChange={onChange} // If needed, handle onChange event
        />
      </Grid>
    </div>
  );
};

export default Form_input;
