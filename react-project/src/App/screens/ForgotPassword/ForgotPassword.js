import Spinner from "react-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import logo from '../../assets/PNG_Format.png';
import img1 from '../../assets/Group_158.png';
import img2 from '../../assets/Group_158_a.png';
import img3 from '../../assets/svg_phone.png';
import "./ForgotPassword.css"
import React from 'react'
<link rel="stylesheet" href="ForgotPassword.css" />;


const ForgotPassword = () => {
	const { isLoading, register } = useContext(AuthContext);
	const { t } = useTranslation();

	function handleClick(lang) {
	  i18next.changeLanguage(lang)
	}



	const initialValues = { email: "" };
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
	  console.log( formValues.email);
	  register( formValues.email);
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
	  if (!values.email) {
		errors.email =<>{t("forgotpassword.5")}</>;
	  } else if (!regex.test(values.email)) {
		errors.email = <>{t("forgotpassword.6")}</>;
		// (t("grads.1"))
	  }
	  return errors;
	};
  return (
    <div>
<div id="forgot_password" >
	<svg id="background_svg_forgot_password">
		<linearGradient id="background_svg_forgot_password_1" spreadMethod="pad" x1="0.22" x2="0.105" y1="-0.035" y2="1.793">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="background_svg_forgot_password_1" rx="200" ry="200" x="0" y="0" width="630" height="930">
		</rect>
	</svg>

	<svg class="mobile_svg_forgot_password">
			<linearGradient id="mobile_svg_forgot_password" spreadMethod="pad" x1="0.22" x2="0.905" y1="-0.035" y2="1.793">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<rect id="mobile_svg_forgot_password" rx="70" ry="70" x="0" y="0" width="360" height="358">
			</rect>
		</svg>
		
	<div id="para_first_forgot_password">
	{t("forgotpassword.1")}
	</div>
	<div id="para_second_forgot_password">
	{t("forgotpassword.2")}
	</div>
	<div id="logoo_forgot_password">
	<img id="logo_forgot_password" src={logo}/>
	{/* <img id='imgg_forgot_password' src={img2}/> */}
	<img id='imggg_forgot_password' src={img3}/>
	</div>
	<Link to='/login' ><img id='imgg_forgot_password' src={img2}/></Link>
  <Link to='/login' ><img id='img_forgot_password' src={img1}/></Link>
{Object.keys(formErrors).length === 0 && isSubmit ? (
  <div>{navigate('/sendcode')}</div>
) : (
  <pre></pre>
)}
<div className="form_forgot_password">
<form onSubmit={handleSubmit}>
	<input
	  id="input_next_forgot_password"
		type="text"
		name="email"
		placeholder={t("forgotpassword.3")}
		value={formValues.email}
		onChange={(e) => handleChange(e)}
	  />
	  <p  className="error_forgot_password">{formErrors.email}</p>
   <button id="button-next_forgot_password">{t("forgotpassword.4")}</button>
</form>
</div>
	
</div>
    </div>
  )
}

export default ForgotPassword