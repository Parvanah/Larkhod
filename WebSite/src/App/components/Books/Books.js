import { withNamespaces } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Books.css";
import * as React from "react";
import bookicon from "../../assets/Group_360.png";
import arrowBb from "../../assets/arrowBb.png";
import imageb1 from "../../assets/B1.png";
import imageb2 from "../../assets/B2.png";
import imageB3 from "../../assets/B3.png";
import imageb4 from "../../assets/B1.png";
import imagebm from "../../assets/mobileb.png";
import imgbm2 from "../../assets/mobileb2.png";
import image4 from "../../assets/Group_158_bu.png";
import mobileb3 from "../../assets/mobileb3.png";
import imgbm4 from "../../assets/imgbm2.png";
import scrolrm from "../../assets/scrolrm.png";
import scrollm from "../../assets/scrollm.png";
import rightClick from "../../assets/scrolrm.png";
import leftClick from "../../assets/scrollm.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import ig from '../../assets/Group_158_jr@2x.png';
const Books = ({ t }, props) => {
  const { userInfo, isLoading } = useContext(AuthContext);
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  const grade_path = locationData.grade_path;
  const grade_name = locationData.grade_name;
  const navigate = useNavigate();
  const leftScroll = () => {

    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft - 90;
  };
  const righScrool = () => {
    // alert("called")
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft + 90;
  };
  // const righScrollMobile = ()=>{
  //   const slider = document.getElementById("Mul");
  //        slider.scrollLeft = slider.scrollLeft +50;
  // }
  // const leftScrollMobile = ()=>{
  //   const slider = document.getElementById("Mul");
  //        slider.scrollLeft = slider.scrollLeft -50;
  // }
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
    <div className="full_books">
      <div className="section_one_books">
        <div className="imags_one_books">
        <img className="prevuse_books" onClick={() => navigate(-1)} src={image4} />
        <img className="prevuse_bookss" onClick={() => navigate(-1)} src={ig} />
        <img src={imageb1} className="image1_books" />
        </div>
        <div className="titils_books">
          <h1 className="title_one_books">{t("books1")} {grade_name} </h1>
          <p className="title_two_books"> {t("books2")}</p>
        </div>
        <div className="imags_two_books"></div>
        <img src={imagebm} alt="photo" className="photo_books" />
        <img src={imageb2} className="imageb2_books" />
      </div>
      <div className="section_one_books_phone">
      <div className="titils_books_phone">
          <h1 className="title_one_books_phone">{t("books1")} {grade_name} </h1>
          <p className="title_two_books_phone"> {t("books2")}</p>
        </div>
      </div>
      <div className="section_two_books">
          <div onClick={() => leftScroll()} className="arrrow_bookss">
            <img src={leftClick} alt="photo" />
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
                      title: t("sectionlang") === "dari" ? `${grade_name} , مضمون ${item.label} ` : `${grade_name} , ${item.label} مضمون`,
                      subject_path: grade_path + item.subject_path,
                    }}
                    id="link"
                  >
                    <img src={bookicon} />
                    <button className="line_books"></button>
                    <div className="titles_books">

                      <p className="tj_books">{t("books6")}</p>
                      <p id="h5">
                        {t("books4")} {item.label}
                      </p>
                      <p className="tt_books">{t("books5")}</p>
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
                      grade_name: t("sectionlang") === "dari" ? grade_name + ` کتاب ${item.label} ` : grade_name + ` ${item.label} کتاب `
                    }}
                    id="link"
                  >
                    <img src={bookicon} />
                    <button className="line_books"></button>
                    <div className="titles_books">
                      <p className="tj_books">{t("books6")}</p>
                      <p id="h5">
                        {t("books4")} {item.label}
                      </p>
                      <p className="tt_books">{t("books5")}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          <div onClick={() => righScrool()} className="arrrow_books">
            <img src={rightClick} />
          </div>
      </div>
      <div className="section_three_books_phone">
      <p className="para_phone_books">{t("books3")}</p>
      </div>
      <div className="section_three_books">
      <img className="imag_section_three_books" src={mobileb3} alt="photo" /> 
        <img src={imageB3} className="imageb2" />
        <p className="para_books">{t("books3")}</p>
        <img src={imageb4} className="image4" />
      </div>
    </div>
  );
  // }
};
export default withNamespaces()(Books);