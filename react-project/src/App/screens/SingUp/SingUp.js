import { BrowserRouter as Router } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
// import Translation from '../../../db.json';
import "./SingUp.css"
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from '../../assets/mg.png';
import img2 from '../../assets/logo_3.png';
// import React from 'react'
import * as React from "react"
import { Link, useNavigate } from "react-router-dom";
<link rel="stylesheet" href="SingUp.css" />;





const SingUp = (props) => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  const initialValues = { username: "", email: "", password: "", repeatpassword: "" };
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
    if (!values.username) {
      errors.username = "!نام ضروری است";
    }
    if (!values.email) {
      errors.email = "!ایمیل ضروری است";
    } else if (!regex.test(values.email)) {
      errors.email = "!این ایمیل آدرس معتبر نیست";
    }
    if (!values.password) {
      errors.password = "!رمز عبور ضروری است";
    } else if (values.password.length < 4) {
      errors.password = "!رمزعبور باید بیشتر از چهار حرف باشد";
    }
    if (!values.repeatpassword) {
      errors.repeatpassword = "!رمزعبور را تکرار کنید";
    }else if(values.repeatpassword !== values.password){
      errors.repeatpassword = "!تکرار رمز عبور باید با رمزعبور مطابقت داشته باشد";
    }
    
    return errors;
  };
  

  return (
    <div>
     
<div id="all_singup" >  
<div id="Group_singup">
		<svg class="Path_singup" viewBox="0 0 1921.728 880.675">
			<linearGradient id="Path_singup" spreadMethod="pad" x1="0.835" x2="0.274" y1="0" y2="1.305">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<path id="Path_singup" d="M 1921.7275390625 965.675048828125 L 403.7140502929688 965.675048828125 C 174.1283569335938 937.8496704101562 0 718.1124877929688 0 456.2157287597656 L 0 0 L 2721.7275390625 0 L 2721.7275390625 965.675048828125 Z">
			</path>
		</svg>

         <img id='imgg_singup' src={img1}/>
           <button className="button_singup" onClick={()=>handleClick('dari')} >
            زبان دری
           </button>
           <button className="button_singup" onClick={()=>handleClick('pashto')} >
             پشتو ژبه
           </button>
	</div>
<button id="login-button">
<Link  className="up_singup" to="/login">{t("singup.1")}</Link>
  <div className="in_singup">{t("singup.2")}</div>
</button>
<div id="cantainer_singup">

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{navigate('/profile')}</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <div>
            <input
            id="input_singup"
              type="text"
              name="username"
              placeholder={t("singup.3")}
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="error_singup">{formErrors.username}</p>
          
          
          <div className="field">
            <input
            id="input_singup"
              type="text"
              name="email"
              placeholder={t("singup.4")}
              value={formValues.email}
              onChange={handleChange}
            />
            <p  className="error_singup">{formErrors.email}</p>
          </div>
          
          <div className="field">
            <input
            id="input_singup"
              type="password"
              name="password"
              placeholder={t("singup.5")}
              value={formValues.password}
              onChange={handleChange}
            />
            <p  className="error_singup">{formErrors.password}</p>
          </div>
          
          <div className="field">
            <input
            id="input_singup"
              type="password"
              name="repeatpassword"
              placeholder={t("singup.6")}
              value={formValues.repeatpassword}
              onChange={handleChange}
            />
             <p  className="error_singup">{formErrors.repeatpassword}</p>
          </div>
         
         
        </div>
         <button className="acount_button_singuo">{t("singup.1")}</button>
      </form>
      <h4 className="p_singup">{t("singup.7")}</h4>
      <Link to="google.com">
      <button className="google_button_singup">
      <FaGoogle className="google_icon_singup" />
        <div className="google_p_singup">{t("singup.8")}</div>
      </button>
      </Link>
    </div>
</div>
<div className="Mobile_r">
 <div className="M-img">
 {/* <div id="M-arrow">
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} {...props}>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v10H0z" data-name="Rectangle 85" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" data-name="Group 158">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m3.247 6 2.48 2.294a.99.99 0 0 1 0 1.414 1.023 1.023 0 0 1-1.432 0L.445 6.059A1.465 1.465 0 0 1 0 5a1.483 1.483 0 0 1 .444-1.06L4.294.293a1.025 1.025 0 0 1 1.434 0 .992.992 0 0 1 0 1.414L3.248 4H15a1 1 0 0 1 0 2H3.247Z"
        data-name="Path 433"
      />
    </g>
  </svg></div> */}
  <img src={img2} className="img2"/>
 </div>
<div className="M-container" >
     <div id="cantainer_singup">
     <button id="login-button">
<Link  className="up_singup" to="/login">{t("singup.1")}</Link>
  <div className="in_singup">{t("singup.2")}</div>
</button>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{navigate('/profile')}</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <div>
            <input
            id="input_singup"
              type="text"
              name="username"
              placeholder={t("singup.3")}
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="error_singup">{formErrors.username}</p>
          
          
          <div className="field">
            <input
            id="input_singup"
              type="text"
              name="email"
              placeholder={t("singup.4")}
              value={formValues.email}
              onChange={handleChange}
            />
            <p  className="error_singup">{formErrors.email}</p>
          </div>
          
          <div className="field">
            <input
            id="input_singup"
              type="password"
              name="password"
              placeholder={t("singup.5")}
              value={formValues.password}
              onChange={handleChange}
            />
            <p  className="error_singup">{formErrors.password}</p>
          </div>
          
          <div className="field">
            <input
            id="input_singup"
              type="password"
              name="repeatpassword"
              placeholder={t("singup.6")}
              value={formValues.repeatpassword}
              onChange={handleChange}
            />
             <p  className="error_singup">{formErrors.repeatpassword}</p>
          </div>
         
          <button className="acount_button_singuo">{t("singup.1")}</button>
        </div>
         
      </form>
      <h4 className="p_singup">{t("singup.7")}</h4>
      <Link to="google.com">
      <button className="google_button_singup">
      <FaGoogle className="google_icon_singup" />
        <div className="google_p_singup">{t("singup.8")}</div>
      </button>
      </Link>
    </div>
</div>
</div>
    </div>
  )
}

export default SingUp