import Spinner from "react-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import "./LogIn.css"
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from '../../assets/mg.png';
import React from 'react'
<link rel="stylesheet" href="LogIn.css" />;




const LogIn = () => {
  const { isLoading, register } = useContext(AuthContext);



  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }



  const initialValues = {
    email: "",
    password: "",
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
    console.log( formValues.email, formValues.password);
    register( formValues.email, formValues.password);
    setIsSubmit(true);
  };


  // const initialValues = { email: "", password: "", };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = <>{t("login.9")}</>;
    } else if (!regex.test(values.email)) {
      errors.email = <>{t("login.10")}</>;
    }
    if (!values.password) {
      errors.password =  <>{t("login.11")}</>;
    } else if (values.password.length < 8) {
      errors.password =  <>{t("login.12")}</>;
    }
    
    return errors;
  };
  return (
    <div>
      
<div id="all_login" >
<div id="svg_login">
		<svg class="Path_login" viewBox="0 0 1921.728 880.675">
			<linearGradient id="Path_login" spreadMethod="pad" x1="0.835" x2="0.274" y1="0" y2="1.305">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<path id="Path_login" d="M 1921.7275390625 965.675048828125 L 403.7140502929688 965.675048828125 C 174.1283569335938 937.8496704101562 0 718.1124877929688 0 456.2157287597656 L 0 0 L 2721.7275390625 0 L 2721.7275390625 965.675048828125 Z">
			</path>
		</svg>
    <img className='img_login' src={img1}/>
		<div id="Group_login">
		</div>
	</div>
<button className="button_login">
<div className="upp_login" >{t("login.1")}</div>
  <Link to="/" className="inn_login">{t("login.2")}</Link>
</button>
<div className="cantainer_login">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">{navigate('/header')}</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
            id="input_login"
              type="text"
              name="email"
              placeholder={t("login.3")}
              value={formValues.email}
              onChange={(e) => handleChange(e)}
            />
            <p  className="error_login">{formErrors.email}</p>
          </div>
          
          <div className="field">
            <input
            id="input_login"
              type="password"
              name="password"
              placeholder={t("login.4")}
              value={formValues.password}
              onChange={(e) => handleChange(e)}
            />
            <p  className="error_login">{formErrors.password}</p>
          </div>
          <Link className="forgotpassword_login" to="/forgotpassword"> {t("login.5")}</Link>
        </div>
         <button className="acount_button_login">{t("login.6")}</button>
      </form>
      <h4 className="p_login">{t("login.7")} </h4>
      <Link to="google.com">
      <button className="google_button_login">
      <FaGoogle className="google_icon_login" />
        <div className="google_p_login">{t("login.8")}</div>
        

</button>
  
      </Link>
      
    </div>
</div>

    </div>
  )
}


export default LogIn