import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/PNG_Format.png';
import img1 from '../../assets/Group_158.png';
import "./ForgotPassword.css"
import React from 'react'
<link rel="stylesheet" href="ForgotPassword.css" />;

const ForgotPassword = () => {
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
		errors.email = "!ایمیل ضروری است";
	  } else if (!regex.test(values.email)) {
		errors.email = "!این ایمیل آدرس معتبر نیست";
	  }
	  return errors;
	};
  return (
    <div>
<div id="forgot_password" >
	<svg id="background-svg">
		<linearGradient id="Rectangle_279_z" spreadMethod="pad" x1="0.22" x2="0.105" y1="-0.035" y2="1.793">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="Rectangle_279_z" rx="200" ry="200" x="0" y="0" width="630" height="930">
		</rect>
	</svg>
	<div id="n">
		رمز عبور تان را
	</div>
	<div className="u_______"> فراموش کرده‌ اید؟</div>
	<div id="n_______">
		لطفا ایمیل آدرس تان را اینجا وارد نمایید
	</div>
	<div id="logoo">
	<img id="logo" src={logo}/>
	</div>
  <Link to='/login' ><img id='img' src={img1}/></Link>
{Object.keys(formErrors).length === 0 && isSubmit ? (
  <div className="ui message success">{navigate('/sendcode')}</div>
) : (
  <pre></pre>
)}
<div className="ooo">
<form onSubmit={handleSubmit}>
	{/* <div className="input_next"> */}
	<input
	  id="input_next"
		type="text"
		name="email"
		placeholder="آدرس ایمیل"
		value={formValues.email}
		onChange={handleChange}
	  />
	  <p  className="errorr">{formErrors.email}</p>
	{/* </div> */}
   <button id="button-next">بعدی</button>
</form>
</div>
	
</div>
    </div>
  )
}

export default ForgotPassword