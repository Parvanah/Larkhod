
import Spinner from "react-dom";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
// import Translation from '../../../db.json';
import "./SingUp.css"
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from '../../assets/mg.png';
import React from 'react'
import { Link, useNavigate ,useNavigation} from "react-router-dom";
<link rel="stylesheet" href="SingUp.css" />;



const SingUp = () => {
 
    // const [name, setName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [password, setPassword] = useState(null);
    // const [confirmPassword, setConfirmPassword] = useState(null);

    const { isLoading, register } = useContext(AuthContext);
    // const navigation = useNavigation();
    // const onSubmit = (values) => {
    
    //   navigate("SignUpVerification");
    // };


  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }





  const initialValues = { username: "", email: "", password: "", confirmpassword: "" };
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
    register(formValues.email, formValues.password);
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
    if (!values.username) {
      errors.username = "!نام ضروری است";
    }
    if (!values.email) {
      errors.email = "!ایمیل ضروری است";
    } else if (!regex.test(values.email)) {
      errors.email = "!این ایمیل آدرس معتبر نیست";
    }
    if (!values.password) {
      errors.password = "!رمز عبور ضروری است";
    } else if (values.password.length < 4) {
      errors.password = "!رمزعبور باید بیشتر از چهار حرف باشد";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "!رمزعبور را تکرار کنید";
    }else if(values.confirmpassword !== values.password){
      errors.confirmpassword = "!تکرار رمز عبور باید با رمزعبور مطابقت داشته باشد";
    }
    
    return errors;
  };
  

  return (
    <div>
     
<div id="all_singup" >  
<div id="Group_singup">
		<svg class="Path_singup" viewBox="0 0 1921.728 880.675">
			<linearGradient id="Path_singup" spreadMethod="pad" x1="0.835" x2="0.274" y1="0" y2="1.305">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<path id="Path_singup" d="M 1921.7275390625 965.675048828125 L 403.7140502929688 965.675048828125 C 174.1283569335938 937.8496704101562 0 718.1124877929688 0 456.2157287597656 L 0 0 L 2721.7275390625 0 L 2721.7275390625 965.675048828125 Z">
			</path>
		</svg>

         <img id='imgg_singup' src={img1}/>
           <button className="button_singup" onClick={()=>handleClick('dari')} >
            زبان دری
           </button>
           <button className="button_singup" onClick={()=>handleClick('pashto')} >
             پشتو ژبه
           </button>


  
	</div>
<button id="login-button">
<Link  className="up_singup" to="/login">{t("singup.1")}</Link>
  <div className="in_singup">{t("singup.2")}</div>
</button>
<div id="cantainer_singup">

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>{navigate('/profile')}</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <div>
            <input
            id="input_singup"
              type="text"
              name="username"
              placeholder={t("singup.3")}
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="error_singup">{formErrors.username}</p>
          
          
          <div className="field">
            <input
            id="input_singup"
              type="text"
              name="email"
              placeholder={t("singup.4")}
              value={formValues.email}
              onChange={handleChange}
            />
            <p  className="error_singup">{formErrors.email}</p>
          </div>
          
          <div className="field">
            <input
            id="input_singup"
              type="password"
              name="password"
              placeholder={t("singup.5")}
              value={formValues.password}
              onChange={handleChange}
            />
            <p  className="error_singup">{formErrors.password}</p>
          </div>
          
          <div className="field">
            <input
            id="input_singup"
              type="password"
              name="confirmpassword"
              placeholder={t("singup.6")}
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
             <p  className="error_singup">{formErrors.confirmpassword}</p>
          </div>
         
         
        </div>
         <button className="acount_button_singuo">{t("singup.1")}</button>
      </form>
      <h4 className="p_singup">{t("singup.7")}</h4>
      <Link to="google.com">
      <button className="google_button_singup">
      <FaGoogle className="google_icon_singup" />
        <div className="google_p_singup">{t("singup.8")}</div>
      </button>
      </Link>
    </div>
</div>

    </div>
  )
}

export default SingUp