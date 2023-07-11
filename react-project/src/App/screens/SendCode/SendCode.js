import Spinner from "react-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/PNG_Format.png';
import img1 from '../../assets/Group_158.png';
import img2 from '../../assets/Group_158_a.png';
import img3 from '../../assets/svg_phone.png';
import "./SendCode.css"
import React from 'react'
<link rel="stylesheet" href="SendCode.css" />;

const SendCode = ({ t } ) => {
	const { isLoading, register } = useContext(AuthContext);
	

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	  }


	const initialValues = { code: "" };
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
	  if (!values.code) {
		errors.code = <>{t("sendcode5")}</>;
	  } 
      else if (values.code.length < 6) {
        errors.code =<>{t("sendcode6")}</>;
      }
    //   else if (!regex.test(values.code)) {
	// 	errors.code = "!این کد معتبر نیست";
	//   }
	  return errors;
	};
  return (
    <div>
<div id="send_code" >
	<svg id="background_svg_send_code">
		<linearGradient id="background_svg_send_code_1" spreadMethod="pad" x1="0.22" x2="0.105" y1="-0.035" y2="1.793">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="background_svg_send_code_1" rx="200" ry="200" x="0" y="0" width="630" height="930">
		</rect>
	</svg>
	<svg class="mobile_svg_send_code">
			<linearGradient id="mobile_svg_send_code" spreadMethod="pad" x1="0.22" x2="0.905" y1="-0.035" y2="1.793">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<rect id="mobile_svg_send_code" rx="70" ry="70" x="0" y="0" width="360" height="358">
			</rect>
		</svg>

	<div id="para_first_send_code">
	{t("sendcode1")}
	</div>
	{/* <div className="u______">{t("sendcode.2")}</div>
    <div className="u__">{t("sendcode.3")} </div> */}
	<div id="para_second_send_code">
	{t("sendcode2")}
	</div>
	<div id="logoo_send_code">
	<img id="logo_send_code" src={logo}/>
	<img id='imggg_send_code' src={img3}/>
	</div>
  <Link to='/forgotpassword' ><img id='imgg_send_code' src={img2}/></Link>
  <Link to='/forgotpassword' ><img id='img_send_code' src={img1}/></Link>
{Object.keys(formErrors).length === 0 && isSubmit ? (
  <div >{navigate('/newpassword')}</div>
) : (
  <pre></pre>
)}
<div id="form_send_code">
<form onSubmit={handleSubmit}>
	{/* <div className="input_next"> */}
	<input
	  id="input_next_send_code"
		type="code"
		name="code"
		placeholder={t("sendcode3")}
		value={formValues.code}
		onChange={(e) => handleChange(e)}
	  />
	  <p  className="error_send_code">{formErrors.code}</p>
	{/* </div> */}
   <button id="button_next_send_code">{t("sendcode4")}</button>
</form>
</div>
	
</div>
    </div>
  )
}
export default  withNamespaces()(SendCode) ;
