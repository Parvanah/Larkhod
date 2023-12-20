import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { withNamespaces } from 'react-i18next';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/blueo.png';
import logoo from '../../assets/whiteo.png';
import img1 from '../../assets/Group_158_ob@2x.png';
import img2 from '../../assets/SELESHHHH.png';
import img3 from '../../assets/svg_phone.png';
import "./SendCode.css"
import React from 'react'
<link rel="stylesheet" href="SendCode.css" />;

const SendCode = ({ t } ) => {
	const { isLoading, register, userInfo } = useContext(AuthContext);
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
	  return errors;
	};
	if (userInfo === null) {
  return (
	<div className="all-section-send-code">
		 <div className="section-one-send-code">
			<div className="sec-one-one-send-code">
              <Link to='/forgotpassword' ><img className='img_send-code' src={img1}/></Link>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div >{navigate('/newpassword')}</div>
               ) : (
               <pre></pre>
               )}
			</div>
			<div className="sec-one-two-send-code">
			 <img className="logo-one-send-code" src={logo}/>
			 <img className="logo-two-send-code" src={logoo}/>
			</div>
		 </div>
		 <div className="section-two-send-code">
			<div className="sec-two-one-send-code">
			  <div className="image-send-code">
			  <img className='imggg_send-code' src={img3}/>
			  </div>
			  <div className="selesh-send-code">
			  <Link to='/forgotpassword' ><img className="imgg_send-code" src={img2}/></Link>
			    {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div >{navigate('/newpassword')}</div>
                 ) : (
                 <pre></pre>
                 )}
			  </div>
			  <div className="para-one-and-two-send-code">
			    <div className="para_first_send-code">
					{t("sendcode1")}
                   	<br/>
	                {t("sendcode7")}
                	<br/>
                 	{t("sendcode8")}
 	            </div>
 	            <div className="para_second_send-code">
				    {t("sendcode2")}
 	            </div>
			  </div>
			</div>
			<div className="sec-two-two-send-code">
			  <form onSubmit={handleSubmit}>
			  <input
	            id="input_next_send-code"
		        type="code"
		        name="code"
		        placeholder={t("sendcode3")}
		        value={formValues.code}
		        onChange={(e) => handleChange(e)}
	            />
				<div className="error-and-button-send-code"><p  className="error_send-code">{formErrors.code}</p>
               <button className="button-next-send-code">{t("sendcode4")}</button>
			   </div>
             </form>
			</div>
		 </div>
	</div>
  )
} else if (isLoading) {
	return <h1>Loading.....</h1>;
  } else {
	return navigate("/home");
  }
}
export default  withNamespaces()(SendCode) ;
