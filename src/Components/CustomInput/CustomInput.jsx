import React, { useState } from "react";
import "./CustomInput.css";
import "../ComponentsCss/componet.css";
import { Field, ErrorMessage } from "formik";

const CustomInput = ({
  label,
  name,
  custPlaceholder,
  inputType,
  showtextPlaceholder,
  textPlaceholder,
  ...rest
}) => {
  // const validateInput = (value) => {
  //   let error;
  //   if (!value) {
  //     error =` Field is ${inputType === "text" ? "Required" : "Required"}`;
  //   } else if (inputType === "number" && isNaN(value)) {
  //     error = "Field is Required";

  //   }
  //   return error;
  // };
  return (
    <div style={{ width: "94%" }}>
      <div style={{ width: "100%" }}>
        <div>
          <label htmlFor={name} className="input-heading">
            {label}
          </label>
        </div>
        <div style={{ position: "relative" }}>
          <Field
            id={name}
            name={name}
            type={inputType}
            placeholder={`${custPlaceholder ? custPlaceholder : "Enter Input"}`}
            {...rest}
            className="custominput-field"

            // validate={validateInput}
          />
          {showtextPlaceholder && (
            <span
              className="textPlaceholder"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "8px",
                color: "var(--primary-color)",
                pointerEvents: "none",
                zIndex: "1",
              }}
            >
              {textPlaceholder}
            </span>
          )}
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="inputs-error-msg"
        />
      </div>
    </div>
  );
};

export default CustomInput;
