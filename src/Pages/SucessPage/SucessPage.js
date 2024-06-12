import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import "./SucessPage.css";
import Amirtha_Icon from "../../Assets/Chennais Amirtha Logo.jpg";
import Ai_Icon from "../../Assets/Animation 2.gif";
import Ai_video from "../../Assets/channai_amirtha_sc_video.mp4";
import "../LoginPage/LoginPage.css";
import { Link } from "react-router-dom";

function SucessPage({ successName, courseName }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Autoplay was prevented:", error);
        // Optionally, you can choose to show a message to the user here
      });
    }
  }, []);

  return (
    <Grid container md={12} className="main_sec">
      <Grid
        item
        
        sx={{ textAlign: "center", background: "white",width:"500px" }}
        className="successpage_div"
      >
        <Grid sx={{ marginTop: "13px", textAlign: "center" }}>
          <img src={Amirtha_Icon} className="logo_icon"></img>
        </Grid>
        <Grid>
          <p className="Book_your_p1">BOOKING CONFIRMED-THANK YOU</p>
        </Grid>
        <Grid sx={{ marginTop: "13px" }}>
          {/* <img src={Ai_Icon} className="Ai_Icon"></img> */}
          <video ref={videoRef} width="350" controls autoplay>
            <source src={Ai_video} type="video/mp4" />
            {/* <source src="/my-video.webm" type="video/webm" />
            <source src="/my-video.ogv" type="video/ogg" />
            Your browser does not support the video tag. */}
          </video>
        </Grid>
        <Grid>
          <p className="name">Hi, {successName} .</p>
          {/* <p className="sucess">You have booked your seat sucessfully.</p> */}

          <p className="sucess">
            Thank you for booking {courseName} course with us
          </p>
          <p className="red">Our executive will contact you.</p>
        </Grid>

        <Link to={'/'}>
        <button type="submit" className="home-btn">
          Back to Home
        </button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default SucessPage;
