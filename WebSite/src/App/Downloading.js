import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import JsonFiles from "./Json Files/SchoolSubjects.json";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import * as React from "react";
import "./downloading.css";
import { HiDownload } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import image10 from "./assets/Group_158_a@2x.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import FileSaver from "file-saver";
// import * as React from "react";
import bookicon from "./assets/Group_360.png";
import Dimage from "./assets/Dimage.png";
import Dimage2 from "./assets/Dimage.png";
import pathimg from "./assets/Path 968.png";
import line from "./assets/Line 117.png";
const Downloading = ({ t }, props) => {
  const { userInfo, isLoading } = useContext(AuthContext);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  const grade_path = locationData.grade_path;
  const grade_name = locationData.grade_name;
  console.log(grade_path);

  const [srollState, setScrollState] = React.useState();
  const bottom = useRef(null);
  const top = useRef(null);
  const [DownloadIcon, setDownloadIcon] = React.useState("flex");
  const [spinIcon, setSpinIcon] = React.useState("none");
  const scrollBottom = () => {
    bottom.current.scrollIntoView({ behavier: "smooth" });
    setScrollState("bottom");
  };

  const DownloadPdf = (url, fileName) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.target = "bank";
    aTag.click();
    aTag.remove();
    // setDownloadIcon('none');;

    // setSpinIcon('flex');
    // try {
    //   alert(url);
    //   FileSaver.saveAs(url, fileName);
    //   alert("DownLoading ended");
    // } catch (err) {
    //   alert(err);
    // }
  };
  const scrollTop = () => {
    top.current.scrollIntoView({ behavier: "smooth" });
    setScrollState("top");
  };

  // const navigation = useNavigate();
  //   if (userInfo === null) {
  //     return navigation("/");
  //   } else if (isLoading) {
  //     return <h1>Loading.....</h1>;
  //   } else if(userInfo !== null){
  return (
    <div className="full-Download">
      <div className="d-section">
        <div className="flesh-image-grade-d">
          <Link to="/Book">
            <img src={image10} />
          </Link>
        </div>
        <div className="bottom_D">
          <div className="Dimg">
            <img src={Dimage} className="Dimg_img" />
          </div>
          <div className="BookD_list">
            <div className="second-second-d">
              <div className="p-container-d">
                <p className="p-downloding">{t("downloading1")}</p>
                <p id="p-downloding"> {t("downloading2")}</p>
              </div>
              <div className="Download-ul" id="Download-ul">
                <div className="d-middle" id="d-middle">
                  <div id="D_Top" ref={top}></div>
                  <div className="inside_ul" id="inside_ul">
                    {subjects.map((item, index) => {
                      if (item.parts[0].lessons == undefined) {
                        return (
                          <div className="Download-li">
                            <div className="d-book">
                              <HiDownload
                                size="20px"
                                style={{ display: DownloadIcon }}
                                onClick={() =>
                                  DownloadPdf(
                                    grade_path +
                                      item.subject_path +
                                      item.download_pdf,
                                    grade_name + "_" + item.label + ".pdf"
                                  )
                                }
                              />
                            </div>
                            <p id="h6">
                              {t("downloading3")} {item.label}
                              {t("downloading4")}
                            </p>
                          </div>
                        );
                      } else {
                        return (
                          <div className="Download-li">
                            <div className="d-book">
                              <HiDownload
                                size="20px"
                                style={{ display: DownloadIcon }}
                                onClick={() =>
                                  DownloadPdf(
                                    grade_path +
                                      item.subject_path +
                                      item.download_pdf,
                                    grade_name + "_" + item.label + ".pdf"
                                  )
                                }
                              />
                              <div
                                className="spin"
                                style={{ display: "none" }}
                              ></div>
                            </div>

                            <p id="h6">
                              {t("downloading3")} {item.label}
                              {t("downloading4")}
                            </p>
                          </div>
                          // </Link>
                        );
                      }
                    })}
                  </div>
                  <div id="D_Bottom" ref={bottom}></div>
                </div>
              </div>
              <div className="pathimg">
                <img
                  src={pathimg}
                  onClick={() => {
                    // const slider = document.getElementById("d-middle");
                    // return slider.scrollBy(0, 40);
                    if (srollState == "bottom") {
                      scrollTop();
                    } else {
                      scrollBottom();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }
};

export default withNamespaces()(Downloading);