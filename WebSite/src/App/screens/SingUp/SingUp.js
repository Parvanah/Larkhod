import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import i18n from "../../../i18n";
import { withNamespaces } from "react-i18next";
import "./SingUp.css";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from "../../assets/mg.png";
import img3 from "../../assets/logo_3.png";
import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
<link rel="stylesheet" href="SingUp.css" />;

const SingUp = ({ t }, props) => {
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
  if (userInfo === null) {
    return (
      <div>
        <div id="all_singup">
          <div id="Group_singup">
            <svg class="Path_singup" viewBox="0 0 1921.728 880.675">
              <linearGradient
                id="Path_singup"
                spreadMethod="pad"
                x1="0.835"
                x2="0.274"
                y1="0"
                y2="1.305"
              >
                <stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
              </linearGradient>
              <path
                id="Path_singup"
                d="M 1921.7275390625 965.675048828125 L 403.7140502929688 965.675048828125 C 174.1283569335938 937.8496704101562 0 718.1124877929688 0 456.2157287597656 L 0 0 L 2721.7275390625 0 L 2721.7275390625 965.675048828125 Z"
              ></path>
            </svg>

            <img id="imgg_singup" src={img1} />
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
          
          <button id="login-button">
            <Link className="up_singup" to="/login">
              {t("singup1")}
            </Link>
            <div className="in_singup">{t("singup2")}</div>
          </button>
          <div id="cantainer_singup">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div>{navigate("/header")}</div>
            ) : (
              <pre></pre>
            )}
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
                    type="age"
                    name="age"
                    placeholder={t("singup19")}
                    value={formValues.age}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.age}</p>
                </div>

                <div className="field">
                  <input
                    id="input_singup"
                    type="class"
                    name="senf"
                    placeholder={t("singup20")}
                    value={formValues.senf}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.senf}</p>
                </div>
              </div>

              <div className="second_input_section_singup">
                <div className="field">
                  <input
                    id="inputt_singup"
                    type=""
                    name="number"
                    placeholder={t("singup21")}
                    value={formValues.number}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.number}</p>
                </div>
                <div className="field">
                  <input
                    id="inputt_singup"
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
                    id="inputt_singup"
                    type="password"
                    name="password"
                    placeholder={t("singup5")}
                    value={formValues.password}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.password}</p>
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
                  <p className="error_singup">{formErrors.confirmpassword}</p>
                </div>
              </div>
              <button className="acount_button_singuo">{t("singup1")}</button>
            </form>
            <h4 className="p_singup">{t("singup7")}</h4>
            <button className="google_buttton_singup" onClick={login}>
              <FaGoogle className="google_icon_singup" />
              <div className="google_p_singup">{t("singup8")}</div>
            </button>
          </div>
        </div>
        <div className='all_singup'>
        <img src={ img3} className='image3'  />
       <div className='langauge'> 
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
        <div className='bottom_Signupm'>
        <button id="login-button">
            <Link className="up_singup" to="/login">
              {t("singup1")}
            </Link>
            <div className="in_singup">{t("singup2")}</div>
          </button>
          <div id="cantainer_singup">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div>{navigate("/header")}</div>
            ) : (
              <pre></pre>
            )}
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
                    type="age"
                    name="age"
                    placeholder={t("singup19")}
                    value={formValues.age}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.age}</p>
                </div>

                <div className="field">
                  <input
                    id="input_singup"
                    type="class"
                    name="senf"
                    placeholder={t("singup20")}
                    value={formValues.senf}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.senf}</p>
                </div>
              </div>

              <div className="second_input_section_singup">
                <div className="field">
                  <input
                    id="inputt_singup"
                    type=""
                    name="number"
                    placeholder={t("singup21")}
                    value={formValues.number}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.number}</p>
                </div>
                <div className="field">
                  <input
                    id="inputt_singup"
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
                    id="inputt_singup"
                    type="password"
                    name="password"
                    placeholder={t("singup5")}
                    value={formValues.password}
                    onChange={(e) => handleChange(e)}
                  />
                  <p className="error_singup">{formErrors.password}</p>
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
                  <p className="error_singup">{formErrors.confirmpassword}</p>
                </div>
              </div>
              <button className="acount_button_singuo">{t("singup1")}</button>
            </form>
            <h4 className="p_singup">{t("singup7")}</h4>
            <button className="google_button_singup" onClick={login}>
              <FaGoogle className="google_icon_singup" />
              <div className="google_p_singup">{t("singup8")}</div>
            </button>
          </div>
        </div>
          
     
        </div>
      </div>
    );
  } else if (isLoading) {
    return <h1>Loading.....</h1>;
  } else {
    return navigate("/header");
  }
};

export default withNamespaces()(SingUp);