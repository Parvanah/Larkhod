import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
// import { Formik, Field } from "formik";
import * as Yup from "yup";
// import CustomText from "../../CustomText";
import Spinner from "react-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';
// import Translation from '../../../db.json';
import "./SingUp.css";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from "../../assets/mg.png";
import img3 from '../../assets/logo_3.png'
import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
<link rel="stylesheet" href="SingUp.css" />;

const SingUp = ({ t }) => {
 

  const login = useGoogleLogin({
    onSuccess: async respose => {
        try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${respose.access_token}`
                }
            })

            console.log(res.data)
        } catch (err) {
            console.log(err)

        }

    }
});

// const { i18n } = this.props;
// const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
// };
  const { isLoading, register } = useContext(AuthContext);
 

  const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	  }

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
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
    console.log(formValues.username, formValues.email, formValues.password);
    register(formValues.username, formValues.email, formValues.password);
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
      errors.username = <>{t('singup9')}</>;
    }
    if (!values.email) {
      errors.email =  <>{t('singup10')}</>;
    } else if (!regex.test(values.email)) {
      errors.email =  <>{t('singup11')}</>;
    }
    if (!values.password) {
      errors.password = <>{t('singup12')}</>;
    } else if (values.password.length < 8) {
      errors.password = <>{t('singup13')}</>;
    }
    if (!values.confirmpassword) {

      errors.confirmpassword = <>{t('singup14')}</>;
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword =
      <>{t("singup15")}</>;



    }

    return errors;
  };

  return (
    <div>
      <div id="all_singup">
        <div id="Group_singup">
          <svg class="Path_singup" viewBox="0 0 1921.728 880.675">
            <linearGradient
              id="Path_singup"
              spreadMethod="pad"
              x1="0.835"
              x2="0.274"
              y1="0"
              y2="1.305"
            >
              <stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
              <stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
            </linearGradient>
            <path
              id="Path_singup"
              d="M 1921.7275390625 965.675048828125 L 403.7140502929688 965.675048828125 C 174.1283569335938 937.8496704101562 0 718.1124877929688 0 456.2157287597656 L 0 0 L 2721.7275390625 0 L 2721.7275390625 965.675048828125 Z"
            ></path>
          </svg>

          <img id="imgg_singup" src={img1} />
          <button className="button_singup" onClick={() => changeLanguage('dari')}>زبان دری</button>
          <button className="button_singup" onClick={() => changeLanguage('pashto')}>پشتو ژبه</button>
          
          {/* <button className="button_singup" onClick={() => handleClick("dari")}>
            زبان دری
          </button>
          <button
            className="button_singup"
            onClick={() => handleClick("pashto")}
          >
            پشتو ژبه
          </button> */}
        </div>
        <button id="login-button">
          <Link className="up_singup" to="/login">
          {t('singup1')}
          </Link>
          <div className="in_singup">{t('singup2')}</div>
        </button>
        <div id="cantainer_singup">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div>{navigate("/profile")}</div>
          ) : (
            <pre></pre>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="input_singup"
                type="text"
                name="username"
                placeholder={t('singup3')}
                value={formValues.username}
                onChange={(e) => handleChange(e)}
              />
              <p className="error_singup">{formErrors.username}</p>
              <div className="field">
                <input
                  id="input_singup"
                  type="text"
                  name="email"
                  placeholder={t('singup4')}
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_singup">{formErrors.email}</p>
              </div>

              <div className="field">
                <input
                  id="input_singup"
                  type="password"
                  name="password"
                  placeholder={t('singup5')}
                  value={formValues.password}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_singup">{formErrors.password}</p>
              </div>

              <div className="field">
                <input
                  id="input_singup"
                  type="password"
                  name="confirmpassword"
                  placeholder={t('singup6')}
                  value={formValues.confirmpassword}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_singup">{formErrors.confirmpassword}</p>
              </div>
            </div>
            <button className="acount_button_singuo">{t('singup1')}</button>
          </form>
          <h4 className="p_singup">{t('singup7')}</h4>
             <button  className="google_button_singup" onClick={login}
             >
            {/* <div>{navigate("/header")}</div> */}
        
              <FaGoogle className="google_icon_singup" />
              <div className="google_p_singup">{t('singup8')}</div>
            </button >
        </div>
         {/* <GoogleLogin
            className="google_buttton_singup"
                    onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded)
                }}
                    onError={() => {
                    console.log('Login Failed');
                }}/> */}
      </div>
     <div className='all_singup'>
     <div className="M-img">
<div id="M-arrow">
 <Link to="/SingUp"> <svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} 
//  {...props} 
 className='M-arrow'>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v10H0z" data-name="Rectangle 85" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" data-name="Group 158">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m3.247 6 2.48 2.294a.99.99 0 0 1 0 1.414 1.023 1.023 0 0 1-1.432 0L.445 6.059A1.465 1.465 0 0 1 0 5a1.483 1.483 0 0 1 .444-1.06L4.294.293a1.025 1.025 0 0 1 1.434 0 .992.992 0 0 1 0 1.414L3.248 4H15a1 1 0 0 1 0 2H3.247Z"
        data-name="Path 433"
      />
    </g>
  </svg></Link>
  <img src={img3} className="img3"/>
 </div>
</div>
      <div className='Mobile-bottom'>
      <button id="login-button">
          <Link className="up_singup" to="/login">
          {t('singup1')}
          </Link>
          <div className="in_singup">{t('singup2')}</div>
        </button>
        <div id="cantainer_singup">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div>{navigate("/profile")}</div>
          ) : (
            <pre></pre>
          )}


          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="input_singup"
                type="text"
                name="username"
                placeholder={t('singup3')}
                value={formValues.username}
                onChange={(e) => handleChange(e)}
              />
              <p className="error_singup">{formErrors.username}</p>
              <div className="field">
                <input
                  id="input_singup"
                  type="text"
                  name="email"
                  placeholder={t('singup4')}
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_singup">{formErrors.email}</p>
              </div>

              <div className="field">
                <input
                  id="input_singup"
                  type="password"
                  name="password"
                  placeholder={t('singup5')}
                  value={formValues.password}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_singup">{formErrors.password}</p>
              </div>

              <div className="field">
                <input
                  id="input_singup"
                  type="password"
                  name="confirmpassword"
                  placeholder={t('singup6')}
                  value={formValues.confirmpassword}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_singup">{formErrors.confirmpassword}</p>
              </div>
            </div>
            <button className="acount_button_singuo">{t('singup1')}</button>
          </form>
          <h4 className="p_singup">{t('singup7')}</h4>
             <button  className="google_button_singup" onClick={login}
             >
            {/* <div>{navigate("/header")}</div> */}
        
              <FaGoogle className="google_icon_singup" />
              <div className="google_p_singup">{t('singup8')}</div>
            </button >
        </div>
      </div>

      </div>
    </div>
  );
};

export default  withNamespaces()(SingUp) ;

