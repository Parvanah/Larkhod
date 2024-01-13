import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { useState, useEffect } from "react";
import logo from '../../assets/blueo.png';
import logoo from '../../assets/whiteo.png';
import img1 from '../../assets/Group_158_ob@2x.png';
import img2 from '../../assets/SELESHHHH.png';
import img3 from '../../assets/svg_phone.png';
import "./ForgotPassword.css"
import React from 'react'
<link rel="stylesheet" href="ForgotPassword.css" />;

const ForgotPassword = ({ t }) => {
	const { isLoading, register, userInfo, forgotPassword } = useContext(AuthContext);
	// const { register } = useContext(AuthContext);
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
	  forgotPassword(formValues.email);
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
		errors.email =<>{t("forgotpassword5")}</>;
	  } else if (!regex.test(values.email)) {
		errors.email = <>{t("forgotpassword6")}</>;
	  }
	  return errors;
	};
	if (userInfo === null) {
  return (
	<div className="all-section-forgot-password">
		 <div className="section-one-forgot-password">
			<div className="sec-one-one-forgot-password">
              <Link to='/login' ><img className='img_forgot_password' src={img1}/></Link>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
               <div>{navigate('/sendcode')}</div>
              ) : (
               <pre></pre>
              )}
			</div>
			<div className="sec-one-two-forgot-password">
			 <img className="logo-one-forgot-password" src={logo}/>
			 <img className="logo-two-forgot-password" src={logoo}/>
			</div>
		 </div>
		 <div className="section-two-forgot-password">
			<div className="sec-two-one-forgot-password">
			  <div className="image-forgot-password">
			  <img className='imggg_forgot_password' src={img3}/>
			  </div>
			  <div className="selesh-forgot-password">
			  <Link to='/login' ><img className="imgg_forgot_password" src={img2}/></Link>
				 {Object.keys(formErrors).length === 0 && isSubmit ? (
                 <div>{navigate('/sendcode')}</div>
                 ) : (
                 <pre></pre>
                 )}
			  </div>
			  <div className="para-one-and-two-forgot-password">
			    <div className="para_first_forgot_password">
                   {t("forgotpassword1")}
			        <br/>
 	               {t("forgotpassword7")}
 	            </div>
 	            <div className="para_second_forgot_password">
 	               {t("forgotpassword2")}
 	            </div>
			  </div>
			</div>
			<div className="sec-two-two-forgot-password">
			  <form onSubmit={handleSubmit}>
	            <input
	            id="input_next_forgot_password"
		        type="text"
		        name="email"
		        placeholder={t("forgotpassword3")}
		        value={formValues.email}
		        onChange={(e) => handleChange(e)}
	            />
				<div className="error-and-button-forgot-password"><p  className="error_forgot_password">{formErrors.email}</p>
               <button className="button-next-forgot-password">{t("forgotpassword4")}</button>
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
export default  withNamespaces()(ForgotPassword) ;

