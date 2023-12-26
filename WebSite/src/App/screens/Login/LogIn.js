import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "./LogIn.css";
import { useState, useEffect } from "react";
import img1 from "../../assets/mg.png";
import googlel from "../../assets/Google.png"
import React from "react";
import img3 from "../../assets/logo_3.png";
<link rel="stylesheet" href="LogIn.css" />;

const LogIn = ({ t }, props) => {
  const loggin = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const { setIsLoading, isLoading, login, userInfo, backendError } = useContext(AuthContext);
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formValues.email, formValues.password);
    login(formValues.email, formValues.password);
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/home");
      window.location.pathname = "/home";
    }
    // {
    //   Object.keys(formErrors).length === 0 && isSubmit ? (
    //     <div className="ui message success">{navigate("/header")}</div>
    //   ) : (
    //     <pre></pre>
    //   );
    // }
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
      errors.email = <>{t("login9")}</>;
    } else if (!regex.test(values.email)) {
      errors.email = <>{t("login10")}</>;
    }
    if (!values.password) {
      errors.password = <>{t("login11")}</>;
    } else if (values.password.length < 8) {
      errors.password = <>{t("login12")}</>;
    } else if (backendError !== "") {
      if( backendError === "No User Found"){
        errors.password = <>{t("No User Found")}</>;
      } else if( backendError === "Incorrect email or password"){
        errors.password = <>{t("Incorrect email or password")}</>;
      } else if(backendError === "not connected"){
        errors.password = <>{t("You are not connected with server")}</>
      }
      else{
        errors.password = <>{backendError}</>

      }
      
    }

    return errors;
  };



// Add the isLoading state

// const handleLogin = async (e) => {
//   e.preventDefault();
//   setFormErrors(validate(formValues));

//   try {
//     // Set isLoading to true when starting login request
//     setIsLoading(true);

//     const response = await axios.post("your_login_endpoint", {
//       email: formValues.email,
//       password: formValues.password,
//     });

//     // Check if login was successful
//     if (response.data.success) {
//       navigate("/home");
//       window.location.pathname = "/home";
//     } else {
//       // Check for specific error indicating user not found
//       if (response.data.error === "user_not_found") {
//         setFormErrors({
//           ...formErrors,
//           general: "User not found. Please check your credentials.",
//         });
//       } else {
//         setFormErrors({
//           ...formErrors,
//           general: "An error occurred during login. Please try again.",
//         });
//       }
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     setFormErrors({
//       ...formErrors,
//       general: "An error occurred during login. Please try again.",
//     });
//   } finally {
//     // Set isLoading to false after login request completes (whether success or error)
//     setIsLoading(false);
//   }

//   setIsSubmit(true);
// };




  if (userInfo === null) {
    return (
          //  header 
      <div className="full_login">
        <div className="Log_In_form">
          <form onSubmit={handleSubmit}>
            <div className="ui_form">
              <div className="field">
                <input
                  id="input_login"
                  type="text"
                  name="email"
                  placeholder={t("login3")}
                  value={formValues.email}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_login">{formErrors.email}</p>
              </div>
              <div className="field">
                <input
                  id="input_login"
                  type="password"
                  name="password"
                  placeholder={t("login4")}
                  value={formValues.password}
                  onChange={(e) => handleChange(e)}
                />
                <p className="error_login">{formErrors.password}</p>
              </div>
              <Link className="forgetpassword_login" to="/forgotpassword">
                {t("login5")}
              </Link>
            </div>
            <button className="acount_button_login" disabled={isLoading}>
          {/* {isLoading ? t("loading...") : t("login6")} */}
          {t("login6")}
        </button>
        {formErrors.general && (
          <div className="error_login">{formErrors.general}</div>
        )}
          </form>
          <h4 className="p_login">{t("login7")} </h4>
          <Link to="google.com" className="GoogleBtn">
            <button className="google_button_singup">
              {/* <FaGoogle className="google_icon_login" /> */}
              <img src={googlel} className="google"/>
              <div className="google_p_login">{t("login8")}</div>
            </button>
          </Link>
        </div>
        <div className="mobilee">
          <form onSubmit={handleSubmit}>
            <div className="ui_form">
              <div className="field">
                <input
                  id="input_login"
                  type="text"
                  name="email"
                  placeholder={t("login3")}
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="error_login">{formErrors.email}</p>
              </div>
              <div className="field">
                <input
                  id="input_login"
                  type="password"
                  name="password"
                  placeholder={t("login4")}
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p className="error_login">{formErrors.password}</p>
              </div>
              <Link className="forgotpassword_login" to="/forgotpassword">
                {t("login5")}
              </Link>
            </div>
            <button className="acount_button_login" disabled={isLoading}>
          {/* {isLoading ? t("loading...") : t("login6")} */}
         {t("login6")}
        </button>
        {formErrors.general && (
          <div className="error_login">{formErrors.general}</div>
        )}
          </form>
          <h4 className="p_login">{t("login7")} </h4>
          <Link to="google.com" className="GoogleBtn">
            <button className="google_button_login" onClick={login}>
              <img src={googlel} className="google"/>
              <div className="google_p_login">{t("login8")}</div>
            </button>
          </Link>
        </div>
      </div>
    );
  } else if (userInfo !== null) {
    return navigate("/home");
  } else if (isLoading) {
    return <h1>Loading.....</h1>;
  }
};
export default withNamespaces()(LogIn);