import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import i18n from "../../../i18n";
import { withNamespaces } from "react-i18next";
import "./SingUp.css";
// import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import google from "../../assets/Group 10.png";
import img1 from "../../assets/kp.png";
import img3 from "../../assets/logo_1.png";
import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import LogIn from "../Login/LogIn";
import { number } from "yup";
<link rel="stylesheet" href="SingUp.css" />;
// import React, { useState } from 'react';
  
const SingUp = ({ t }, props) => {
  // const [placeholder, setPlaceholder] = useState('سن');
  // const updatePlaceholder = () => {
  //   setPlaceholder('');
  // };
  // const dateInput = document.getElementById('dateInput');
  // dateInput.type = 'Age';
  const [type, setType] = useState('');
  const updateType = () => {
    setType("date");
  };
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { isLoading, register, userInfo } = useContext(AuthContext);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    age: "",
    senf: "",
    number: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(
      formValues.firstname,
      formValues.email,
      formValues.password,
      formValues.lastname,
      formValues.age,
      formValues.senf,
      formValues.number
    );
    register(
      formValues.firstname,
      formValues.email,
      formValues.password,
      formValues.lastname,
      formValues.age,
      formValues.senf,
      formValues.number
    );
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/header");
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = <>{t("singup22")}</>;
    }
    if (!values.lastname) {
      errors.lastname = <>{t("singup23")}</>;
    }
    if (!values.age) {
      errors.age = <>{t("singup24")}</>;
    }
    if (!values.senf) {
      errors.senf = <>{t("singup25")}</>;
    }
    if (!values.number) {
      errors.number = <>{t("singup26")}</>;
    }
    if (!values.email) {
      errors.email = <>{t("singup10")}</>;
    } else if (!regex.test(values.email)) {
      errors.email = <>{t("singup11")}</>;
    }
    // else if (!regex.test(values.email)) {
    //   errors.email =  <>{t('singup11')}</>;
    // }
    if (!values.password) {
      errors.password = <>{t("singup12")}</>;
    } else if (values.password.length < 8) {
      errors.password = <>{t("singup13")}</>;
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = <>{t("singup14")}</>;
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = <>{t("singup15")}</>;
    }
    return errors;
  };
  const [SwitchHandle, setSwitchHandle] = useState(true);
  const [LogInbtnColor, setLogInBtnColor] = useState({
    backgroundColor: "#FFF , #FFF",
    color: "#3c98bd",
  });
  const [SignUpbtnColor, setSignUpBtnColor] = useState({
    backgroundColor: "#3c98bd, #0f53a1",
    color: "white",
  });
  const LogInClick = () => {
    setSwitchHandle(false);
    setLogInBtnColor({
      backgroundColor: "#3c98bd, #0f53a1",
      color: "white",
    });
    setSignUpBtnColor({
      backgroundColor: "#FFF , #FFF",
      color: "rgba(60, 152, 189, 1)",
    });
  };
  const SignUpClick = () => {
    setSwitchHandle(true);
    setSignUpBtnColor({
      backgroundColor: "#3c98bd, #0f53a1",
      color: "white",
    });
    setLogInBtnColor({
      backgroundColor: "#FFF , #FFF",
      color: "rgba(60, 152, 189, 1)",
    });
  };
  if (userInfo === null) {
    return (
      <div className="full-signUP">
        <div id="all_singup">
          <div id="Group_singup">
            <img id="imgg_singup" src={img1} />
            <div className="all_buttons">
              <button
                className="button_singup"
                onClick={() => changeLanguage("dari")}
              >
                زبان دری
              </button>
              <button
                className="button_singup"
                onClick={() => changeLanguage("pashto")}
              >
                پشتو ژبه
              </button>
            </div>
          </div>
          <div className="Sign_up_form">
            <button id="login-button">
              <div
                className="up_singup"
                onClick={LogInClick}
                style={{
                  backgroundImage: `linear-gradient(to left ,${LogInbtnColor.backgroundColor})`,
                  color: LogInbtnColor.color,
                }}
              >
                {t("singup1")}
              </div>
              <div
                onClick={SignUpClick}
                className="in_singup"
                style={{
                  backgroundImage: `linear-gradient(to left , ${SignUpbtnColor.backgroundColor})`,
                  color: SignUpbtnColor.color,
                }}
              >
                {t("singup2")}
              </div>
            </button>
            {SwitchHandle ? (
              <div id="cantainer_singup">
                <form onSubmit={handleSubmit}>
                  <div className="first_input_section_singup">
                    <div className="field">
                      <input
                        id="input_singup"
                        type="text"
                        name="firstname"
                        placeholder={t("singup3")}
                        value={formValues.firstname}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.firstname}</p>
                    </div>
                    <div className="field">
                      <input
                        id="input_singup"
                        type="text"
                        name="email"
                        placeholder={t("singup4")}
                        value={formValues.email}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.email}</p>
                    </div>
                    <div className="field">
                      <input
                        id="input_singup"
                        type="text"
                        name="lastname"
                        placeholder={t("singup18")}
                        value={formValues.lastname}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.lastname}</p>
                    </div>
                      <div className="field">
                      <input
                        id="input_singup"
                        type="password"
                        name="password"
                        placeholder={t("singup5")}
                        value={formValues.password}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.password}</p>
                    </div>
                  </div>
                  <div className="second_input_section_singup">
                    <div className="field">
                      <input
                       onFocus={updateType}
                        id="inputt_singup"                                        
                        type={type}
                        name="age"
                        placeholder={t("singup19")}
                      value={formValues.age}
                      onChange={(e) => handleChange(e)} 
                      />
                      <p className="error_singup">{formErrors.age}</p>
                    </div>
                    <div className="field">
                      <input
                        id="inputt_singup"
                        type="password"
                        name="confirmpassword"
                        placeholder={t("singup6")}
                        value={formValues.confirmpassword}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">
                        {formErrors.confirmpassword}
                      </p>
                    </div>

                    <div className="fieldd">
                      <input
                      className="input_end"
                        id="inputtt_singup"
                        type=""
                        name="number"
                        placeholder={t("singup21")}
                        value={formValues.number}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.number}</p> 
                    </div>
                  </div>
                  <button className="acount_button_singuo">
                    {t("singup2")}
                  </button>
                </form>
                <h4 className="p_singup">{t("singup7")}</h4>
                <button className="Google_SignUP" onClick={login}>
                  {/* <FaGoogle className="google_icon_singup" /> */}
                  <img src={google} className="google" />
                  <div className="google_p_singup">{t("singup8")}</div>
                </button>
              </div>
            ) : (
              <LogIn />
            )}
          </div>
        </div>
        <div className="all_singup_mobile">
          <div className="logo_mobile">
            <img src={img3} className="image3" />
          </div>
          <div className="langauge">
            <button
              className="button_singup"
              onClick={() => changeLanguage("dari")}
            >
              زبان دری
            </button>
            <button
              className="button_singup"
              onClick={() => changeLanguage("pashto")}
            >
              پشتو ژبه
            </button>
          </div>
          <div className="bottom_Signupm">
            <button id="login-button">
              <div
                className="up_singup"
                onClick={LogInClick}
                style={{
                  backgroundImage: `linear-gradient(to left,${LogInbtnColor.backgroundColor})`,
                  color: LogInbtnColor.color,
                }}
              >
                {t("singup1")}
              </div>
              <div
                className="in_singup"
                onClick={SignUpClick}
                style={{
                  backgroundImage: `linear-gradient(to left,${SignUpbtnColor.backgroundColor})`,
                  color: SignUpbtnColor.color,
                }}
              >
                {t("singup2")}
              </div>
            </button>
            {SwitchHandle ? (
              <div id="cantainer_singup">
            <form onSubmit={handleSubmit}>
                  <div className="first_input_section_singup">
                    <div className="field">
                      <input
                        id="input_singup"
                        type="text"
                        name="firstname"
                        placeholder={t("singup3")}
                        value={formValues.firstname}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.firstname}</p>
                    </div>
                    <div className="field">
                      <input
                        id="input_singup"
                        type="text"
                        name="email"
                        placeholder={t("singup4")}
                        value={formValues.email}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.email}</p>
                    </div>
                    <div className="field">
                      <input
                        id="input_singup"
                        type="text"
                        name="lastname"
                        placeholder={t("singup18")}
                        value={formValues.lastname}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.lastname}</p>
                    </div>
                      <div className="field">
                      <input
                        id="input_singup"
                        type="password"
                        name="password"
                        placeholder={t("singup5")}
                        value={formValues.password}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.password}</p>
                    </div>
                  </div>
                  <div className="second_input_section_singup">
                    <div className="field">
                      <input
                       onFocus={updateType}
                        id="inputt_singup"                                        
                        type={type}
                        name="age"
                        placeholder={t("singup19")}
                      value={formValues.age}
                      onChange={(e) => handleChange(e)} 
                      />
                      <p className="error_singup">{formErrors.age}</p>
                    </div>
                    <div className="field">
                      <input
                        id="inputt_singup"
                        type="password"
                        name="confirmpassword"
                        placeholder={t("singup6")}
                        value={formValues.confirmpassword}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">
                        {formErrors.confirmpassword}
                      </p>
                    </div>

                    <div className="fieldd">
                      <input
                      className="input_end"
                        id="inputtt_singup"
                        type=""
                        name="number"
                        placeholder={t("singup21")}
                        value={formValues.number}
                        onChange={(e) => handleChange(e)}
                      />
                      <p className="error_singup">{formErrors.number}</p> 
                    </div>
                  </div>
                  <button className="acount_button_singuo">
                    {t("singup2")}
                  </button>
                </form>
                <h4 className="p_singup">{t("singup7")}</h4>
                <button className="google_button_singup" onClick={login}>
                  {/* <FaGoogle className="google_icon_singup" /> */}
                  <img src={google} className="google" />
                  <div className="google_p_singup">{t("singup8")}</div>
                </button>
              </div>
            ) : (
              <LogIn />
            )}
          </div>
        </div>
      </div>
    );
  } else if (isLoading) {
    return <h1>Loading.....</h1>;
  } else {
    return navigate("/home");
  }
};

export default withNamespaces()(SingUp);