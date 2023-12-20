import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/blueo.png';
import logoo from '../../assets/whiteo.png';
import img1 from '../../assets/Group_158_ob@2x.png';
import img2 from '../../assets/SELESHHHH.png';
import img3 from '../../assets/svg_phone.png';
import "./NewPassword.css"
import React from 'react'
<link rel="stylesheet" href="NewPassword.css" />;

const  NewPassword = ({ t }) => {
	
	const { isLoading, register ,userInfo} = useContext(AuthContext);
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
	  navigate("/header");
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
		errors.password = <>{t("newpassword7")}</>;
	  } else if (values.password.length < 8) {
		errors.password = <>{t("newpassword8")}</>;
	  }
	  if (!values.confirmpassword) {
		errors.confirmpassword = <>{t("newpassword9")}</>;
	  }else if(values.confirmpassword !== values.password){
		errors.confirmpassword =<>{t("newpassword10")}</>;
	  }
	  
	  return errors;
	};
	if (userInfo === null) {
  return (
	    //  header 
	<div className="all-section-new-password">
		 <div className="section-one-new-password">
			<div className="sec-one-one-new-password">
              <Link to='/sendcode' ><img className='img_new_password' src={img1}/></Link>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
               <div >{navigate('/home')}</div>
               ) : (
               <pre></pre>
               )}
			</div>
			<div className="sec-one-two-new-password">
			 <img className="logo-one-new-password" src={logo}/>
			 <img className="logo-two-new-password" src={logoo}/>
			</div>
		 </div>
		 <div className="section-two-new-password">
			<div className="sec-two-one-new-password">
			  <div className="image-new-password">
			  <img className='imggg_new_password' src={img3}/>
			  </div>
			  <div className="selesh-new-password">
			  <Link to='/sendcode' ><img className="imgg_new_password" src={img2}/></Link>
			   {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div >{navigate('/home')}</div>
                ) : (
                <pre></pre>
                )}
			  </div>
			  <div className="para-one-and-two-new-password">
			    <div className="para_first_new_password">
				 {t("newpassword1")}
	             <br/>
	             {t("newpassword6")}
 	            </div>
 	            <div className="para_second_new_password">
				 {t("newpassword2")}
 	            </div>
			  </div>
			</div>
			<div className="sec-two-two-new-password">
			  <form onSubmit={handleSubmit}>
			  <input
              id="input_next_new_password"
              type="password"
              name="password"
              placeholder={t("newpassword3")}
              value={formValues.password}
			  onChange={(e) => handleChange(e)}
              />
			  <div className="error-and-button-new-password">
			  <p  className="error_new_password">{formErrors.password}</p>
				</div>
			<input
             id="input_next_new_password"
              type="password"
              name="confirmpassword"
              placeholder={t("newpassword4")}
              value={formValues.confirmpassword}
              onChange={(e) => handleChange(e)}
            />
			<div className="error-and-button-new-password">
				<p  className="error_new_password">{formErrors.confirmpassword}</p>
               <button className="button-next-new-password">{t("newpassword5")}</button>
			   </div>
             </form>
			</div>
		 </div>
	</div>
  )
} else if (isLoading) {
	return <h1>Loading...</h1>;
  } else {
	return navigate("/home");
  }
}
export default  withNamespaces()(NewPassword) ;
