import "./SingUp.css"
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import img1 from '../../assets/mg.png';
// import image from "../../assets/Group_158_a@2x.png";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
<link rel="stylesheet" href="SingUp.css" />;




const SingUp = () => {
  const initialValues = { username: "", email: "", password: "", repeatpassword: "" };
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
    if (!values.repeatpassword) {
      errors.repeatpassword = "!رمزعبور را تکرار کنید";
    }else if(values.repeatpassword !== values.password){
      errors.repeatpassword = "!تکرار رمز عبور باید با رمزعبور مطابقت داشته باشد";
    }
    
    return errors;
  };
  return (
    <div>
     
<div id="Artboard__2" >  
<div id="Group_398">
		<svg class="Path_1008_v" viewBox="0 0 1921.728 880.675">
			<linearGradient id="Path_1008_v" spreadMethod="pad" x1="0.835" x2="0.274" y1="0" y2="1.305">
				<stop offset="0" stop-color="#3c98bd" stop-opacity="1"></stop>
				<stop offset="1" stop-color="#0f53a1" stop-opacity="1"></stop>
			</linearGradient>
			<path id="Path_1008_v" d="M 1921.7275390625 965.675048828125 L 403.7140502929688 965.675048828125 C 174.1283569335938 937.8496704101562 0 718.1124877929688 0 456.2157287597656 L 0 0 L 2721.7275390625 0 L 2721.7275390625 965.675048828125 Z">
			</path>
		</svg>

    <img id='imgg' src={img1}/>
    <button id="button">
            <Link className="link_nav" to="/dari">
              زبان دری
            </Link>
          </button>
          <button id="button">
            <Link className="link_nav" to="/pashto">
              پښتو ژبه
            </Link>
          </button>
		<div id="Group_400">
		</div>
	</div>
<button id="login-button">
<Link className="up" to="/login">ورود به حساب</Link>
  <div className="in"> ایجاد حساب</div>
</button>
<div id="cantainer">

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">{navigate('/profile')}</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          
            <input
            id="inputlogin"
              type="text"
              name="username"
              placeholder="نام کاربری"
              value={formValues.username}
              onChange={handleChange}
            />
            <p className="errorr">{formErrors.username}</p>
          
          
          <div className="field">
            <input
            id="inputlogin"
              type="text"
              name="email"
              placeholder="آدرس ایمیل"
              value={formValues.email}
              onChange={handleChange}
            />
            <p  className="errorr">{formErrors.email}</p>
          </div>
          
          <div className="field">
            <input
            id="inputlogin"
              type="password"
              name="password"
              placeholder="رمزعبور"
              value={formValues.password}
              onChange={handleChange}
            />
            <p  className="errorr">{formErrors.password}</p>
          </div>
          
          <div className="field">
            <input
            id="inputlogin"
              type="password"
              name="repeatpassword"
              placeholder="تکرار رمزعبور"
              value={formValues.repeatpassword}
              onChange={handleChange}
            />
             <p  className="errorr">{formErrors.repeatpassword}</p>
          </div>
         
         
        </div>
         <button className="acount-button">ایجاد حساب</button>
      </form>
      <h4 className="po">و یا</h4>
      <Link to="google.com">
      <button className="google-button">
      <FaGoogle className="google-icon" />
        <div className="google-p">با حساب گوگل خود وارد شوید</div>
</button>
  
      </Link>
    </div>
    {/* <Link to="/section"><img className="image" src={image} /></Link>  */}
</div>

    </div>
  )
}

export default SingUp