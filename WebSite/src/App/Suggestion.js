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
      <div className="all-section-suggestion">
        <div className="section-one-suggestion">
          <div className="sec-one-one-suggestion">
            <Link to="/header"><img id="vector-suggestion" src={ig}/></Link> 
          </div>
          <div className="sec-one-two-suggestion">
            <h1 className="title-suggestion">{t("suggestion1")}</h1>
            <p className="para-suggestion">{t("suggestion2")}</p>
          </div>
          {Object.keys(formErrors).length === 0 && isSubmit ? (<div>{navigate('/header')}</div>) : (<pre></pre>)}
          <div className="sec-one-three-suggestion">
            <form className='form-suggestion' onSubmit={handleSubmit}>
               <div className="section-first-input-suggestion">
                 <div className="one-input-suggestion">
                   <input
		                 id='infut-first-suggestion'
		                 className='name-of-person-suggestion'
                     type="text"
                     name="name"
                     placeholder={t("suggestion3")}
                     value={formValues.name}
                     onChange={(e) => handleChange(e)}
                   /><p id='error-suggestion' className='er-suggestion'>{formErrors.name}</p>
                   <input
			               id='infut-first-suggestion'
                     className='phone-of-person-suggestion'
                     type="phone"
                     name="phone"
                     placeholder={t("suggestion5")}
                     value={formValues.phone}
                     onChange={(e) => handleChange(e)}
                   /><p id='error-suggestion' className='er-suggestion'>{formErrors.phone}</p>
                 </div>
                 <div className="two-input-suggestion">
                   <input
			               id='infut-first-suggestion'
                     className='senf-of-person-suggestion'
                     type="text"
                     name="senf"
                     placeholder={t("suggestion4")}
                     value={formValues.senf}
                     onChange={(e) => handleChange(e)}
                   /><p id='error-suggestion' className="er-suggestion">{formErrors.senf}</p>
                   <input
			               id='infut-first-suggestion'
                     className='city-of-person-suggestion'
                     type="city"
                     name="city"
                     placeholder={t("suggestion6")}
                     value={formValues.city}
                     onChange={(e) => handleChange(e)}
                   /><p id='error-suggestion' className="er-suggestion">{formErrors.city}</p>
                 </div>
               </div>
               <div className="section-second-input-suggestion">
                   <input
		                 id='infut-second-suggestion'
                     className='email-of-person-suggestion'
                     type="text"
                     name="email"
                     placeholder={t("suggestion7")}
                     value={formValues.email}
                     onChange={(e) => handleChange(e)}
                   /><p id='er-email-message-suggestion' className='er-suggestion'>{formErrors.email}</p>
                   <input
		                 id='infut-second-suggestion'
                     className='message-of-person-suggestion'
                     type="message"
                     name="message"
                     placeholder={t("suggestion8")}
                     value={formValues.message}
                     onChange={(e) => handleChange(e)}
                   /><p id='er-email-message-suggestion' className='eer-suggestion'>{formErrors.message}</p>
               </div>
               <div className="section-three-button-suggestion">
                 <button className="send-button-suggestion">{t("suggestion9")}</button>
               </div>
            </form>
          </div>        
        </div>

        <div className="section-two-suggestion">
          <div className="sec-two-one-suggestion">
            <Link className="icons-suggestion"><FaFacebookF id="facebook-suggestion"/></Link>
            <Link className="icons-suggestion"><FaInstagram id="instagram-suggestion"/></Link>
            <Link className="icons-suggestion"><FaTwitter id="twitter-suggestion"/></Link>
            <Link className="icons-suggestion"><FaYoutube id="youtube-suggestion"/></Link>
          </div>
          <div className="sec-two-two-suggestion">
            <h5></h5>
          </div>
          <div className="sec-two-three-suggestion">
            @Copyright - 2023 by: <span className="Larkhod-suggestion"> Larkhod </span>| All Rights Reserved
          </div>
        </div>
      </div>
     );
  // }
}
export default  withNamespaces()(Suggestion) ;




