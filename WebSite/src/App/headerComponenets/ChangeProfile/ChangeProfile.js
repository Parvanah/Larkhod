import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { withNamespaces } from "react-i18next";
import ig from "../../assets/Group_158_bu.png";
import igg from "../../assets/Group_158_jr@2x.png";
import "./ChangeProfile.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../../assets/Group_168_@2x.png";
import TelegramIcon from "../../assets/Group 413.png";
import MobileBackGroundCP from "../../assets/ChangeProMobile.png";
<link rel="stylesheet" href="./ChangeProfile.css" />;

const ChangeProfile = ({ t }) => {
  const { userInfo, isLoading, changeInfo } = useContext(AuthContext);
  const initialValues = {
    profie: Profile,
    name: "",
    lastname: "",
    age: "",
    senf: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [displyError, setDisplyError] = useState("inline-block");
  const navigate = useNavigate();
  const handleChange = (e) => {
    // document.getElementById("name_value").current.value = e.target.value;

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDisplyError = () => {
    if (displyError === "inline-block") {
      setDisplyError("none");
    } else if (displyError === "none") {
      setDisplyError("inline-block");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    changeInfo(formValues.name);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/header");
    }
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
      errors.name = <>{t("changeprofile9")}</>;
    }
    if (!values.lastname) {
      errors.lastname = <>{t("changeprofile10")}</>;
    }
    if (!values.age) {
      errors.age = <>{t("changeprofile14")}</>;
    }
    if (!values.senf) {
      errors.senf = <>{t("changeprofile15")}</>;
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
    <div className="Change_Profile">
      <div className="Top_ChangeProfile">
        <Link className="selesh_computer_profile" to="/home">
          <img src={ig} />
        </Link>
        <Link className="selesh_phone_profile" to="/home">
          <img src={igg} />
        </Link>
        <div className="ProfHandler">
          <img src={TelegramIcon} className="TelegramIcon" />
          <div className="insideTelegramIcon">
            <img src={formValues.profie} className="profilePhoto" />
            {/* <button>{t("changeprofile1")}</button> */}
            <label className="ChangeProfBtn">
              {t("changeprofile1")}
              <input
                type="file"
                onChange={(e) => {
                  var file = e.target.files[0];
                  var reader = new FileReader();
                  reader.onload = (e) => {
                    var imageDataURL = e.target.result;
                    setFormValues({ ...formValues, profie: imageDataURL });
                  };
                  reader.readAsDataURL(file);
                }}
                accept="image/*"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="Bottom_ChangeProfile">
        <img src={MobileBackGroundCP} className="CP_M_BackGround" />
        <form onSubmit={handleSubmit}>
          <div className="form_Row">
            <div className="input">
              <input
                className="ChangeProfile_input_value"
                id="name_value"
                // className="name_change_profile"
                type="text"
                name="name"
                placeholder={t("changeprofile2")}
                value={formValues.name}
                onChange={handleChange}
                onFocus={handleDisplyError}
                onBlur={handleDisplyError}
              />
              <p
                className="error_change_profile"
                style={{ display: `${displyError}` }}
              >
                {formErrors.name}
              </p>
            </div>
            <div className="input">
              <input
                className="ChangeProfile_input_value"
                // className="lastname_change_profile"
                type="text"
                name="lastname"
                placeholder={t("changeprofile3")}
                value={formValues.lastname}
                onChange={handleChange}
              />
              <p className="error_change_profile">{formErrors.lastname}</p>
            </div>
          </div>
          <div className="form_Row">
            <div className="input">
              <input
                className="ChangeProfile_input_value"
                // className="age_change_profile"
                type="text"
                name="age"
                placeholder={t("changeprofile6")}
                value={formValues.age}
                onChange={handleChange}
              />
              <p className="error_change_profile">{formErrors.age}</p>
            </div>
            <div className="input">
              <input
                className="ChangeProfile_input_value"
                // className="senf_change_profile"
                type="text"
                name="senf"
                placeholder={t("changeprofile7")}
                value={formValues.senf}
                onChange={handleChange}
              />
              <p className="error_change_profile">{formErrors.senf}</p>
            </div>
          </div>
          <button className="submit_button"> {t("changeprofile8")}</button>
        </form>
      </div>
    </div>
  );
  // }
};
export default withNamespaces()(ChangeProfile);