import Spinner from "react-dom";
import { AuthContext } from "../App/context/AuthContext";
import { useContext } from "react";
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { FaFacebookF, FaInstagram ,FaYoutube ,FaTwitter} from "react-icons/fa";
import "./Suggestion.css"
import ig from './assets/Group_158_jr@2x.png';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
<link rel="stylesheet" href="./Suggestion.css" />;

const Suggestion = ( { t }) => {
  const { isLoading, register } = useContext(AuthContext);

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
    console.log( formValues.name, formValues.senf,formValues.phone,formValues.city, formValues.email, formValues.massege);
    register( formValues.name, formValues.senf,formValues.phone,formValues.city, formValues.email, formValues.massege);
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
		errors.name =<>{t("suggestion10")}</>;
	  }
		if (!values.message) {
			errors.message = <>{t("suggestion11")}</>;
		}

	  if (!values.city) {
		errors.city =<>{t("suggestion12")}</>;
	  }
	  if (!values.email) {
		errors.email = <>{t("suggestion13")}</>;
	  } else if (!regex.test(values.email)) {
		errors.email = <>{t("suggestion.14")}</>;
	  }
	  if (!values.phone) {
		errors.phone = <>{t("suggestion15")}</>;
	 }
	 if (!values.senf) {
		errors.senf =<>{t("suggestion16")}</>;
	 }
	  return errors;
	};
              // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
    return ( 
      <div className="all_all">
      <div className="suggestion">
              <div className="sendd-suggestion">
              <Link to="/header"><img id="ig-suggestion" src={ig}/></Link> 
              <h1 className="title-suggestion">{t("suggestion1")}</h1>
              <p className="para-suggestion">{t("suggestion2")}</p>
      <div >
      <div className='svg-suggestion'>
        <svg className='svg-suggestion' viewBox="36.137 50.39 360 452.886">
 		<linearGradient id="svg-suggestion" spreadMethod="pad" x1="0.892" x2="0.152" y1="1.259" y2="-0.169">
 			<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
 			<stop offset="1" stop-color="#1054a2" stop-opacity="1"></stop>
 		</linearGradient>
 		<path id="svg-suggestion" d="M 396.1369934082031 533.2755126953125 L 396.1369934082031 121.7742538452148 L 378.6035766601562 96.84480285644531 L 357.880615234375 67.39012145996094 C 356.9146118164062 66.02440643310547 355.8939514160156 64.71982574462891 354.8004150390625 63.49681091308594 C 354.3629760742188 62.98723220825195 353.9073486328125 62.51838302612305 353.4516906738281 62.04957580566406 C 347.8016052246094 56.26054382324219 340.7663879394531 52.42835998535156 333.2026062011719 51.02190017700195 C 331.03369140625 50.59381484985352 328.828369140625 50.38996887207031 326.6047973632812 50.38996887207031 L 105.6692047119141 50.38996887207031 C 93.45777893066406 50.38996887207031 81.93894195556641 56.64784240722656 74.39337921142578 67.39012145996094 L 66.13700103759766 79.1312255859375 L 64.87940979003906 80.90461730957031 L 36.13700103759766 121.7742538452148 L 36.13700103759766 533.2755126953125 L 396.1369934082031 533.2755126953125 Z">
 		</path>
 	</svg>
   </div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{navigate('/header')}</div>
      ) 
	  : (
        <pre></pre>
      )
	  }

<form className='form-suggestion' onSubmit={handleSubmit}>
         <div id='all-input-suggestion' className="all-input-suggestion">
 <div className="section-one-input-suggestion">

         <div id='name-phone-suggestion' className="oo-suggestion">
         <input
		   id='infut-first-suggestion'
		className='name-of-person-suggestion'
              type="text"
              name="name"
              placeholder={t("suggestion3")}
              value={formValues.name}
              onChange={(e) => handleChange(e)}
            />
			 <p id='error-suggestion' className='er-suggestion'>{formErrors.name}</p>
		
            
            <input
			 id='infut-first-suggestion'
       className='phone-of-person-suggestion'
              type="phone"
              name="phone"
              placeholder={t("suggestion5")}
              value={formValues.phone}
              onChange={(e) => handleChange(e)}
            />
          <p id='error-suggestion' className='er-suggestion'>{formErrors.phone}</p>
  </div>
  <div  id='sanf-city-suggestion' className="oo-suggestion">
                	<input
			 id='infut-first-suggestion'
       className='senf-of-person-suggestion'
              type="text"
              name="senf"
              placeholder={t("suggestion4")}
              value={formValues.senf}
              onChange={(e) => handleChange(e)}
            />
          <p id='error-suggestion' className="er-suggestion">{formErrors.senf}</p>
			
            <input
			 id='infut-first-suggestion'
       className='city-of-person-suggestion'
              type="city"
              name="city"
              placeholder={t("suggestion6")}
              value={formValues.city}
              onChange={(e) => handleChange(e)}
            />
			<p id='error-suggestion' className="er-suggestion">{formErrors.city}</p>
		
          </div>
  		 
		  </div>
		  <div className='section-two-input-suggestion'>
          <input
		   id='infut-second-suggestion'
       className='email-of-person-suggestion'
              type="text"
              name="email"
              placeholder={t("suggestion7")}
              value={formValues.email}
              onChange={(e) => handleChange(e)}
            />
			<p id='er-email-message-suggestion' className='er-suggestion'>{formErrors.email}</p>
           
		   <input
		 id='infut-second-suggestion'
     className='message-of-person-suggestion'
              type="message"
              name="message"
              placeholder={t("suggestion8")}
              value={formValues.message}
              onChange={(e) => handleChange(e)}
            />
			<p id='er-email-message-suggestion' className='eer-suggestion'>{formErrors.message}</p>
			
		  </div>
      
        </div>
        <div className="send-button-suggestion">
        <button className="send-suggestion">{t("suggestion9")}</button>
        </div>
		
      </form>
    </div>
       </div>
       <div className="contect-suggestion">
        <div className="all-icons-suggestion">
            <Link className="icons-suggestion"><FaFacebookF id="facebook-suggestion"/></Link>
           <Link className="icons-suggestion"><FaInstagram id="instagram-suggestion"/></Link>
           <Link className="icons-suggestion"><FaTwitter id="twitter-suggestion"/></Link>
            <Link className="icons-suggestion"><FaYoutube id="youtube-suggestion"/></Link>

        </div>
        <h5></h5>
        <div className="Copyright-suggestion">@Copyright - 2023 by: <span className="Larkhod-suggestion"> Larkhod </span>| All Rights Reserved</div>
       </div>
        </div>
        </div>
     );
  // }
}
export default  withNamespaces()(Suggestion) ;




