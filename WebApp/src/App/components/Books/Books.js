import { withNamespaces } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Books.css";
import * as React from "react";
import bookicon from "../../assets/Group_360.png";
import arrowB from "../../assets/arrowB.png";
import imageb1 from "../../assets/B1.png";
import imageb2 from "../../assets/B2.png";
import imageB3 from "../../assets/B3.png";
import imageb4 from "../../assets/B1.png";
import imagebm from "../../assets/mobileb.png";
import imgbm2 from "../../assets/mobileb2.png";
import MBarrow from "../../assets/MBarrow.png";
import mobileb3 from "../../assets/mobileb3.png";
import imgbm4 from "../../assets/imgbm2.png";
import scrolrm from "../../assets/scrolrm.png";
import scrollm from "../../assets/scrollm.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const Books = ({ t }, props) => {
  const { userInfo, isLoading } = useContext(AuthContext);
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  console.log(subjects);
  const grade_path = locationData.grade_path;

  const navigate = useNavigate();
  const leftScroll = () => {
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft - 100;
  };
  const righScrool = () => {
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft + 100;
  };
  const {
    currentBook,
    setCurrentBook,
    currentLesson,
    setCurrentLesson,
    currentpart,
    setCurrentpart,
  } = useContext(AuthContext);
  // const [Height, setHeight] = React.useState(window.innerWidth);
  // const foo = () => {
  //   setHeight(window.innerHeight);
  // };
  var Height;
  window.addEventListener("resize", () => {
    Height = window.innerHeight;
  });
  // const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  return (
    <div className="full_book">
      <div className="Books" id="Books">
        <div className="top">
          <div className="first-svgs">
            <div className="arrowSvg" onClick={() => navigate(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={22}
                data-name="Group 411"
              >
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#707070"
                      d="M0 0h36v22H0z"
                      data-name="Rectangle 85"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" data-name="Group 158">
                  <path
                    fill="#707070"
                    fillRule="evenodd"
                    d="m7.3 13.483 5.574 5.156a2.225 2.225 0 0 1 0 3.178 2.3 2.3 0 0 1-3.219 0L1 13.618a3.294 3.294 0 0 1-1-2.382 3.332 3.332 0 0 1 1-2.382L9.651.659a2.3 2.3 0 0 1 3.223 0 2.229 2.229 0 0 1 0 3.178L7.3 8.988h26.413a2.25 2.25 0 0 1 0 4.5H7.3Z"
                    data-name="Path 433"
                  />
                </g>
              </svg>
            </div>
            {/* <div className="left-svg"> */}
            <div className="laptop-svg">
              <img src={imageb1} className="image1" />
            </div>

            {/* </div> */}
          </div>
          <div className="first-section">
            <h1>{t("books1")}</h1>
            <p> {t("books2")}</p>
          </div>
          <div className="third-section">
            <div className="laptop-right">
              <img src={imageb2} className="imageb2" />
            </div>
          </div>
        </div>
        <div className="middlebook" id="middlebook">
          <div onClick={() => leftScroll()} className="arrrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16.435}
              height={60.158}
              // {...props}
            >
              <path
                fill="#707070"
                d="M16.435 0 0 15.079l16.435 15.079v-8.293l-7.384-6.786 7.384-6.755Z"
                data-name="Path 968"
                className="laptoparrowl"
              />
            </svg>
          </div>
          <div className="middle" id="ul">
            {subjects.map((item) => {
              if (item.parts[0].lessons == undefined) {
                return (
                  <Link
                    onClick={() => {
                      setCurrentLesson("lesson");
                      setCurrentpart(item.parts);
                      setCurrentBook(item.label);
                    }}
                    to="/lessons"
                    state={{
                      lessons: item.parts,
                      title: " مضمون " + item.label,
                      subject_path: grade_path + item.subject_path,
                    }}
                    id="link"
                  >
                    <img src={bookicon} />
                    <div>
                      <p>{t("books6")}</p>
                      <p id="h5">
                        {t("books4")} {item.label}
                      </p>
                      <p>{t("books5")}</p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link
                    onClick={() => {
                      setCurrentLesson("unit");
                      setCurrentpart(item.parts);
                      setCurrentBook(item.label);
                    }}
                    to="/unit"
                    state={{
                      units: item.parts,
                      subject_path: grade_path + item.subject_path,
                    }}
                    id="link"
                  >
                    <img src={bookicon} />
                    <div>
                      <p id="h5">
                        {t("books4")} {item.label}
                      </p>
                      <p>{t("books5")}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          <div onClick={() => righScrool()} className="arrrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16.435}
              height={60.158}
              // {...props}
            >
              <path
                fill="#707070"
                d="m0 0 16.435 15.079L0 30.158v-8.29l7.384-6.786L0 8.327Z"
                data-name="Path 967"
                className="laptoparrowr"
              />
            </svg>
          </div>
        </div>
        <div className="bottom">
          <div className="laptop-right">
            <img src={imageB3} className="imageb2" />
          </div>
          <div className="p-section">
            <p>{t("books3")}</p>
          </div>
          <div className="last-svg">
            <img src={imageb4} className="image4" />
          </div>
        </div>
      </div>
      <div className="MBooks">
        <div className="TopB">
          <div className="arrowSvg" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={22}
              data-name="Group 411"
            >
              <defs>
                <clipPath id="a">
                  <path
                    fill="#707070"
                    d="M0 0h36v22H0z"
                    data-name="Rectangle 85"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#a)" data-name="Group 158">
                <path
                  fill="#707070"
                  fillRule="evenodd"
                  d="m7.3 13.483 5.574 5.156a2.225 2.225 0 0 1 0 3.178 2.3 2.3 0 0 1-3.219 0L1 13.618a3.294 3.294 0 0 1-1-2.382 3.332 3.332 0 0 1 1-2.382L9.651.659a2.3 2.3 0 0 1 3.223 0 2.229 2.229 0 0 1 0 3.178L7.3 8.988h26.413a2.25 2.25 0 0 1 0 4.5H7.3Z"
                  data-name="Path 433"
                />
              </g>
            </svg>
          </div>
          <div className=" Mbarrow" onClick={() => navigate(-1)}>
            <img src={MBarrow} alt="photo" />
          </div>
          <div className="imgbm2">
            <img src={imgbm2} alt="photo" />
          </div>

          <div className="laptop-svg">
            <img src={imageb1} className="image1" />
          </div>
          <div className="topp">
            <h1>{t("books1")}</h1>
            <p> {t("books2")}</p>
          </div>
          <div className="imagebm">
            <img src={imagebm} alt="photo" />
          </div>
          <div className="laptop-right">
            <img src={imageb2} className="imageb2" />
          </div>
        </div>
        <div className="middlebook" id="middlebook">
          <div onClick={() => leftScroll()} className="arrow">
            <img src={scrollm} alt="photo" className="scrollm" />
          </div>
          <div className="MobileBooks" id="ul">
            {subjects.map((item) => {
              if (item.parts[0].lessons == undefined) {
                return (
                  <Link
                    onClick={() => {
                      setCurrentLesson("lesson");
                      setCurrentpart(item.parts);
                      setCurrentBook(item.label);
                    }}
                    to="/lessons"
                    state={{
                      lessons: item.parts,
                      title: " مضمون " + item.label,
                      subject_path: grade_path + item.subject_path,
                    }}
                    id="linkM"
                  >
                    <img src={bookicon} className="MBicon" />
                    <div>
                      <p>{t("books6")}</p>
                      <p id="h5">
                        {t("books4")} {item.label}
                      </p>
                      <p>{t("books5")}</p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link
                    onClick={() => {
                      setCurrentLesson("unit");
                      setCurrentpart(item.parts);
                      setCurrentBook(item.label);
                    }}
                    to="/unit"
                    state={{
                      units: item.parts,
                      subject_path: grade_path + item.subject_path,
                    }}
                    id="linkM"
                  >
                    <img src={bookicon} className="MBicon" />
                    <div>
                      <p id="h5">
                        {t("books4")} {item.label}
                      </p>
                      <p>{t("books5")}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          <div onClick={() => righScrool()} className="arrow">
            <img src={scrolrm} alt="photo" className="scrolrm" />
          </div>
        </div>
        <div className=" ButtomB">
          <div className="laptop-right">
            <img src={imageB3} className="imageb2" />
          </div>
          <div className="mobilebb3">
            <img src={mobileb3} alt="photo" />
          </div>
          <div className="p">
            <p>{t("books3")}</p>{" "}
          </div>
          <div>
            {" "}
            <img className="imagemb" src={imgbm4} alt="photo" />
          </div>
          <div className="last-svg">
            <img src={imageb4} className="image4" />
          </div>
          {/* <img src={imageb4} className="image4" /> */}
        </div>
      </div>
    </div>
  );
  // }
};
export default withNamespaces()(Books);