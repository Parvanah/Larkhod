import Spinner from "react-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/PNG_Format.png';
import img1 from '../../assets/Group_158.png';
import img2 from '../../assets/Group_158_a.png';
import img3 from '../../assets/svg_phone.png';
import "./NewPassword.css"
import React from 'react'
<link rel="stylesheet" href="NewPassword.css" />;

const  NewPassword = () => {
	const { isLoading, register } = useContext(AuthContext);
	const { t } = useTranslation();

	function handleClick(lang) {
	  i18next.changeLanguage(lang)
	}




	const initialValues = {password: "", confirmpassword: ""};
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
	  console.log( formValues.password, formValues.confirmpassword);
	  register(formValues.password, formValues.confirmpassword);
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
	  if (!values.password) {
		errors.password = "!رمز عبور ضروری است";
	  } else if (values.password.length < 4) {
		errors.password = "!رمزعبور باید بیشتر از چهار حرف باشد";
	  }
	  if (!values.confirmpassword) {
		errors.confirmpassword = "!رمزعبور را تکرار کنید";
	  }else if(values.confirmpassword !== values.password){
		errors.confirmpassword = "!تکرار رمز عبور باید با رمزعبور مطابقت داشته باشد";
	  }
	  
	  return errors;
	};
  return (
    <div>
<div id="new_password" >
	<svg id="background_svg_new_password">
		<linearGradient id="background_svg_new_password_1" spreadMethod="pad" x1="0.22" x2="0.105" y1="-0.035" y2="1.793">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="background_svg_new_password_1" rx="200" ry="200" x="0" y="0" width="630" height="930">
		</rect>
	</svg>

	<svg class="mobile_svg_new_password">
			<linearGradient id="mobile_svg_new_password" spreadMethod="pad" x1="0.22" x2="0.905" y1="-0.035" y2="1.793">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<rect id="mobile_svg_new_password" rx="70" ry="70" x="0" y="0" width="360" height="358">
			</rect>
		</svg>
	<div id="para_first_new_password">
	{t("newpassword.1")}
	</div>
	{/* <div className="u_____">{t("newpassword.2")}</div> */}
	<div id="para_second_new_password">
	{t("newpassword.2")}
	</div>
	<div id="logoo_new_password">
	<img id="logo_new_password" src={logo}/>
	<img id='imggg_new_password' src={img3}/>
	</div>
	<Link to='/sendcode' ><img id='imgg_new_password' src={img2}/></Link>
  <Link to='/sendcode' ><img id='img_new_password' src={img1}/></Link>
{Object.keys(formErrors).length === 0 && isSubmit ? (
  <div >{navigate('/header')}</div>
) : (
  <pre></pre>
)}
<div className="form_new_password">
<form onSubmit={handleSubmit}>
	<input
            id="input_nextt_new_password"
              type="password"
              name="password"
              placeholder={t("newpassword.3")}
              value={formValues.password}
			  onChange={(e) => handleChange(e)}
            />
            <p  className="error_new_password">{formErrors.password}</p>
			<input
            id="input_nextt_new_password"
              type="password"
              name="confirmpassword"
              placeholder={t("newpassword.4")}
              value={formValues.confirmpassword}
              onChange={(e) => handleChange(e)}
            />
             <p  className="error_new_password">{formErrors.confirmpassword}</p>
	{/* </div> */}
   <button id="button_next_new_password">{t("newpassword.5")}</button>
</form>
</div>
	
</div>
    </div>
  )
}

export default NewPassword