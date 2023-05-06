import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/PNG_Format.png';
import img1 from '../../assets/Group_158.png';
import "./NewPassword.css"
import React from 'react'
<link rel="stylesheet" href="NewPassword.css" />;

const  NewPassword = () => {
	const initialValues = {password: "", repeatpassword: ""};
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
<div id="forgot_password" >
	<svg id="background-svg">
		<linearGradient id="Rectangle_279_z" spreadMethod="pad" x1="0.22" x2="0.105" y1="-0.035" y2="1.793">
			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
			<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
		</linearGradient>
		<rect id="Rectangle_279_z" rx="200" ry="200" x="0" y="0" width="630" height="930">
		</rect>
	</svg>
	<div id="n___">
		رمز عبور جدید خویش
	</div>
	<div className="u_____">را وارد نمایید</div>
	<div id="n_____">
	رمز عبور جدید باید از رمز عبور قبلی متفاوت باشد
	</div>
	<div id="logoo">
	<img id="logo" src={logo}/>
	</div>
  <Link to='/sendcode' ><img id='img' src={img1}/></Link>
{Object.keys(formErrors).length === 0 && isSubmit ? (
  <div className="ui message success">{navigate('/header')}</div>
) : (
  <pre></pre>
)}
<div className="ooo">
<form onSubmit={handleSubmit}>
	{/* <div className="input_next"> */}
	<input
            id="input_nextt"
              type="password"
              name="password"
              placeholder="رمزعبور"
              value={formValues.password}
              onChange={handleChange}
            />
            <p  className="errorr">{formErrors.password}</p>
			<input
            id="input_nextt"
              type="password"
              name="repeatpassword"
              placeholder="تکرار رمزعبور"
              value={formValues.repeatpassword}
              onChange={handleChange}
            />
             <p  className="errorr">{formErrors.repeatpassword}</p>
	{/* </div> */}
   <button id="button-next">بعدی</button>
</form>
</div>
	
</div>
    </div>
  )
}

export default NewPassword