import React from "react";
import { Container, Grid } from "@mui/material";
import "./LoginPage.css";
import Amirtha_Icon from "../../Assets/Chennais Amirtha Logo.jpg";
import Clock_animation from "../../Assets/Animation 1.gif";
import { Formik, Form, validateYupSchema } from "formik";
import { useState, useEffect, useRef } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Form_input from "../../Components/For_input/Form_input";
import CustomDropdownMui from "../../Components/CustomDropDown/CustomDropdown";
// import CustomRadioButton from "../../Components/CustomRadioBtn/CustomRadioButton";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../ReduxStore/actions/index";
import SucessPage from "../SucessPage/SucessPage";
import CustomButtonGroup from "../../Components/CustomRadioBtn/CustomRadioButton";
import * as Yup from "yup";
import PaymentPage from "../PaymentPage/PaymentPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ setCourseName, setSuccessName }) => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const { LoginCreate } = useSelector((state) => state.LoginCreate);
  const [courseDrop, setCourseDrop] = useState([]);
  const [userId, SetuserId] = useState(null);
  const [checkUserEmail, setCheckUserEmail] = useState(null);

  const { MovieCreate } = useSelector((state) => state?.MovieCreate);

  console.log(MovieCreate, "MovieCreate");

  // console.log(LoginCreate,"LoginCreate");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // console.log("Submitted Form Values:", values);

    setSuccessName(values.candidate_name);
    console.log(values.course_id);
    // console.log(courseDrop,"naammeee");
    const course = courseDrop.filter((data) => data.value == values.course_id);
    console.log(course[0].label, "courseName");
    setCourseName(course[0].label);
    // Create case
    // const data1 = {
    //   data: {
    //     ...values,
    //   },
    //   method: "post",
    //   apiName: "create",
    // };

    // dispatch(actions.MOVIECREATE(data1));

    try {
      const response = await axios.post(
        "http://106.51.127.204:3000/api/v1/create",
        values
      );

      const userSubmit = await response.data;
      console.log("Data created successfully:", userSubmit);

      setCheckUserEmail(userSubmit.Message);
      SetuserId(response.data.data.form_registration_id);
    } catch (error) {
      console.error("There was an error creating the data!", error);
    }

    resetForm();
    setSubmitting(false);
    // handlepayment();
    // console.log(data1, "data1");

    setShowSeats(false);
    // setShowSuccessPage(true);
    // console.log(data1, "data1");
  };

  //----------------------PAYMENT CODE START----------------------->>>>>>>>>>>>>

  // const [orderId, setOrderId] = useState(null);
  // const [scriptLoaded, setScriptLoaded] = useState(false);

  // // Effect for loading the Razorpay script
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //   script.async = true;
  //   script.onload = () => setScriptLoaded(true);
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // // Effect for generating order ID
  // useEffect(() => {
  //   const generateOrderId = async () => {
  //     try {
  //       const response = await fetch('/create/orderId', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ amount: '9900' }), // 99 INR in subunits
  //         redirect: 'follow',
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       console.log('Response:', response);
  //       console.log('Order ID:', data.orderId);

  //       setOrderId(data.orderId);
  //       document.getElementById('rzp-button1').style.display = 'block';
  //     } catch (error) {
  //       console.error('Error generating order ID:', error.message);
  //     }
  //   };

  //   generateOrderId();
  // }, []);

  // // Effect for initializing Razorpay
  // useEffect(() => {
  //   if (!scriptLoaded || !orderId) return; // Guard clause to ensure both conditions are met

  //   const options = {
  //     key: 'rzp_test_dvwqkxYOW5YotE', // Your Razorpay key
  //     amount: '9900', // 99 INR in subunits
  //     currency: 'INR',
  //     name: 'Acme Corp',
  //     description: 'Test Transaction',
  //     image: 'https://example.com/your_logo',
  //     order_id: orderId, // Use the generated order ID
  //     handler: async function (response) {
  //       alert(response.razorpay_payment_id);
  //       alert(response.razorpay_order_id);
  //       alert(response.razorpay_signature);

  //       // Call Signature Validate Method
  //       try {
  //         const verifyResponse = await fetch('/api/payment/verify', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ response }),
  //         });
  //         const verifyData = await verifyResponse.json();
  //         console.log('Verification result:', verifyData);
  //         if (verifyData.valid) {
  //           alert('Payment verified successfully!');
  //         } else {
  //           alert('Payment verification failed!');
  //         }
  //       } catch (error) {
  //         console.error('Error verifying payment:', error);
  //       }
  //     },
  //     prefill: {
  //       name: 'Gaurav Kumar',
  //       email: 'gaurav.kumar@example.com',
  //       contact: '9999999999',
  //     },
  //     notes: {
  //       address: 'Razorpay Corporate Office',
  //     },
  //     theme: {
  //       color: '#3399cc',
  //     },
  //   };

  //   const rzp = new window.Razorpay(options);

  //   rzp.on('payment.failed', function (response) {
  //     alert(response.error.code);
  //     alert(response.error.description);
  //     alert(response.error.source);
  //     alert(response.error.step);
  //     alert(response.error.reason);
  //     alert(response.error.metadata.order_id);
  //     alert(response.error.metadata.payment_id);
  //   });

  //   document.getElementById('rzp-button1').onclick = function (e) {
  //     rzp.open();
  //     e.preventDefault();
  //   };
  // }, [scriptLoaded, orderId]);

  // const handleProceedToPay = () => {
  //   console.log("Proceed to Pay clicked");
  //   setIsPaymentSuccess(true);
  // };

  useEffect(() => {
    if (checkUserEmail == "The email already exist") {
      alert("The email already exist");
      setCheckUserEmail(null);
      SetuserId(null)
    } else if (checkUserEmail == "Registration number already exists") {
      alert("Registration number already exists");
      setCheckUserEmail(null);
      SetuserId(null)
    } else if (userId) {
      setIsPaymentSuccess(true);
      const options = {
        // key: "rzp_live_4iVK2HTZRlTdZR",
        // key_secret: "KUB3mpB2ezM2LK07JJB5q9HF", // Your Razorpay API key
        amount: 9900, // Amount in paisa (e.g., 99 INR)
        currency: "INR",
        name: "Chennais Amirtha", // Your company name
        image: Amirtha_Icon,
        description: "Book Your Seat", // Product description
        handler: function (response) {
          console.log(response.razorpay_payment_id, "before");
          // alert(
          //   `Payment successful. Payment ID: ${response.razorpay_payment_id}`
          // );
          setPaymentId(response.razorpay_payment_id);
        },
        prefill: {
          name: "pravin", // Name of the candidate
          email: "pravin143@gmail.com", // Email of the candidate
          contact: "67787875567", // Mobile number of the candidate
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ED2A00", // Theme color
        },
      };
      var razorpay = new window.Razorpay(options);
      razorpay.open();
    }
  }, [userId, checkUserEmail]);

  //----------------------PAYMENT CODE END----------------------->>>>>>>>>>>>>

  const validationSchema = Yup.object().shape({
    candidate_name: Yup.string()
      .required("Candidate Name is required")
      .matches(
        /^[A-Z]+(\s[A-Z]+)+$/,
        "Candidate Name must be in SSLC/HSC Certificate"
      ),
    registration_no: Yup.string().required("Register Number is required"),
    mobile_no: Yup.string()
      .required("Mobile Number is required")
      .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits only"),
    email_id: Yup.string()
      .email("Invalid email format")
      .required("Email Address is required")
      .test(
        "is-gmail",
        "Email must be a Gmail address",
        (value) => value && value.endsWith("@gmail.com")
      ),
    degree: Yup.string().required("Degree is required"),
    course_id: Yup.string().required("Course  is required"),
  });
  const [showSeats, setShowSeats] = useState(false);
  const [totalSeats, setTotalSeats] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");

  const formikRef = useRef();

  const dispatch = useDispatch();

  const { TimeSheetDropdown } = useSelector((state) => state.TimeSheetDropdown);
  const { BranchDropdown } = useSelector((state) => state.BranchDropdown);

  // console.log(LoginCreate, "LoginCreate");
  // console.log(TimeSheetDropdown, "TimeSheetDropdown");

  useEffect(() => {
    const tempArr = [];
    TimeSheetDropdown?.data?.map((values, index) =>
      tempArr.push({
        value: values?.course_id,
        label: values?.course_name,
      })
    );
    setCourseDrop(tempArr);
  }, [TimeSheetDropdown]);

  // console.log(successName, "successName");

  const [branchDrop, setBranchDrop] = useState([]);
  // console.log(branchDrop, "branch.....................");
  // console.log(BranchDropdown, "BranchDropdown");

  useEffect(() => {
    const data = { data: {}, method: "get", apiName: "DepartmentDropdown" };
    dispatch(actions.BRANCHDROPDOWN(data));
  }, [dispatch]);

  useEffect(() => {
    const tempArr1 = [];
    BranchDropdown?.data?.map((values, index) =>
      tempArr1.push({
        value: values?.department_id,
        label: values?.department_name,
      })
    );
    setBranchDrop(tempArr1);
  }, [BranchDropdown]);

  // console.log(LoginCreate, "login response");
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  // if (showSuccessPage && LoginCreate.message === "Created Successfully") {
  //   return <PaymentPage successName={successName} />;
  // }

  // useEffect(() => {
  //   const data = { data: {}, method: "get", apiName: "CourseDropdown" };
  //   dispatch(actions.TIMESHEETDROPDOWN(data));
  // }, [dispatch]);

  const setSelectedDegree = (id) => {
    // console.log(id, "setSelectedDegree");
    const data = { data: {}, method: "get", apiName: `CourseDropdown/${id}` };
    dispatch(actions.TIMESHEETDROPDOWN(data));

    const { setFieldValue } = formikRef.current;
    // Clear the course_id field
    setFieldValue("course_id", "");

    // Optionally, reset seats information
    setTotalSeats("");
    setAvailableSeats("");
    setShowSeats(false);
  };

  const setSelectedSeats = (id) => {
    const getemp_name = TimeSheetDropdown?.data?.filter(
      (data) => data.course_id == id
    );
    // console.log(getemp_name, "lllllllll");
    setTotalSeats(getemp_name[0].total_seats);
    setAvailableSeats(getemp_name[0].available_seats);
    setShowSeats(true);
  };
  const navigate = useNavigate();

  if (isPaymentSuccess && paymentId && userId) {
    const data2 = {
      data: { status: "1" },
      method: "put",
      apiName: `updatestatus/${userId}`,
    };
    dispatch(actions.MOVIECREATE(data2));
    // return <SucessPage successName={successName} courseName={courseName} />;
    SetuserId(null);
    setPaymentId(null);
    navigate("/Chennais_amirtha_booking");
  }

  return (
    <Grid container md={12} lg={12} xs={12} sm={12} className="main_sec">
      <Grid
        container
        // justifyContent="end"
        // style={{ width: "25%", margin: "auto" }}
        className="form_main"
      >
        <Grid item className="form_sec">
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ marginTop: "13px", textAlign: "center" }}
          >
            <img src={Amirtha_Icon} className="logo_icon"></img>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
            <p className="Book_your_p">Book Your Seat Now @ Just &#8377; 99</p>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
            <img src={Clock_animation} className="Clock_animation"></img>
            {/* <Grid container xs={12} sm={12}>
              <Grid item xs={2} sm={2}>
                <img src={Clock_animation} className="Clock_animation"></img>
              </Grid>
              <Grid item xs={10} sm={10}>
                <img src={Clock_animation} className="Clock_animation"></img>
              </Grid> */}
          </Grid>
          <Formik
            initialValues={{
              candidate_name: "",
              registration_no: "",
              mobile_no: "",
              email_id: "",
              degree: "",
              course_id: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            innerRef={formikRef}
          >
            {({ values, isSubmitting, resetForm, setFieldValue }) => (
              <Form className="fomik-form">
                <Grid container xs={12} sm={12} style={{ height: "100%" }}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    <CustomInput
                      name="candidate_name"
                      label="Name of the Candidate(As in SSLC/HSC Certificate)"
                      custPlaceholder="Enter your Name"
                      inputType="text"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    <CustomInput
                      name="registration_no"
                      label="10th/12th Register Number"
                      custPlaceholder="Enter your register number"
                      inputType="number"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    <CustomInput
                      name="mobile_no"
                      label="Mobile Number"
                      custPlaceholder="Enter your mobile number"
                      inputType="number"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    <CustomInput
                      name="email_id"
                      label="Email Address"
                      custPlaceholder="Enter your email address"
                      inputType="text"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    sx={{
                      marginTop: "5px",
                    }}
                  >
                    <CustomButtonGroup
                      label="Choose your Degree"
                      name="degree"
                      options={branchDrop}
                      setFieldValue={setFieldValue}
                      custPlaceholder="Select Course"
                      setSelectedDegree={setSelectedDegree}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} style={{ textAlign: "none" }}>
                    <CustomDropdownMui
                      label="Choose your Course"
                      name="course_id"
                      options={courseDrop}
                      custPlaceholder="Select Course"
                      setFieldValue={setFieldValue}
                      setSelectedSeats={setSelectedSeats}
                    />
                  </Grid>

                  {showSeats && (
                    <Grid
                      item
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "5px",
                      }}
                      xs={12}
                      sm={12}
                    >
                      <span
                        style={{
                          color: "#07916C",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        Total Seats :{totalSeats}
                      </span>
                      <span
                        style={{
                          color: "#ED2A00",
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        Available Seats :{availableSeats}
                      </span>
                    </Grid>
                  )}

                  <Grid item xs={12} sm={12}>
                    <button type="submit" className="submit-btn">
                      Book My Seat
                    </button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
