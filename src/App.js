import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SucessPage from "./Pages/SucessPage/SucessPage";
import { useState } from "react";

function App() {
  const [courseName, setCourseName] = useState("");
  const [successName, setSuccessName] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setCourseName={setCourseName} setSuccessName={setSuccessName}  />} />
          <Route path="/Chennais_amirtha_booking" element={<SucessPage courseName={courseName} successName={successName} />} />
          {/* <SucessPage/> */}
          {/* <LoginPage /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
