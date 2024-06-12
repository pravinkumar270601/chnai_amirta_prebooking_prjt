// // import React from "react";
// // import { Field, ErrorMessage } from "formik";
// // import "./CustomRadioButton.css";
// // import "../ComponentsCss/componet.css";

// // const CustomRadioButton = ({ label, name, options, ...rest }) => {
// //   return (
// //     <div style={{ width: "85%" }}>

// //       <label
// //       className="input-heading"
// //       >{label}</label>
// //       <div role="group" aria-labelledby={name} className="cust-radio-div">
// //         {options.map((option) => (
// //           <label key={option.value} className="radio-label">
// //             <Field type="radio" name={name} value={option.value} {...rest} className="radio-input" />
// //             {option.label}
// //           </label>
// //         ))}
// //       </div>
// //       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
// //     </div>
// //   );
// // };

// // export default CustomRadioButton;

// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import "./CustomRadioButton.css";
// import "../ComponentsCss/componet.css";

// const CustomRadioButton = ({ label, name, options, ...rest }) => {
//   return (
//     <div style={{ width: "85%" ,marginTop:"7px"}} >
//       <label className="input-heading">{label}</label>
//       <div role="group" aria-labelledby={name} className="cust-radio-div" style={{marginBottom:"7px",marginTop:"7px"}}>
//         {options.map((option) => (
//           <label key={option.value} className="radio-label">
//             <Field type="radio" name={name} value={option.value} {...rest} className="radio-input" />
//             <div className="radio-option">
//               <span className="radio-option-label">{option.label}</span>
//             </div>
//           </label>
//         ))}
//       </div>
//       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
//     </div>
//   );
// };

// export default CustomRadioButton;


// import React from "react";
// import { Field, ErrorMessage } from "formik";
// import "./CustomRadioButton.css";
// import "../ComponentsCss/componet.css";

// const CustomRadioButton = ({ label, name, options, ...rest }) => {
//   return (
//     <div style={{ width: "85%" ,marginTop:"7px"}} >
//       <label className="input-heading">{label}</label>
//       <div role="group" aria-labelledby={name} className="cust-radio-div" style={{marginBottom:"7px",marginTop:"7px"}}>
//         {options.map((option) => (
//           <label key={option.value} className="radio-label">
//             <Field type="radio" name={name} value={option.value} {...rest} className="radio-input" />
//             <div className="radio-option">
//               <span className="radio-option-label">{option.label}</span>
//             </div>
//           </label>
//         ))}
//       </div>
//       <ErrorMessage name={name} component="div" className="inputs-error-msg" />
//     </div>
//   );
// };

// export default CustomRadioButton;

import React, { useState } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import "./CustomRadioButton.css";
import "../ComponentsCss/componet.css";

const CustomButtonGroup = ({ label, name, options,setSelectedDegree, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  const [selectedValue, setSelectedValue] = useState("");

  const handleClick = (value) => {
    setSelectedValue(value);
    setFieldValue(name, value);
    console.log(name, value)
    setSelectedDegree(value)
  };

  return (
    <div style={{ width: "85%" }}>
      <label className="input-heading">{label}</label>
      <div role="group" aria-labelledby={name} className="cust-btn-group">
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            onClick={() => handleClick(option.value)}
            className={`btn-option ${selectedValue === option.value ? "btn-selected" : ""}`}
            {...rest}
          >
            {option.label}
          </button>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className="inputs-error-msg" />
    </div>
  );
};

export default CustomButtonGroup;

