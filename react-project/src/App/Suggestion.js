
import { FaFacebookF, FaInstagram ,FaYoutube ,FaTwitter} from "react-icons/fa";
import "./Suggestion.css"

import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
<link rel="stylesheet" href="./Suggestion.css" />;

const Suggestion = () => {
    const initialValues = {name:"", message:"", city: "", email: "", phone: "", senf:""};
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
	  if (!values.name) {
		errors.name = "!نام ضروری است";
	  }
		if (!values.message) {
			errors.message = "!پیام ضروری است";
		}

	  if (!values.city) {
		errors.city = "!نام شهر ضروری است";
	  }
	  if (!values.email) {
		errors.email = "!ایمیل ضروری است";
	  } else if (!regex.test(values.email)) {
		errors.email = "!این ایمیل معتبر نیست";
	  }
	  if (!values.phone) {
		errors.phone = "!نمبر تماس ضروری است";
	 }
	 if (!values.senf) {
		errors.senf = "!صنف ضروری است";
	 }
	  return errors;
	};
    return ( 
        <div className="suggestion">
       <div className="send-suggestion">
        <h1 className="title">ارسال نظر</h1>
        <p className="para">پیشنهادات و نظریات خود را جهت بهبود روند درس ها از این دریچه باما به اشتراک بگزارید</p>
        <div >
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{navigate('/')}</div>
      ) 
	  : (
        <pre></pre>
      )
	  }

      <form onSubmit={handleSubmit}>
        <div className="all-input">
<div className="section-one-input">
			<div className="oo">
                	<input
			 id='infut-first'
			className="senf"
              type="text"
              name="senf"
              placeholder="صنف"
              value={formValues.senf}
              onChange={handleChange}
            />
          <p className="er">{formErrors.senf}</p>
			
            <input
			 id='infut-first'
			className="city"
              type="city"
              name="city"
              placeholder="شهر"
              value={formValues.city}
              onChange={handleChange}
            />
			<p className="er">{formErrors.city}</p>
		
          </div>

    

         <div className="oo">
         <input
		   id='infut-first'
		className='name'
              type="text"
              name="name"
              placeholder="نام"
              value={formValues.name}
              onChange={handleChange}
            />
			 <p className='er'>{formErrors.name}</p>
		
            
            <input
			 id='infut-first'
			className="phone"
              type="phone"
              name="phone"
              placeholder="نمبر تماس"
              value={formValues.phone}
              onChange={handleChange}
            />
          <p className='er'>{formErrors.phone}</p>
  </div>
  		 
		  </div>
		  <div className='section-two-input'>
          <input
		   id='infut-second'
			 className="email"
              type="text"
              name="email"
              placeholder="ایمیل آدرس"
              value={formValues.email}
              onChange={handleChange}
            />
			<p className='er'>{formErrors.email}</p>
           
		   <input
		 id='infut-second'
		className='message'
              type="message"
              name="message"
              placeholder="پیام"
              value={formValues.message}
              onChange={handleChange}
            />
			<p className='er'>{formErrors.message}</p>
			
		  </div>
      
        </div>
        <div className="send-button">
        <button className="send">ارسال</button>
        </div>
		
      </form>
    </div>
       </div>
       <div className="contect">
        <div className="all-icons">
            <Link className="icons"><FaFacebookF id="facebook"/></Link>
           <Link className="icons"><FaInstagram id="instagram"/></Link>
           <Link className="icons"><FaTwitter id="twitter"/></Link>
            <Link className="icons"><FaYoutube id="youtube"/></Link>

        </div>
        <h5></h5>
        <div className="Copyright">@Copyright - 2023 by: <span className="Larkhod"> Larkhod </span>| All Rights Reserved</div>
       </div>
        </div>
     );
}
 

 
export default Suggestion;