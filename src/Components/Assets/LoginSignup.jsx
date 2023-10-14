import React, { useState } from "react";
import "./LoginSignup.css";
import {useNavigate} from 'react-router-dom';
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import Dashboard from "../DashBoard/DashBoard";

const LoginSignup = () => {
  const history = useNavigate();
  const [Action, setAction] = useState("Sign Up");
  const [loginPass,setLoginPass] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    emailId: "",
    password: "",
  });
  const [regDetails, setRegDetails] = useState({
    regName: "",
    regEmailId: "",
    regPassword: "",
  });

  const handleLogin = (args) => {
    if (Action === "Login") {
        let formIsValid = false;
       let userRecords = JSON.parse(localStorage.getItem("users"));
       userRecords.map((val)=>{
        if(val.email === loginDetails.emailId && val.psw === loginDetails.password){
            setLoginDetails({emailId:"",password:""});

            formIsValid = true;
            history("/dashboard");
        }
       })
       if(!formIsValid){
        alert("Incorrect Email/Password");
       }
    } else {
      setAction(args);
    }
  };
  const handleRegister = (args) => {
    if (Action === "Sign Up") {
      if (
        regDetails.regName !== "" &&
        regDetails.regEmailId !== "" &&
        regDetails.regPassword !== ""
      ) {
        let user_records = [];
        user_records = JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users"))
          : [];
        if (
          user_records.some((v) => {
            return v.email == regDetails.regEmailId;
          })
        ) {
          alert("You Already Have an Account");
        } else {
          user_records.push({
            name: regDetails.regName,
            email: regDetails.regEmailId,
            psw: regDetails.regPassword,
          });
          setRegDetails({ regName: "", regEmailId: "", regPassword: "" });
          localStorage.setItem("users", JSON.stringify(user_records));
          alert("Registered Successfully");
         
        }
      }
    } else {
      setAction(args);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleRegChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setRegDetails({ ...regDetails, [name]: value });
  };

  return (
    <>
    <div className="loginBox_root">
    <div className="box_loginPage">
      <div className="container">
        <div className="header">
          <div className="text">{Action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {Action === "Login" ? (
            <form>
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Email Id"
                  name="emailId"
                  onChange={handleChange}
                  value={loginDetails.emailId}
                />
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={loginDetails.password}
                />
              </div>
              <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
              </div>
            </form>
          ) : (
            <>
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder="Name"
                  name="regName"
                  onChange={handleRegChange}
                  value={regDetails.regName}
                />
              </div>
              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  placeholder="Email Id"
                  name="regEmailId"
                  onChange={handleRegChange}
                  value={regDetails.regEmailId}
                />
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  name="regPassword"
                  onChange={handleRegChange}
                  value={regDetails.regPassword}
                />
              </div>
            </>
          )}

          <div className="submit-container">
            <div
              className={Action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                handleRegister("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={Action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                handleLogin("Login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
     
     </div>
    </>
  );
};

export default LoginSignup;
