import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/PNG_Format.png';
import img1 from '../../assets/Group_158.png';
import "./SendCode.css"
import React from 'react'
<link rel="stylesheet" href="SendCode.css" />;

const SendCode = () => {
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
		errors.code = "!کد ضروری است";
	  } 
      else if (values.code.length < 6) {
        errors.code = "!کد باید بیشتر از شش حرف باشد";
      }
    //   else if (!regex.test(values.code)) {
	// 	errors.code = "!این کد معتبر نیست";
	//   }
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
	<div id="n____">
	ما یک کد شش رقمی به 
	</div>
	<div className="u______">ایمیل آدرس شما ارسال </div>
    <div className="u__">کردیم </div>
	<div id="n______">
لطفا کد را اینجا وارد نمایید
	</div>
	<div id="logoo">
	<img id="logo" src={logo}/>
	</div>
  <Link to='/forgotpassword' ><img id='img' src={img1}/></Link>
{Object.keys(formErrors).length === 0 && isSubmit ? (
  <div className="ui message success">{navigate('/newpassword')}</div>
) : (
  <pre></pre>
)}
<div id="ooo">
<form onSubmit={handleSubmit}>
	{/* <div className="input_next"> */}
	<input
	  id="input_next"
		type="code"
		name="code"
		placeholder="کد"
		value={formValues.code}
		onChange={handleChange}
	  />
	  <p  className="errorr">{formErrors.code}</p>
	{/* </div> */}
   <button id="button-next">تائید</button>
</form>
</div>
	
</div>
    </div>
  )
}


export default SendCode