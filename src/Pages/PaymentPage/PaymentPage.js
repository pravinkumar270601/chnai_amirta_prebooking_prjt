import React from "react";
import { Grid } from "@mui/material";
import "./PaymentPage.css";
import Amirtha_Icon from "../../Assets/Chennais Amirtha Logo.jpg";
import Ai_Icon from "../../Assets/Animation 2.gif";
import CustomInput from "../../Components/CustomInput/CustomInput";
// import "../LoginPage/LoginPage.css"
import { Formik, Form, validateYupSchema } from "formik";
import upi_image from "../../Assets/UPI.png";
// import CustomRadio from "../../Components/RadioButton/CustomRadio"
// import CustomButtonGroup from "../../Components/CustomRadioBtn/CustomRadioButton";
// import CustomRadio from "../../Components/RadioButton/CustomRadio";
import card_image from "../../Assets/Cards.png";
import QR_Code_image from "../../Assets/QR_code.png";
import SucessPage from "../SucessPage/SucessPage";
import { useState, useEffect, useRef } from "react";
const PaymentPage = ({successName}) => {

 
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handleProceedToPay = () => {
    console.log("Proceed to Pay clicked");
    setIsPaymentSuccess(true);
  };

  if (isPaymentSuccess) {
    return <SucessPage successName={successName} />;
  }
  return (
    // <div>
      <Grid container md={12} className="main_Gridss" style={{ margin: "0px" }}>
        <Grid
          item
        //   md={12}
          style={{ textAlign: "center", background: "white" }}
          className="paymentpage_div"
        >
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ marginTop: "13px", textAlign: "center" }}
          >
            <img src={Amirtha_Icon} className="logo_icon"></img>
          </Grid>
          <Grid item xs={12} sm={12}>
            <p className="Book_your_p2">PAYMENT</p>
          </Grid>
          <Grid item>
          <p className="amount_paid_p">AMOUNT TO BE PAID</p>
          </Grid>
          <Grid item>
            <p className="amount">&#8377;99</p>
          </Grid>
          <Grid item>
            <p className="payment_method_p">Payment Method</p>
          </Grid>
          {/* <Grid>
            <Grid>
            <img src={upi_image} className="upi_image"></img>
            </Grid>
            <Grid>
                <CustomRadioButton 
                    options={[{value:1,label:"upi"},{value:}]}
                    name="upi"
                />
            </Grid>
          </Grid> */}
          <Formik
            initialValues={{
              candidate_name: "",
              registration_no: "",
              mobile_no: "",
              email_id: "",
              degree: "",
              course_id: "",
            }}
            // validationSchema={validationSchema}
            // onSubmit={handleSubmit}
            // innerRef={formikRef}
          >
            {({ values, isSubmitting, resetForm, setFieldValue }) => (
              <Form className="fomik-form">
                <Grid>
                  <Grid>
                    <img src={upi_image} className="upi_image"></img>
                  </Grid>
                  {/* <Grid>
                    <CustomRadio
                      options={[
                        { value: "1", label: "UPI" },
                        { value: "2", label: "UPI" },
                      ]}
                      name="upi"
                    />
                  </Grid> */}
                </Grid>
                <Grid
                  item
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid item>
                    <CustomInput
                      name="upi_mobilenumber"
                      inputType="text"
                      custPlaceholder="Enter your UPI ID/Number"
                    />
                  </Grid>
                  <Grid item style={{ marginTop: "5px" }}>
                    <button type="button" className="verify_button">
                      Verify
                    </button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>

          <Grid>
            <p className="QR_Code">or</p>
            <p className="QR_Code" style={{ marginTop: "-13px" }}>
              scan this QR code
            </p>
          </Grid>
          <Grid>
            <img src={QR_Code_image} style={{height:"150px",width:"160px"}}></img>
          </Grid>
          <Grid>
            <img src={card_image} className="cards_image"></img>
          </Grid>
          <Grid item >
            <button type="button" className="submit_button" onClick={handleProceedToPay} >
              Proceed to Pay
            </button>
          </Grid>
        </Grid>
      </Grid>
    // </div>
  );
};

export default PaymentPage;
