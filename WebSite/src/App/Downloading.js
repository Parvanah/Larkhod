// <<<<<<< HEAD
import { AuthContext } from "./context/AuthContext";
import { useContext } from 'react';
import JsonFiles from "./Json Files/SchoolSubjects.json";
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import * as React from "react"
import './downloading.css';
import { HiDownload } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import image10 from "./assets/Group_158_a@2x.png";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import FileSaver from 'file-saver';
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
  }
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  const grade_path = locationData.grade_path;
  const grade_name = locationData.grade_name;
  console.log(grade_path);

  const [srollState, setScrollState] = React.useState();
  const bottom = useRef(null);
  const top = useRef(null)
  const [DownloadIcon , setDownloadIcon] = React.useState('flex');
  const [spinIcon , setSpinIcon] = React.useState('none');
  const scrollBottom = () => {
    bottom.current.scrollIntoView({ behavier: "smooth" });
    setScrollState("bottom")

  }
  const path = "https://larkhoad.s3.ap-south-1.amazonaws.com/school_subjects/dari_curriculam/primary/second_grade/dari_subject/pdf_book/G2-Dr-Dari_compressed.pdf";
  const DownloadPdf = (url, fileName) => {
    // setDownloadIcon('none');
    // setSpinIcon('flex');
    try{
      alert(url);
      FileSaver.saveAs(url, fileName);
      alert('DownLoading ended');
    }
    catch(err){
      alert(err);
    }


  }
  const scrollTop = () => {

    top.current.scrollIntoView({ behavier: "smooth" });
    setScrollState("top")
  }


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
         <Link to="/Book"><img  src={image10} /></Link>
         </div>
        <div className="second-second-d">
        <div className="Dimg">
         <img src={Dimage}  />
         </div>
        <div className="subject-section">
        <div className="p-container-d">
            <p className="p-downloding">{t("downloading1")}</p>
            <p id="p-downloding"> {t("downloading2")}</p>
            </div>
            <div className="Download-ul">
              <div className="d-middle">
                <div ref={top}>
                  {subjects.map((item ) => {
                    // const subject_path = grade_path + item.subject_path + item.download_pdf;
                    if (item.parts[0].lessons == undefined) {

                      return (
                        // <Link
                        //   state={{ lessons: item.parts, title: " مضمون " + item.label }}
                        //   id="link"
                        // >

                        <div className="Download-li">
                          <div className="d-book"><HiDownload size="20px" style={{display: DownloadIcon}} onClick={() => DownloadPdf(grade_path + item.subject_path + item.download_pdf, grade_name + "_" + item.label + ".pdf")} /></div>
                          <div className="spin" style={{display: spinIcon}}></div>
                          <p id="h6"> {t("downloading3")} {item.label} {t("downloading4")}</p>
                        </div>
                        // </Link>
                      );
                    } else {
                      return (
                        // <Link  state={{ units: item.parts }} id="link">

                        <div className="Download-li">
                          <div className="d-book">
                            <HiDownload size="20px" style={{display: DownloadIcon}} onClick={() => DownloadPdf(grade_path + item.subject_path + item.download_pdf, grade_name + "_" + item.label + ".pdf")} />
                            <div className="spin" style={{display: 'none'}}></div></div>
                            
                            <p id="h6">  {t("downloading3")} {item.label} {t("downloading4")}</p>
                        </div>
                        // </Link>
                      );
                    }
                  })}
                </div>
                <div id="line-d">
              <img src={line} className="line-d" />
            </div>
              </div>
            </div>
          
            <img src={pathimg} className="pathimg" onClick={() => {
              if (srollState == "bottom") {
                scrollTop()
              } else {
                scrollBottom()
              }
            }} />
        </div>
        </div>
            {/* <div className="Dimage-m">
              <svg id="Dimage-m"
                xmlns="http://www.w3.org/2000/svg"
                width={262.643}
                height={130.121}
                {...props}
              >
                <defs>
                  <clipPath id="a">
                    <path
                      fill="none"
                      d="M0 0h262.643v130.121H0z"
                      data-name="Rectangle 543"
                    />
                  </clipPath>
                </defs>
                <g data-name="Group 480">
                  <path
                    fill="#93b3f4"
                    d="M117.885 63.419h15.097v2.687h-15.097z"
                    data-name="Rectangle 426"
                  />
                  <path
                    fill="#b7d3f3"
                    d="M119.249 62.271h15.097v1.848h-15.097z"
                    data-name="Rectangle 427"
                  />
                  <path
                    fill="#93b3f4"
                    d="M118.69 60.994h14.474v1.848H118.69z"
                    data-name="Rectangle 428"
                  />
                  <path
                    fill="#bed2fa"
                    d="M120.163 60.082h13.071v1.411h-13.071z"
                    data-name="Rectangle 429"
                  />
                  <path
                    fill="#b7d3f3"
                    d="M119.617 58.742h15.097v1.848h-15.097z"
                    data-name="Rectangle 430"
                  />
                  <path
                    fill="#93b3f4"
                    d="M119.058 57.465h14.474v1.848h-14.474z"
                    data-name="Rectangle 431"
                  />
                  <path
                    fill="#bed2fa"
                    d="M120.531 56.549h13.071v1.411h-13.071z"
                    data-name="Rectangle 432"
                  />
                  <path
                    fill="#b7d3f3"
                    d="m116.22 68.055 2.993-17.14 3.204.559-2.993 17.14z"
                    data-name="Rectangle 433"
                  />
                  <path
                    fill="#93b3f4"
                    d="M113.837 40.072h3.253v13.68h-3.253z"
                    data-name="Rectangle 434"
                  />
                  <path
                    fill="#afcdfb"
                    d="M116.725 39.138h3.252v14.874h-3.252z"
                    data-name="Rectangle 435"
                  />
                  <path
                    fill="#bed2fa"
                    d="M97.582 69.029h3.252v12.982h-3.252z"
                    data-name="Rectangle 436"
                  />
                  <path
                    fill="#6d89cf"
                    d="M100.015 68.425h3.252v13.68h-3.252z"
                    data-name="Rectangle 437"
                  />
                  <path
                    fill="#93b3f4"
                    d="M102.837 68.425h3.252v13.68h-3.252z"
                    data-name="Rectangle 438"
                  />
                  <path
                    fill="#afcdfb"
                    d="M105.725 67.395h3.252v14.874h-3.252z"
                    data-name="Rectangle 439"
                  />
                  <path
                    fill="#93b3f4"
                    d="M130.207 78.057h15.097v2.687h-15.097z"
                    data-name="Rectangle 440"
                  />
                  <path
                    fill="#b7d3f3"
                    d="M131.572 76.938h15.097v1.848h-15.097z"
                    data-name="Rectangle 441"
                  />
                  <path
                    fill="#93b3f4"
                    d="M131.021 75.662h14.474v1.848h-14.474z"
                    data-name="Rectangle 442"
                  />
                  <path
                    fill="#bed2fa"
                    d="M132.511 74.765h13.071v1.411h-13.071z"
                    data-name="Rectangle 443"
                  />
                  <path
                    fill="#b7d3f3"
                    d="M131.939 73.409h15.097v1.848h-15.097z"
                    data-name="Rectangle 444"
                  />
                  <path
                    fill="#93b3f4"
                    d="M131.388 72.132h14.474v1.848h-14.474z"
                    data-name="Rectangle 445"
                  />
                  <path
                    fill="#bed2fa"
                    d="M132.879 71.232h13.071v1.411h-13.071z"
                    data-name="Rectangle 446"
                  />
                  <path
                    fill="#c1d9f4"
                    d="M126.02 66.812h2.574v15.555h-2.574z"
                    data-name="Rectangle 447"
                  />
                  <path
                    fill="#c1d9f4"
                    d="M120.184 67.399h2.574v14.874h-2.574z"
                    data-name="Rectangle 448"
                  />
                  <path
                    fill="#fff"
                    d="M117.27 66.343h3.252v16.1h-3.252z"
                    data-name="Rectangle 449"
                  />
                  <path
                    fill="#b7d3f3"
                    d="m128.656 82.11 2.992-17.14 3.203.558-2.991 17.141z"
                    data-name="Rectangle 450"
                  />
                  <path
                    fill="#bed2fa"
                    d="M114.087 69.033h3.252v12.982h-3.252z"
                    data-name="Rectangle 451"
                  />
                  <path
                    fill="#93b3f4"
                    d="M111.315 68.429h3.252v13.68h-3.252z"
                    data-name="Rectangle 452"
                  />
                  <g data-name="Group 479">
                    <g clipPath="url(#a)" data-name="Group 478">
                      <path
                        fill="#7eb0cf"
                        d="m13.39 129.777 82.228-.351 21.918-.005h7.261l21.96-.005 100.328-.023s22.948-24.154-1.564-47.1c-25.415-23.786-37.772-4.415-45.585-37.9C180.273-39.877-14.147 9.174 36.853 80.891c18.361 25.823-36.143 12.1-23.459 48.886"
                        data-name="Path 2432"
                      />
                      <path
                        fill="#3c98bd"
                        d="M158.764 129.432H46.036v-90.1c0-3.978 3.5-7.215 7.8-7.215h98.381a6.323 6.323 0 0 1 6.547 6.056Zm-110.955-1.64h109.184v-89.62a4.611 4.611 0 0 0-4.774-4.416H53.836a5.821 5.821 0 0 0-6.027 5.575Z"
                        data-name="Path 2433"
                      />
                      <path
                        fill="#3c98bd"
                        d="M46.922 51.008h110.955v1.824H46.922z"
                        data-name="Rectangle 453"
                      />
                      <path
                        fill="#3c98bd"
                        d="M46.922 65.693h110.955v1.824H46.922z"
                        data-name="Rectangle 454"
                      />
                      <path
                        fill="#3c98bd"
                        d="M46.922 80.38h110.955v1.824H46.922z"
                        data-name="Rectangle 455"
                      />
                      <path
                        fill="#3c98bd"
                        d="M46.922 95.119h110.955v1.824H46.922z"
                        data-name="Rectangle 456"
                      />
                      <path
                        fill="#bed2fa"
                        d="M71.124 85.582h2.771v9.537h-2.771z"
                        data-name="Rectangle 457"
                      />
                      <path
                        fill="#bed2fa"
                        d="M68.076 84.753h2.401v10.366h-2.401z"
                        data-name="Rectangle 458"
                      />
                      <path
                        fill="#93b3f4"
                        d="m64.332 94.946 1.36-10.289 2.385.27-1.36 10.289Z"
                        data-name="Path 2839"
                      />
                      <path
                        fill="#bed2fa"
                        d="M148.542 85.582h2.771v9.537h-2.771z"
                        data-name="Rectangle 460"
                      />
                      <path
                        fill="#bed2fa"
                        d="M145.494 84.753h2.401v10.366h-2.401z"
                        data-name="Rectangle 461"
                      />
                      <path
                        fill="#93b3f4"
                        d="m141.75 94.946 1.355-10.293 2.386.268-1.355 10.294Z"
                        data-name="Path 2840"
                      />
                      <path
                        fill="#6d89cf"
                        d="M50.826 93.254h11.33v1.865h-11.33z"
                        data-name="Rectangle 463"
                      />
                      <path
                        fill="#bed2fa"
                        d="M49.441 91.971H60.77v1.283H49.441z"
                        data-name="Rectangle 464"
                      />
                      <path
                        fill="#93b3f4"
                        d="M50.555 90.689h10.862v1.283H50.555z"
                        data-name="Rectangle 465"
                      />
                      <path
                        fill="#bed2fa"
                        d="M50.292 89.709h9.809v.98h-9.809z"
                        data-name="Rectangle 466"
                      />
                      <path
                        fill="#93b3f4"
                        d="M105.206 93.254h11.329v1.865h-11.329z"
                        data-name="Rectangle 467"
                      />
                      <path
                        fill="#bed2fa"
                        d="M103.821 91.971h11.33v1.283h-11.33z"
                        data-name="Rectangle 468"
                      />
                      <path
                        fill="#93b3f4"
                        d="M104.935 90.689h10.862v1.283h-10.862z"
                        data-name="Rectangle 469"
                      />
                      <path
                        fill="#bed2fa"
                        d="M104.672 89.709h9.81v.98h-9.81z"
                        data-name="Rectangle 470"
                      />
                      <path
                        fill="#bed2fa"
                        d="M103.448 88.427h11.329v1.283h-11.329z"
                        data-name="Rectangle 471"
                      />
                      <path
                        fill="#93b3f4"
                        d="M104.562 87.144h10.862v1.283h-10.862z"
                        data-name="Rectangle 472"
                      />
                      <path
                        fill="#bed2fa"
                        d="M104.299 86.164h9.809v.98h-9.809z"
                        data-name="Rectangle 473"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M96.713 84.754h1.931v10.324h-1.931z"
                        data-name="Rectangle 474"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M120.462 84.28h1.931v10.798h-1.931z"
                        data-name="Rectangle 475"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M126.313 84.754h1.931v10.324h-1.931z"
                        data-name="Rectangle 476"
                      />
                      <path
                        fill="#fff"
                        d="M94.273 83.902h2.441v11.176h-2.441z"
                        data-name="Rectangle 477"
                      />
                      <path
                        fill="#fff"
                        d="M128.646 83.902h2.441v11.176h-2.441z"
                        data-name="Rectangle 478"
                      />
                      <path
                        fill="#bed2fa"
                        d="M91.832 84.435h2.441v10.643h-2.441z"
                        data-name="Rectangle 479"
                      />
                      <path
                        fill="#bed2fa"
                        d="m114.643 83.18 2.404-.388 2.244 11.898-2.403.388Z"
                        data-name="Path 2841"
                      />
                      <path
                        fill="#bed2fa"
                        d="M89.391 86.067h2.441v9.011h-2.441z"
                        data-name="Rectangle 481"
                      />
                      <path
                        fill="#bed2fa"
                        d="M131.84 86.067h2.441v9.011h-2.441z"
                        data-name="Rectangle 482"
                      />
                      <path
                        fill="#6d89cf"
                        d="M86.95 85.582h2.441v9.496H86.95z"
                        data-name="Rectangle 483"
                      />
                      <path
                        fill="#93b3f4"
                        d="M84.119 85.582h2.441v9.496h-2.441z"
                        data-name="Rectangle 484"
                      />
                      <path
                        fill="#93b3f4"
                        d="M134.62 85.582h2.441v9.496h-2.441z"
                        data-name="Rectangle 485"
                      />
                      <path
                        fill="#afcdfb"
                        d="M81.222 84.754h2.441v10.324h-2.441z"
                        data-name="Rectangle 486"
                      />
                      <path
                        fill="#afcdfb"
                        d="M123.624 84.754h2.441v10.324h-2.441z"
                        data-name="Rectangle 487"
                      />
                      <path
                        fill="#bed2fa"
                        d="M126.859 41.512h2.771v9.537h-2.771z"
                        data-name="Rectangle 488"
                      />
                      <path
                        fill="#bed2fa"
                        d="M130.276 40.683h2.401v10.366h-2.401z"
                        data-name="Rectangle 489"
                      />
                      <path
                        fill="#93b3f4"
                        d="m132.677 40.856 2.385-.27 1.36 10.29-2.385.27Z"
                        data-name="Path 2842"
                      />
                      <path
                        fill="#bed2fa"
                        d="M82.27 56.158h2.771v9.537H82.27z"
                        data-name="Rectangle 491"
                      />
                      <path
                        fill="#bed2fa"
                        d="M85.687 55.329h2.401v10.366h-2.401z"
                        data-name="Rectangle 492"
                      />
                      <path
                        fill="#93b3f4"
                        d="m88.088 55.502 2.385-.27 1.36 10.29-2.385.269Z"
                        data-name="Path 2843"
                      />
                      <path
                        fill="#bed2fa"
                        d="M49.441 41.512h2.771v9.537h-2.771z"
                        data-name="Rectangle 494"
                      />
                      <path
                        fill="#bed2fa"
                        d="M52.858 40.683h2.401v10.366h-2.401z"
                        data-name="Rectangle 495"
                      />
                      <path
                        fill="#93b3f4"
                        d="m55.259 40.856 2.386-.269L59 50.881l-2.386.268Z"
                        data-name="Path 2844"
                      />
                      <path
                        fill="#6d89cf"
                        d="M138.598 49.183h11.329v1.865h-11.329z"
                        data-name="Rectangle 497"
                      />
                      <path
                        fill="#bed2fa"
                        d="M139.983 47.901h11.329v1.283h-11.329z"
                        data-name="Rectangle 498"
                      />
                      <path
                        fill="#93b3f4"
                        d="M139.337 46.618h10.862v1.283h-10.862z"
                        data-name="Rectangle 499"
                      />
                      <path
                        fill="#bed2fa"
                        d="M140.652 45.639h9.809v.98h-9.809z"
                        data-name="Rectangle 500"
                      />
                      <path
                        fill="#93b3f4"
                        d="M84.218 49.183h11.329v1.865H84.218z"
                        data-name="Rectangle 501"
                      />
                      <path
                        fill="#bed2fa"
                        d="M85.603 47.901h11.329v1.283H85.603z"
                        data-name="Rectangle 502"
                      />
                      <path
                        fill="#93b3f4"
                        d="M84.957 46.618h10.862v1.283H84.957z"
                        data-name="Rectangle 503"
                      />
                      <path
                        fill="#bed2fa"
                        d="M86.272 45.639h9.809v.98h-9.809z"
                        data-name="Rectangle 504"
                      />
                      <path
                        fill="#bed2fa"
                        d="M85.976 44.356h11.33v1.283h-11.33z"
                        data-name="Rectangle 505"
                      />
                      <path
                        fill="#93b3f4"
                        d="M85.33 43.074h10.862v1.283H85.33z"
                        data-name="Rectangle 506"
                      />
                      <path
                        fill="#bed2fa"
                        d="M86.645 42.094h9.809v.98h-9.809z"
                        data-name="Rectangle 507"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M102.109 40.683h1.931v10.325h-1.931z"
                        data-name="Rectangle 508"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M78.36 40.21h1.931v10.798H78.36z"
                        data-name="Rectangle 509"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M72.509 40.683h1.931v10.325h-1.931z"
                        data-name="Rectangle 510"
                      />
                      <path
                        fill="#fff"
                        d="M104.04 39.832h2.441v11.176h-2.441z"
                        data-name="Rectangle 511"
                      />
                      <path
                        fill="#fff"
                        d="M69.666 39.832h2.441v11.176h-2.441z"
                        data-name="Rectangle 512"
                      />
                      <path
                        fill="#bed2fa"
                        d="M106.481 40.364h2.441v10.643h-2.441z"
                        data-name="Rectangle 513"
                      />
                      <path
                        fill="#bed2fa"
                        d="m81.46 50.619 2.245-11.898 2.404.388-2.245 11.898Z"
                        data-name="Path 2845"
                      />
                      <path
                        fill="#93b3f4"
                        d="M108.921 41.996h2.441v9.011h-2.441z"
                        data-name="Rectangle 515"
                      />
                      <path
                        fill="#bed2fa"
                        d="M66.473 41.996h2.441v9.011h-2.441z"
                        data-name="Rectangle 516"
                      />
                      <path
                        fill="#6d89cf"
                        d="M111.362 41.512h2.441v9.496h-2.441z"
                        data-name="Rectangle 517"
                      />
                      <path
                        fill="#93b3f4"
                        d="M63.693 41.512h2.441v9.496h-2.441z"
                        data-name="Rectangle 518"
                      />
                      <path
                        fill="#fff"
                        d="M110.59 54.518h2.441v11.176h-2.441z"
                        data-name="Rectangle 519"
                      />
                      <path
                        fill="#bed2fa"
                        d="M107.396 56.682h2.441v9.011h-2.441z"
                        data-name="Rectangle 520"
                      />
                      <path
                        fill="#93b3f4"
                        d="M104.616 56.198h2.441v9.496h-2.441z"
                        data-name="Rectangle 521"
                      />
                      <path
                        fill="#93b3f4"
                        d="M96.459 56.198H98.9v9.496h-2.441z"
                        data-name="Rectangle 522"
                      />
                      <path
                        fill="#93b3f4"
                        d="M93.052 56.198h2.441v9.496h-2.441z"
                        data-name="Rectangle 523"
                      />
                      <path
                        fill="#fff"
                        d="M54.624 54.518h2.441v11.176h-2.441z"
                        data-name="Rectangle 524"
                      />
                      <path
                        fill="#fff"
                        d="m57.069 54.696 2.423-.274 1.467 11.092-2.422.275Z"
                        data-name="Path 2846"
                      />
                      <path
                        fill="#bed2fa"
                        d="M51.431 56.682h2.441v9.011h-2.441z"
                        data-name="Rectangle 526"
                      />
                      <path
                        fill="#93b3f4"
                        d="M48.651 56.198h2.441v9.496h-2.441z"
                        data-name="Rectangle 527"
                      />
                      <path
                        fill="#c1d9f4"
                        d="M91.074 70.055h1.931v10.324h-1.931z"
                        data-name="Rectangle 528"
                      />
                      <path
                        fill="#fff"
                        d="M93.006 69.204h2.441V80.38h-2.441z"
                        data-name="Rectangle 529"
                      />
                      <path
                        fill="#bed2fa"
                        d="M95.446 69.736h2.441v10.643h-2.441z"
                        data-name="Rectangle 530"
                      />
                      <path
                        fill="#afcdfb"
                        d="M135.269 55.369h2.441v10.325h-2.441z"
                        data-name="Rectangle 531"
                      />
                      <path
                        fill="#afcdfb"
                        d="M137.927 55.369h2.441v10.325h-2.441z"
                        data-name="Rectangle 532"
                      />
                      <path
                        fill="#afcdfb"
                        d="M74.689 40.683h2.441v10.325h-2.441z"
                        data-name="Rectangle 533"
                      />
                      <path
                        fill="#93b3f4"
                        d="M70.234 70.888h2.441v9.496h-2.441z"
                        data-name="Rectangle 534"
                      />
                      <path
                        fill="#afcdfb"
                        d="M122.66 70.06h2.441v10.324h-2.441z"
                        data-name="Rectangle 535"
                      />
                      <path
                        fill="#bed2fa"
                        d="M185.105 48.68h-13.442a1.586 1.586 0 0 1-1.639-1.516V35.192a1.586 1.586 0 0 1 1.639-1.516h13.441a1.586 1.586 0 0 1 1.639 1.516v11.971a1.586 1.586 0 0 1-1.639 1.516"
                        data-name="Path 2434"
                      />
                      <path
                        fill="#dde8fd"
                        d="M184.523 48.03H172.25a1.448 1.448 0 0 1-1.5-1.385V35.711a1.449 1.449 0 0 1 1.5-1.385h12.277a1.449 1.449 0 0 1 1.5 1.385v10.934a1.449 1.449 0 0 1-1.5 1.385"
                        data-name="Path 2435"
                      />
                      <path
                        fill="#bed2fa"
                        d="M178.038 35.695a.347.347 0 1 1 .346.32.334.334 0 0 1-.346-.32"
                        data-name="Path 2436"
                      />
                      <path
                        fill="#bed2fa"
                        d="M180.832 36.147a.362.362 0 0 1 .471-.124.308.308 0 0 1 .134.436.362.362 0 0 1-.471.124.308.308 0 0 1-.135-.436"
                        data-name="Path 2437"
                      />
                      <path
                        fill="#bed2fa"
                        d="M183.228 37.907a.364.364 0 0 1 .479.1.306.306 0 0 1-.1.443.363.363 0 0 1-.479-.1.306.306 0 0 1 .1-.443"
                        data-name="Path 2438"
                      />
                      <path
                        fill="#bed2fa"
                        d="M184.413 40.626a.321.321 0 1 1-.346.32.334.334 0 0 1 .346-.32"
                        data-name="Path 2439"
                      />
                      <path
                        fill="#bed2fa"
                        d="M183.807 43.79a.3.3 0 0 1 0 .453.366.366 0 0 1-.49 0 .3.3 0 0 1 0-.453.366.366 0 0 1 .49 0"
                        data-name="Path 2440"
                      />
                      <path
                        fill="#bed2fa"
                        d="M181.632 45.807a.3.3 0 0 1 0 .453.366.366 0 0 1-.49 0 .3.3 0 0 1 0-.453.367.367 0 0 1 .49 0"
                        data-name="Path 2441"
                      />
                      <path
                        fill="#bed2fa"
                        d="M178.038 46.847a.347.347 0 1 1 .346.32.334.334 0 0 1-.346-.32"
                        data-name="Path 2442"
                      />
                      <path
                        fill="#bed2fa"
                        d="M175.925 36.147a.361.361 0 0 0-.471-.124.308.308 0 0 0-.135.436.362.362 0 0 0 .471.124.308.308 0 0 0 .134-.436"
                        data-name="Path 2443"
                      />
                      <path
                        fill="#bed2fa"
                        d="M173.531 37.907a.364.364 0 0 0-.479.1.306.306 0 0 0 .1.443.364.364 0 0 0 .479-.1.307.307 0 0 0-.1-.443"
                        data-name="Path 2444"
                      />
                      <path
                        fill="#bed2fa"
                        d="M172.344 40.626a.321.321 0 1 0 .346.32.334.334 0 0 0-.346-.32"
                        data-name="Path 2445"
                      />
                      <path
                        fill="#bed2fa"
                        d="M172.95 43.79a.3.3 0 0 0 0 .453.366.366 0 0 0 .49 0 .3.3 0 0 0 0-.453.366.366 0 0 0-.49 0"
                        data-name="Path 2446"
                      />
                      <path
                        fill="#bed2fa"
                        d="M175.125 45.807a.3.3 0 0 0 0 .453.366.366 0 0 0 .49 0 .3.3 0 0 0 0-.453.367.367 0 0 0-.49 0"
                        data-name="Path 2447"
                      />
                      <path
                        fill="#bed2fa"
                        d="M178.291 40.95a.348.348 0 1 1 .346.32.334.334 0 0 1-.346-.32"
                        data-name="Path 2448"
                      />
                      <path
                        fill="#bed2fa"
                        d="M178.59 36.949h.095v4.002h-.095z"
                        data-name="Rectangle 536"
                      />
                      <path
                        fill="#bed2fa"
                        d="m178.506 40.842 2.295-1.667.175.207-2.295 1.667Z"
                        data-name="Path 2838"
                      />
                      <path
                        fill="#3c98bd"
                        d="M204.096 119.752s15.844-13.938 20.289-10.7-20.289 10.7-20.289 10.7"
                        data-name="Path 2449"
                      />
                      <path
                        fill="#3c98bd"
                        d="M202.951 122.432s29.477-12.206 36.452-5.752-8.089 5.657-13.667 4.936-22.784.817-22.784.817"
                        data-name="Path 2450"
                      />
                      <path
                        fill="#3c98bd"
                        d="M201.713 119.444s.138-.686.327-1.691c.369-1.96.929-5.131 1.028-6.783.148-2.5 2.321-4.272 4.706-1.729s-5.144 9.517-5.144 9.517Z"
                        data-name="Path 2451"
                      />
                      <path
                        fill="#3c98bd"
                        d="M210.076 71.721C207.92 66.5 198.31 69.09 198.31 69.09s-5.626 10.012-7.535 10.417 3-9.429 3-9.429c-3.784.014-12.871 5.153-12.871 5.153s1.8 10.9-.16 10.858-1.06-9.728-1.06-9.728c-3.517 1.344-6.476 5.573-6.476 5.573-3.536 6.768 6.042 10.619 6.042 10.619a16.7 16.7 0 0 1-1.528 8.388 12.438 12.438 0 0 0-.918 2.281l.989-.092q.081-.379.191-.735v-.01c.052-.148.128-.358.222-.614.242-.575.4-1 .5-1.3.718-1.8 1.778-4.16 2.6-4.71a1.764 1.764 0 0 1-.257-.4l.257.4c2.058 3.2 10.581 2.967 15.2 1.633s2.428-2.373-.328-4.132-8.018-.738-9.675-1.374.554-1.633 3.722-1.7 5.056 2.692 10.182 2.666 8.032-9.22 8.032-9.22c-3.4 1.333-9.877.13-10.241-.965s8.957-1.851 10.371-2.322 3.66-3.391 1.5-8.611"
                        data-name="Path 2452"
                      />
                      <path
                        fill="#3c98bd"
                        d="M55.205 117.822c-4.439-5.02 3.924-12.475 3.924-12.475s14.144.538 15.686-1.008-12-2.644-12-2.644c2.2-3.516 13.035-9.014 13.035-9.014s10.829 7.964 11.912 6.115-9.978-6.6-9.978-6.6c3.492-2.5 9.8-2.815 9.8-2.815 9.407.611 8.073 11.753 8.073 11.753a23.529 23.529 0 0 0 10.012 3.416 17.562 17.562 0 0 1 3.013.461l-.671.868q-.46-.143-.91-.246h-.018c-.191-.036-.463-.088-.8-.147-.766-.106-1.319-.2-1.705-.286-2.375-.37-5.554-.744-6.625-.3a2.029 2.029 0 0 0-.287-.47l.287.47c2.292 3.761-2.875 11.565-6.991 15.1s-3.983.892-4.308-2.689 3.823-7.892 4.086-9.8-2.1-.425-4 2.484.013 6.261-2.973 11.02-14.67 2.16-14.67 2.16c3.41-2.394 5.84-9.123 4.857-10.094s-7.183 7.273-8.511 8.318-5.8 1.452-10.242-3.568"
                        data-name="Path 2453"
                      />
                      <path
                        fill="#fff"
                        d="M132.883 79.45h-34.9V62.312h35.088c4.7 0 8.5 3.522 8.5 7.866v1.228c0 4.443-3.894 8.044-8.7 8.044"
                        data-name="Path 2454"
                      />
                      <path
                        fill="#afcdfb"
                        d="M174.092 69.363v2.575a9.074 9.074 0 0 1-.8 3.777 5.813 5.813 0 0 1-5.1 3.732H96.82a.993.993 0 0 1-.855-1.088v-.386a.993.993 0 0 1 .855-1.088h43.511a7.4 7.4 0 0 0 .611-1.169 8.529 8.529 0 0 0 .638-3.277v-3.277a8.6 8.6 0 0 0-.176-1.744 7.684 7.684 0 0 0-1.009-2.545H96.82a.993.993 0 0 1-.855-1.089v-.385a.993.993 0 0 1 .855-1.089h71.737c2.528 0 4.66 2.159 5.322 5.108a8.842 8.842 0 0 1 .213 1.943"
                        data-name="Path 2455"
                      />
                      <path
                        fill="#bed2fa"
                        d="m97.987 70.882 5.285.288-5.285.174Z"
                        data-name="Path 2456"
                      />
                      <path
                        fill="#bed2fa"
                        d="m97.987 73.57 12.573.288-12.573.173Z"
                        data-name="Path 2457"
                      />
                      <path
                        fill="#3a49cd"
                        d="M102.315 129.433h51.482v-13.331h-51.9a6.251 6.251 0 0 0-6.479 5.993v.955a6.657 6.657 0 0 0 6.9 6.383"
                        data-name="Path 2458"
                      />
                      <path
                        fill="#fff"
                        d="M150.909 129.433h58.571v-13.331h-58.721a6.381 6.381 0 0 0-6.615 6.118v.955a6.526 6.526 0 0 0 6.765 6.257"
                        data-name="Path 2459"
                      />
                      <path
                        fill="#3a49cd"
                        d="M140.235 129.433h71.276a.965.965 0 0 0 1-.926v-.143a.965.965 0 0 0-1-.926h-71.275a.965.965 0 0 0-1 .926v.143a.965.965 0 0 0 1 .925"
                        data-name="Path 2460"
                      />
                      <path
                        fill="#3a49cd"
                        d="M140.235 118.096h71.275a.965.965 0 0 0 1-.926v-.143a.965.965 0 0 0-1-.925h-71.276a.965.965 0 0 0-1 .925v.143a.965.965 0 0 0 1 .926"
                        data-name="Path 2461"
                      />
                      <path
                        fill="#bed2fa"
                        d="m209.48 122.767-7.921.224 7.921.135Z"
                        data-name="Path 2462"
                      />
                      <path
                        fill="#bed2fa"
                        d="m209.48 119.7-18.845.224 18.845.135Z"
                        data-name="Path 2463"
                      />
                      <path
                        fill="#afcdfb"
                        d="M190.829 119.879a3.109 3.109 0 0 1 1.075 1.514 2.184 2.184 0 0 1 .084.527c.044 1.251 0 4.082 0 4.082l2.384-1.416 2.378 1.416v-3.837a3.055 3.055 0 0 0-.583-1.894.9.9 0 0 0-.659-.392Z"
                        data-name="Path 2464"
                      />
                      <path
                        fill="#93b3f4"
                        d="M190.829 119.879a3.109 3.109 0 0 1 1.075 1.514l4.778.056s-.187-1.348-1.173-1.57Z"
                        data-name="Path 2465"
                      />
                      <path
                        fill="#fff"
                        d="M136.42 95.801h57.223V79.45h-57.407c-4.481 0-8.114 3.36-8.114 7.505v1.171c0 4.239 3.715 7.675 8.3 7.675"
                        data-name="Path 2466"
                      />
                      <path
                        fill="#6d89cf"
                        d="M128.09 85.794v3.52a3.237 3.237 0 0 0 .4 1.524 4.68 4.68 0 0 0 2.273 1.981 6.583 6.583 0 0 0 2.638.537h61.966a1.194 1.194 0 0 1 1.315 1.016v.415a1.2 1.2 0 0 1-1.315 1.016H88.321a10.049 10.049 0 0 1-7.426-2.983 5.948 5.948 0 0 1-1.64-4.018v-2.776a5.343 5.343 0 0 1 .846-2.859 8.982 8.982 0 0 1 7.666-3.715h107.6a1.194 1.194 0 0 1 1.315 1.015v.415a1.194 1.194 0 0 1-1.315 1.016h-62.154a5.922 5.922 0 0 0-3.769 1.27 4.008 4.008 0 0 0-.97 1.163 3.141 3.141 0 0 0-.384 1.466"
                        data-name="Path 2467"
                      />
                      <path
                        fill="#bed2fa"
                        d="m193.644 87.626-7.944.275 7.944.166Z"
                        data-name="Path 2468"
                      />
                      <path
                        fill="#bed2fa"
                        d="m193.648 83.863-18.9.275 18.9.165Z"
                        data-name="Path 2469"
                      />
                      <path
                        fill="#fa7269"
                        d="M174.94 84.083a3.655 3.655 0 0 1 1.66 1.371 1.244 1.244 0 0 1 .13.477c.069 1.132 0 3.7 0 3.7l3.682-1.281 3.673 1.281v-3.473a2.1 2.1 0 0 0-.9-1.714 1.752 1.752 0 0 0-1.017-.355Z"
                        data-name="Path 2470"
                      />
                      <path
                        fill="#e75755"
                        d="M174.94 84.083a3.655 3.655 0 0 1 1.66 1.371l7.379.051a2.05 2.05 0 0 0-1.812-1.422Z"
                        data-name="Path 2471"
                      />
                      <path
                        fill="#060632"
                        d="M262.643 129.728v.1a.3.3 0 0 1-.3.293H.3a.3.3 0 0 1-.3-.293v-.1a.3.3 0 0 1 .3-.294h262.045a.3.3 0 0 1 .3.294"
                        data-name="Path 2472"
                      />
                      <path
                        fill="#ea8888"
                        d="M121.666 38.906a15.406 15.406 0 0 1 2.106 5.694c.67 3.379 1.257 4.627 2.225 5.32a62.022 62.022 0 0 0 6.357 2.739l-.4.873s-7.9-1-8.787-2.216-4.27-8.436-4.008-10.1 2.51-2.312 2.51-2.312"
                        data-name="Path 2473"
                      />
                      <path
                        fill="#fc9290"
                        d="M141.011 79.213c-.071.713 1 .886 2.244.943s.867.292 2.569.578 2.385-.146 2.508-.358c.11-.189-.682-.484-1.525-.818l-.319-.127a7.256 7.256 0 0 1-2.222-1.9 9.711 9.711 0 0 1-1.367-2.906l-2.313-.457s.65 1.993.875 2.844a2.459 2.459 0 0 1-.237 1.486 2.643 2.643 0 0 0-.213.72"
                        data-name="Path 2474"
                      />
                      <path
                        fill="#9e332e"
                        d="M143.254 80.157c1.242.057.867.293 2.569.578s2.385-.146 2.508-.359c.11-.189-.682-.484-1.525-.818l-.013.013a5.225 5.225 0 0 1-2.578.028c-1.126-.283-2.215-.905-2.991-1.107a2.651 2.651 0 0 0-.213.72c-.071.713 1 .886 2.244.943"
                        data-name="Path 2475"
                      />
                      <path
                        fill="#3c98bd"
                        d="M117.973 53.839s15.373-1.07 18.267.619 7.536 21.368 7.536 21.368a1.982 1.982 0 0 1-.926.276 8.35 8.35 0 0 1-1.906-.264s-6.671-8.8-7.141-11.023-.355-4.2-1.425-4.251-14.407 1.5-16.425-1.788a7.067 7.067 0 0 1-.349-6.542Z"
                        data-name="Path 2476"
                      />
                      <path
                        fill="#fc9290"
                        d="M135.128 81.497c-.071.713 1 .886 2.244.943s.867.292 2.569.578 2.385-.146 2.508-.358c.11-.189-.682-.484-1.525-.818l-.319-.128a7.252 7.252 0 0 1-2.222-1.9 9.708 9.708 0 0 1-1.367-2.906l-2.313-.457s.65 1.993.875 2.844a2.458 2.458 0 0 1-.237 1.486 2.643 2.643 0 0 0-.213.72"
                        data-name="Path 2477"
                      />
                      <path
                        fill="#9e332e"
                        d="M137.372 82.441c1.242.057.867.293 2.569.578s2.385-.146 2.508-.359c.11-.189-.682-.484-1.525-.818l-.013.013a5.226 5.226 0 0 1-2.579.028c-1.126-.283-2.215-.905-2.991-1.106a2.638 2.638 0 0 0-.213.72c-.071.713 1 .886 2.244.943"
                        data-name="Path 2478"
                      />
                      <path
                        fill="#0f53a1"
                        d="M114.962 54.72s13.656.6 16.477 2.39 6.631 21.623 6.631 21.623a2 2 0 0 1-.937.243 8.335 8.335 0 0 1-1.893-.333s-6.3-9.038-6.671-11.272-.178-4.207-1.245-4.3-14.46.98-16.337-2.378 3.976-5.976 3.976-5.976"
                        data-name="Path 2479"
                      />
                      <path
                        fill="#0b0754"
                        d="M121.077 27.598a3.677 3.677 0 0 0-1.766-.769.963.963 0 0 1 .439-.079 3.211 3.211 0 0 0-1.1 0c-3.984-2.624-6.349 3.232-6.644 4.653a9.328 9.328 0 0 1-2.714 5.215c-4.815 4.518 2.064 9.746 2.064 9.746.029.027 3.453-6.75 6.89-7.838a8.042 8.042 0 0 0 1.775-2.6 7.5 7.5 0 0 1-1.313 2.421c3.079-1.53 3.748-9.517 2.364-10.753"
                        data-name="Path 2480"
                      />
                      <path
                        fill="#fc9290"
                        d="M114.388 36.792a16.616 16.616 0 0 1 2.543 0 8.7 8.7 0 0 1 2.207.512c1.2.465 1.077 2.436-1.448 2.071s-3.479-2-3.3-2.584"
                        data-name="Path 2481"
                      />
                      <path
                        fill="#fc9290"
                        d="M119.031 38.226c.015.007.36 1.7-1.293 1.628-1.086-.044-3.427-1.259-3.22-2.119a10.031 10.031 0 0 0 1.084-3.889l.2.049 3.323.824s-.148.975-.216 1.9c-.058.775-.06 1.514.126 1.608"
                        data-name="Path 2482"
                      />
                      <path
                        fill="#ea8888"
                        d="M119.123 34.722s-.147.975-.216 1.9a3.873 3.873 0 0 1-3.107-2.723Z"
                        data-name="Path 2483"
                      />
                      <path
                        fill="#fff"
                        d="M115.487 33.361a8.561 8.561 0 0 1-.468-2.881 3.389 3.389 0 0 1 4.74-2.679 4.881 4.881 0 0 1 1.753 1.139c.618.645 1.418 1.909-.556 4.389l-.573.86Z"
                        data-name="Path 2484"
                      />
                      <path
                        fill="#fc9290"
                        d="M119.212 36.138s-4.346-.961-3.658-3.455.591-4.3 3.4-3.79 3.078 1.586 3.067 2.471-1.657 4.96-2.8 4.774"
                        data-name="Path 2485"
                      />
                      <path
                        fill="#0b0754"
                        d="M120.937 29.3s-2 2.644-3.934 2.646a3.893 3.893 0 0 1-2.6-.637 5.151 5.151 0 0 0 2.464-2.414s3.565-1.2 4.072.406"
                        data-name="Path 2486"
                      />
                      <path
                        fill="#0b0754"
                        d="M120.578 29.467a3.536 3.536 0 0 1 .744 1.549c.04.686-.226 2.016.2 2.07 0 0 1.444-1.777.752-3.139-.733-1.445-1.695-.479-1.695-.479"
                        data-name="Path 2487"
                      />
                      <path
                        fill="#0b0754"
                        d="M124.155 54.053c-.361.4-1.489.522-2.694.706a8.591 8.591 0 0 0-2.653.711c-1.609.874-6.865 3.826-8.405 3.692-.6-.052-.486-1.107-.124-2.506.569-2.21 1.761-5.279 1.761-6.613a35.959 35.959 0 0 1 .612-4.422l.087-.481c.692-3.831 1.65-8.348 1.65-8.348a3.936 3.936 0 0 0 3.152 2.157c2.082 0 1.6-1.645 1.6-1.645a6.259 6.259 0 0 1 2.349.654 16.925 16.925 0 0 1 1.814 2.908s.046.671-1.75.99a20.306 20.306 0 0 1 .489 3.036c.038.9-.662 3.7-.863 5.45a2.983 2.983 0 0 0 .028 1.324 2.737 2.737 0 0 0 1.1.839c1.016.547 2.278 1.073 1.849 1.548"
                        data-name="Path 2488"
                      />
                      <path
                        fill="#030231"
                        d="M122.306 52.506c1.153 1.818-3.127 2.365-3.835 2.75-1.609.874-6.528 4.041-8.069 3.907-.6-.052-.486-1.107-.124-2.506.57-2.21 1.761-5.279 1.761-6.613a35.977 35.977 0 0 1 .612-4.422l1.854-1.647s1.987 4.75 3.881 5.529a16.884 16.884 0 0 0 2.791.84 2.987 2.987 0 0 0 .028 1.324 2.735 2.735 0 0 0 1.1.839"
                        data-name="Path 2489"
                      />
                      <path
                        fill="#fc9290"
                        d="M113.819 38.214a2.546 2.546 0 0 0-3.119.8c-1.533 1.689 1.089 13.766 3.361 14.387 2.523.689 10.094.654 10.094.654l-.316-.849s-7.865-2.344-8.188-2.728-1.026-12.067-1.832-12.262"
                        data-name="Path 2490"
                      />
                      <path
                        fill="#0b0754"
                        d="M114.389 36.792s-3.256.272-4.2 1.262-1.222 3.675-1.222 3.675a8.268 8.268 0 0 0 6.322 1.31Z"
                        data-name="Path 2491"
                      />
                      <path
                        fill="#163560"
                        d="m134.598 49.709.311-2.642-4.039 4.923s1.691.779 1.79.63l1.938-2.911"
                        data-name="Path 2492"
                      />
                      <path
                        fill="#0b0754"
                        d="m128.554 49.708-3.731 5.27h6.266l3.509-5.27Z"
                        data-name="Path 2493"
                      />
                      <path
                        fill="#dde8fd"
                        d="m134.598 49.708.293-2.616-2.111 2.443Z"
                        data-name="Path 2494"
                      />
                      <path
                        fill="#dde8fd"
                        d="m125.015 54.708-.286-.189 3.708-5.1.118.286Z"
                        data-name="Path 2495"
                      />
                      <path
                        fill="#fff"
                        d="m128.436 49.422 5.9.153.259.133h-6.044Z"
                        data-name="Path 2496"
                      />
                      <path
                        fill="#fc9290"
                        d="M127.204 53.932a2.317 2.317 0 0 0-.4 0c.451-.194.9-.4.9-.4s-.2-.192-.977.063a.623.623 0 0 1-.261.027l1.086-.452c-.193-.161-.714-.033-1.119.1a.951.951 0 0 1-.856-.121l-.012-.009.053-.005c.634-.086.8-.422.619-.383s-1.239.11-1.239.11a5.313 5.313 0 0 0-1.432.314l.532.909a8.468 8.468 0 0 0 1.929.149 2.06 2.06 0 0 0 .114-.037l1.391-.085s-.025-.139-.331-.177"
                        data-name="Path 2497"
                      />
                      <path
                        fill="#0b0754"
                        d="m123.933 52.831-7.692-2.439-1.284-7.81-5.992-.855s1.473 10.895 4.331 11.942a15.417 15.417 0 0 0 8.51 1.036c3.158-.549.893.13 2.127-1.876"
                        data-name="Path 2498"
                      />
                      <path
                        fill="#0b0754"
                        d="M123.302 40.867s1.33 7.512 2.336 8.083a3.449 3.449 0 0 0 2.068 1.475l-1.465 2.324a15.154 15.154 0 0 1-2.671-.684s-1.364-.536-2.133-3.523a36.263 36.263 0 0 1-.866-6.813Z"
                        data-name="Path 2499"
                      />
                      <path
                        fill="#fff"
                        d="M134.567 116.138H92.226V95.802h42.571c5.573 0 10.091 4.179 10.091 9.334v1.457c0 5.272-4.621 9.546-10.32 9.546"
                        data-name="Path 2500"
                      />
                      <path
                        fill="#9e332e"
                        d="M184.164 104.169v3.058a10.6 10.6 0 0 1-.966 4.482c-1.234 2.648-3.528 4.428-6.155 4.428H90.816a1.184 1.184 0 0 1-1.033-1.291v-.458a1.184 1.184 0 0 1 1.033-1.291h51.088a2.373 2.373 0 0 0 2.207-1.372l.006-.015a9.962 9.962 0 0 0 .771-3.888v-3.889a10.049 10.049 0 0 0-.213-2.07l-.007-.034a3.969 3.969 0 0 0-3.964-2.986H90.816a1.185 1.185 0 0 1-1.033-1.292v-.457a1.185 1.185 0 0 1 1.033-1.292h86.661c3.054 0 5.63 2.562 6.429 6.062a10.33 10.33 0 0 1 .258 2.306"
                        data-name="Path 2501"
                      />
                      <path
                        fill="#bed2fa"
                        d="m92.226 105.97 6.385.342-6.385.206Z"
                        data-name="Path 2502"
                      />
                      <path
                        fill="#bed2fa"
                        d="m92.226 109.161 15.189.342-15.189.206Z"
                        data-name="Path 2503"
                      />
                      <path
                        fill="#fa7269"
                        d="M139.697 102.252a4.072 4.072 0 0 0-1.66 1.863 2.172 2.172 0 0 0-.129.648c-.069 1.539 0 5.021 0 5.021l-3.682-1.741-3.673 1.741v-4.719a3.26 3.26 0 0 1 .9-2.329 1.492 1.492 0 0 1 1.017-.483Z"
                        data-name="Path 2504"
                      />
                      <path
                        fill="#e75755"
                        d="M139.698 102.252a4.073 4.073 0 0 0-1.66 1.863l-7.379.069a2.438 2.438 0 0 1 1.812-1.932Z"
                        data-name="Path 2505"
                      />
                      <path
                        fill="#fff"
                        d="M85.984 69.208h2.441v11.176h-2.441z"
                        data-name="Rectangle 538"
                      />
                      <path
                        fill="#bed2fa"
                        d="M82.791 71.373h2.441v9.011h-2.441z"
                        data-name="Rectangle 539"
                      />
                      <path
                        fill="#93b3f4"
                        d="M80.01 70.888h2.441v9.496H80.01z"
                        data-name="Rectangle 540"
                      />
                      <path
                        fill="#fff"
                        d="M76.207 69.208h2.441v11.176h-2.441z"
                        data-name="Rectangle 541"
                      />
                      <path
                        fill="#bed2fa"
                        d="M73.014 71.373h2.441v9.011h-2.441z"
                        data-name="Rectangle 542"
                      />
                      <path
                        fill="#0f53a1"
                        d="M67.211 79.723s.782 3.139 3.062 3.139c1.954 0 4.635-4.086 4.635-4.086Z"
                        data-name="Path 2506"
                      />
                      <path
                        fill="#0b0754"
                        d="m93.258 126.368-1.308.642s-7.073-6.937-8.774-13.595a9.6 9.6 0 0 1-.3-3.473s-.1-.3-.283-.835l-.024-.071-.278-.821c-.341-1.006-.811-2.383-1.345-3.95a1830.473 1830.473 0 0 0-5.25-15.125l8.648-2.894a47.737 47.737 0 0 1 2.394 7.7c.217.735.435 1.548.639 2.433.231 1 .446 2.1.625 3.285a46.715 46.715 0 0 1 .518 6.743c0 1.008-.022 2.052-.086 3.131a12.812 12.812 0 0 0 .318 3.042c1.09 5.479 4.5 13.783 4.5 13.783"
                        data-name="Path 2507"
                      />
                      <path
                        fill="#030231"
                        d="M97.993 129.432h-6.992a2.5 2.5 0 0 1 .2-1.733 1.173 1.173 0 0 0-.05-1.489 2.91 2.91 0 0 0 1.178.205 2.6 2.6 0 0 0 1.04-.338 24.167 24.167 0 0 0 1.992 1.936c.457.3 2.494.2 2.635 1.419"
                        data-name="Path 2508"
                      />
                      <path
                        fill="#030231"
                        d="m88.005 99.669-5.432 9.367-.278-.821c-.341-1.006-.811-2.383-1.345-3.95A1830.473 1830.473 0 0 0 75.7 89.14l8.648-2.894a47.721 47.721 0 0 1 2.394 7.7c.217.735.435 1.548.639 2.433.231 1 .446 2.1.625 3.285"
                        data-name="Path 2509"
                      />
                      <path
                        fill="#030231"
                        d="M75.558 127.408a2.687 2.687 0 0 0-.028 2.024h3.8s.079-.835-1.3-1.8a3.013 3.013 0 0 0-2.474-.221"
                        data-name="Path 2510"
                      />
                      <path
                        fill="#0b0754"
                        d="M79.696 55.902c0-.175.1-2.063 3.2-2.231 0 0-1.522.2-1.77.829a2.622 2.622 0 0 1 1.872-.562c.853.228 1.386 1.588 1.4 2.039s-.416 1.916-.95 2.051a1.771 1.771 0 0 1-.651.015 6.694 6.694 0 0 1 .435.679c1.3 2.324.179 5.062-.877 4.831-.677-.148-1.088.937-1.088.937l-6.509-5.177s2.28-4.647 4.932-3.412"
                        data-name="Path 2511"
                      />
                      <path
                        fill="#fc9290"
                        d="M75.606 71.633a8.245 8.245 0 0 0 2.76 1.087c4.258.91 5.89-2.419 6.5-4.7a3.885 3.885 0 0 0-1.443-.41 14.28 14.28 0 0 0-.9-.068c-.478-.339-1.191-1.725-1.348-3.878l-.2.05-3.356.85s.154.987.229 1.919a3.423 3.423 0 0 1-.082 1.6c-.262.053-.419.087-.419.087a19.378 19.378 0 0 0-1.745 3.466"
                        data-name="Path 2512"
                      />
                      <path
                        fill="#ea8888"
                        d="M77.624 64.56s.154.986.229 1.919a3.913 3.913 0 0 0 3.127-2.769Z"
                        data-name="Path 2513"
                      />
                      <path
                        fill="#fc9290"
                        d="M77.585 66.042s4.377-1.04 3.635-3.552-.677-4.337-3.5-3.779-3.084 1.653-3.056 2.547 1.767 4.989 2.925 4.783"
                        data-name="Path 2514"
                      />
                      <path
                        fill="#0b0754"
                        d="M74.375 59.83c.449-.926 1.008-.89 1.36-.735a3.352 3.352 0 0 1 4.089-.415 5.23 5.23 0 0 0 2.537 2.4 3.929 3.929 0 0 1-2.62.685 3.4 3.4 0 0 1-1.764-.57 10.618 10.618 0 0 0 2.336 1.532c-2.465-.38-4.178-2.97-4.354-3.245a3.143 3.143 0 0 0-.6 1.413c-.027.694.266 2.035-.162 2.1 0 0-1.493-1.774-.819-3.163"
                        data-name="Path 2515"
                      />
                      <path
                        fill="#fc9290"
                        d="M76.327 67.956s7.351-1.651 10.548.788l-1.6 20.607-14.377-3.213s.4-1.3 3.161-4.771 1.558-8.553 2.266-13.411"
                        data-name="Path 2516"
                      />
                      <path
                        fill="#030231"
                        d="m80.612 87.056-.023.2a1252.438 1252.438 0 0 0-.354 3.099c-.395 3.495-1.014 9.108-1.436 13.538a52.5 52.5 0 0 0-.426 6.646c.34 1.325 0 17.161 0 17.161a5.419 5.419 0 0 1-3.075 0s-3.255-14.271-2.8-16.254a6.358 6.358 0 0 0-.3-3.677c-2.527-10.886-2.25-16.92-1.749-19.808a11.444 11.444 0 0 1 .432-1.764 3.532 3.532 0 0 1 .173-.433 12.671 12.671 0 0 1 9.561 1.289"
                        data-name="Path 2517"
                      />
                      <path
                        fill="#0f53a1"
                        d="M87.867 74.62c-.355 2.479-1.775 5.513-2.282 7.146 0 0 .848 5.669.039 7.226a.712.712 0 0 1-.345.357c-3 1.208-14.673.035-15.166-3.448-.179-1.266 4.447-5.718 4.717-6.258a3.59 3.59 0 0 0-.311-2.449c-.769 2.193-5.012 1.562-5.012 1.562.5-.788 1.739-6.241 3.124-8.7 1.042-1.851 3.823-2.118 3.823-2.118a4.281 4.281 0 0 0 3.957 1.457c2.8-.241 3.311-1.826 3.311-1.826a10.369 10.369 0 0 1 3.248.876 11.041 11.041 0 0 1 .9 6.178"
                        data-name="Path 2518"
                      />
                      <path
                        fill="#3c98bd"
                        d="M85.583 81.769s.848 5.669.039 7.226c-2.184-1.014-5.031-3.2-4.165-6.623 1.258-4.969 6.408-7.748 6.408-7.748-.355 2.479-1.775 5.513-2.282 7.146"
                        data-name="Path 2519"
                      />
                      <path
                        fill="#0b0754"
                        d="m76.466 75.062 5.006 7.428h-8.518l-4.769-7.268Z"
                        data-name="Path 2520"
                      />
                      <path
                        fill="#dde8fd"
                        d="m81.216 82.117.086-.259-4.737-7.03-.095.234Z"
                        data-name="Path 2521"
                      />
                      <path
                        fill="#fff"
                        d="m76.562 74.828-8.024.211-.352.183 8.281-.161Z"
                        data-name="Path 2522"
                      />
                      <path
                        fill="#030231"
                        d="m68.185 75.222-4.5-2.254 5.247 7.621 4.024 1.9Z"
                        data-name="Path 2523"
                      />
                      <path
                        fill="#fc9290"
                        d="M92.005 80.43c-.482.2-1.72 1.552-2.161 1.689-1.986.615-10.439-1.021-10.439-1.021l.262-1.369s8.3.2 9.208-.022c.172-.043 1.068-1.34 1.413-1.526Z"
                        data-name="Path 2524"
                      />
                      <path
                        fill="#fc9290"
                        d="M79.668 79.726s-1-.753-1.677-.583a11.034 11.034 0 0 0-2.04 1.149c-.369.187-1.373.857-.864 1.262s2.092.057 2.719-.253a3.488 3.488 0 0 1 1.6-.2Z"
                        data-name="Path 2525"
                      />
                      <path
                        fill="#fc9290"
                        d="M78.182 79.119s-1.216-.134-1.548-.128-.242.073-.058.312.816.329.846.413.761-.6.761-.6"
                        data-name="Path 2526"
                      />
                      <path
                        fill="#0f53a1"
                        d="M83.719 67.569s3.606.4 4.6 1.826c1.255 1.808 4.218 9.01 4.122 10.825 0 0-2.166 3.41-9.593 2.864 0 0-.773-2.525.789-3.358a25.333 25.333 0 0 0 4.254-.985l-1.275-4.9Z"
                        data-name="Path 2527"
                      />
                      <path
                        fill="#fc9290"
                        d="M69.339 77.938c-.112-.42-1.1-.158-1.436.084a1.287 1.287 0 0 0-.254.276 4.497 4.497 0 0 1-.024-.19c-.019-.2-.267-.551-.329-.286s-.163 1.377-.163 1.377c-.012.9.611 1.265 1.011.974a4.275 4.275 0 0 0 1.2-2.235"
                        data-name="Path 2528"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div> */}
         

       
      </div>


    </div>
  );
  // }
}

export default withNamespaces()(Downloading);
// =======
// import { AuthContext } from "./context/AuthContext";
// import {useContext } from 'react';
// import JsonFiles from "./Json Files/SchoolSubjects.json";
// import i18n from '../i18n';
// import { withNamespaces } from 'react-i18next';
// import * as React from "react"
// import './downloading.css';
// import { HiDownload } from "react-icons/hi";
// import { Link, useLocation } from "react-router-dom";
// import image10 from "./assets/Group_158_a@2x.png";
// import { useNavigate } from "react-router-dom";
// import { useRef } from 'react';
// import FileSaver from 'file-saver';
// // import * as React from "react";
// import bookicon from "./assets/Group_360.png";
// import Dimage from "./assets/Dimage.png";
// import Dimage2 from "./assets/Dimage.png";
// import pathimg from "./assets/Path 968.png";
// import line from "./assets/Line 117.png";
// const  Downloading = ({ t }, props) => {
//   const { userInfo, isLoading } = useContext(AuthContext);
//   const changeLanguage = (lng) => {
// 		i18n.changeLanguage(lng);
// 	  }
//   const location = useLocation();
//   const locationData = location.state;
//   const subjects = locationData.subjects;
//   const grade_path = locationData.grade_path;
//   const grade_name = locationData.grade_name;
//   console.log(grade_path);

//   const [srollState, setScrollState] = React.useState();
//   const bottom = useRef(null);
//   const top = useRef(null)
//   const scrollBottom = ()=>{
//    bottom.current.scrollIntoView({behavier: "smooth"});
//    setScrollState("bottom")

//   }
//   const path = "https://larkhoad.s3.ap-south-1.amazonaws.com/school_subjects/dari_curriculam/primary/second_grade/dari_subject/pdf_book/G2-Dr-Dari_compressed.pdf";
//   const DownloadPdf=(url , fileName)=>{
//   //  const aTag = document.createElement('a');
//   //  aTag.href = url;
//   //  aTag.target = 'blank';
//   //  aTag.setAttribute('download', 'G2-Dr-Dari_compressed.pdf');
//   //  document.body.appendChild(aTag);
//   //  aTag.click();
//   //  aTag.remove();
//  FileSaver.saveAs(url , fileName );


//   }
//   const scrollTop = ()=>{
    
//     top.current.scrollIntoView({behavier: "smooth"});
//     setScrollState("top")
//    }


//              // const navigation = useNavigate();
// //   if (userInfo === null) {
// //     return navigation("/");
// //   } else if (isLoading) {
// //     return <h1>Loading.....</h1>;
// //   } else if(userInfo !== null){
//     return ( 
//         <div> 
//       <div  className="d-section">
//       <div className="download-b"> 
//       <Link to="/Book"><img className="flesh-image-grade-d" src={image10} /></Link>  
//        <div>
//        <p className="p-downloding">{t("downloading1")}</p>
//           <p id="p-downloding"> {t("downloading2")}</p>
        
//           <div className="Download-ul">
//             <img src={Dimage}  className="Dimg"/>
//          <div className="d-middle">
//        <div  ref={top}>
//        {subjects.map((item) => {
//         // const subject_path = grade_path + item.subject_path + item.download_pdf;
//             if (item.parts[0].lessons == undefined) {

//               return (
//                 // <Link
//                 //   state={{ lessons: item.parts, title: " مضمون " + item.label }}
//                 //   id="link"
//                 // >
                  
//                   <div className="Download-li">
//                     <div className="d-book"><HiDownload size="20px" onClick={()=> DownloadPdf(grade_path + item.subject_path + item.download_pdf , grade_name + "_"+ item.label + ".pdf")}/></div>
//                     <p id="h5"> {t("downloading3")} {item.label} {t("downloading4")}</p>
//                   </div>
//                 // </Link>
//               );
//             } else {
//               return (
//                 // <Link  state={{ units: item.parts }} id="link">

//                   <div className="Download-li">
//                   <div className="d-book"><HiDownload size="20px" onClick={()=> DownloadPdf(grade_path + item.subject_path + item.download_pdf , grade_name + "_"+ item.label + ".pdf")} /></div>
//                     <p id="h5">  {t("downloading3")} {item.label} {t("downloading4")}</p>
//                   </div>
//                 // </Link>
//               );
//             }
//           })}
//        </div>
//          </div>
//         </div>
//         <div id="line-d">
//          <img src={line}  className="line-d"/>
//         </div>
//         <img src={pathimg} className="pathimg" onClick={()=>{
//       if(srollState == "bottom"){
//         scrollTop()
//       }else{
//         scrollBottom()
//       }
//     }}/>
//         <div className="Dimage-m">
//          <svg id="Dimage-m"
//     xmlns="http://www.w3.org/2000/svg"
//     width={262.643}
//     height={130.121}
//     {...props}
//   >
//     <defs>
//       <clipPath id="a">
//         <path
//           fill="none"
//           d="M0 0h262.643v130.121H0z"
//           data-name="Rectangle 543"
//         />
//       </clipPath>
//     </defs>
//     <g data-name="Group 480">
//       <path
//         fill="#93b3f4"
//         d="M117.885 63.419h15.097v2.687h-15.097z"
//         data-name="Rectangle 426"
//       />
//       <path
//         fill="#b7d3f3"
//         d="M119.249 62.271h15.097v1.848h-15.097z"
//         data-name="Rectangle 427"
//       />
//       <path
//         fill="#93b3f4"
//         d="M118.69 60.994h14.474v1.848H118.69z"
//         data-name="Rectangle 428"
//       />
//       <path
//         fill="#bed2fa"
//         d="M120.163 60.082h13.071v1.411h-13.071z"
//         data-name="Rectangle 429"
//       />
//       <path
//         fill="#b7d3f3"
//         d="M119.617 58.742h15.097v1.848h-15.097z"
//         data-name="Rectangle 430"
//       />
//       <path
//         fill="#93b3f4"
//         d="M119.058 57.465h14.474v1.848h-14.474z"
//         data-name="Rectangle 431"
//       />
//       <path
//         fill="#bed2fa"
//         d="M120.531 56.549h13.071v1.411h-13.071z"
//         data-name="Rectangle 432"
//       />
//       <path
//         fill="#b7d3f3"
//         d="m116.22 68.055 2.993-17.14 3.204.559-2.993 17.14z"
//         data-name="Rectangle 433"
//       />
//       <path
//         fill="#93b3f4"
//         d="M113.837 40.072h3.253v13.68h-3.253z"
//         data-name="Rectangle 434"
//       />
//       <path
//         fill="#afcdfb"
//         d="M116.725 39.138h3.252v14.874h-3.252z"
//         data-name="Rectangle 435"
//       />
//       <path
//         fill="#bed2fa"
//         d="M97.582 69.029h3.252v12.982h-3.252z"
//         data-name="Rectangle 436"
//       />
//       <path
//         fill="#6d89cf"
//         d="M100.015 68.425h3.252v13.68h-3.252z"
//         data-name="Rectangle 437"
//       />
//       <path
//         fill="#93b3f4"
//         d="M102.837 68.425h3.252v13.68h-3.252z"
//         data-name="Rectangle 438"
//       />
//       <path
//         fill="#afcdfb"
//         d="M105.725 67.395h3.252v14.874h-3.252z"
//         data-name="Rectangle 439"
//       />
//       <path
//         fill="#93b3f4"
//         d="M130.207 78.057h15.097v2.687h-15.097z"
//         data-name="Rectangle 440"
//       />
//       <path
//         fill="#b7d3f3"
//         d="M131.572 76.938h15.097v1.848h-15.097z"
//         data-name="Rectangle 441"
//       />
//       <path
//         fill="#93b3f4"
//         d="M131.021 75.662h14.474v1.848h-14.474z"
//         data-name="Rectangle 442"
//       />
//       <path
//         fill="#bed2fa"
//         d="M132.511 74.765h13.071v1.411h-13.071z"
//         data-name="Rectangle 443"
//       />
//       <path
//         fill="#b7d3f3"
//         d="M131.939 73.409h15.097v1.848h-15.097z"
//         data-name="Rectangle 444"
//       />
//       <path
//         fill="#93b3f4"
//         d="M131.388 72.132h14.474v1.848h-14.474z"
//         data-name="Rectangle 445"
//       />
//       <path
//         fill="#bed2fa"
//         d="M132.879 71.232h13.071v1.411h-13.071z"
//         data-name="Rectangle 446"
//       />
//       <path
//         fill="#c1d9f4"
//         d="M126.02 66.812h2.574v15.555h-2.574z"
//         data-name="Rectangle 447"
//       />
//       <path
//         fill="#c1d9f4"
//         d="M120.184 67.399h2.574v14.874h-2.574z"
//         data-name="Rectangle 448"
//       />
//       <path
//         fill="#fff"
//         d="M117.27 66.343h3.252v16.1h-3.252z"
//         data-name="Rectangle 449"
//       />
//       <path
//         fill="#b7d3f3"
//         d="m128.656 82.11 2.992-17.14 3.203.558-2.991 17.141z"
//         data-name="Rectangle 450"
//       />
//       <path
//         fill="#bed2fa"
//         d="M114.087 69.033h3.252v12.982h-3.252z"
//         data-name="Rectangle 451"
//       />
//       <path
//         fill="#93b3f4"
//         d="M111.315 68.429h3.252v13.68h-3.252z"
//         data-name="Rectangle 452"
//       />
//       <g data-name="Group 479">
//         <g clipPath="url(#a)" data-name="Group 478">
//           <path
//             fill="#7eb0cf"
//             d="m13.39 129.777 82.228-.351 21.918-.005h7.261l21.96-.005 100.328-.023s22.948-24.154-1.564-47.1c-25.415-23.786-37.772-4.415-45.585-37.9C180.273-39.877-14.147 9.174 36.853 80.891c18.361 25.823-36.143 12.1-23.459 48.886"
//             data-name="Path 2432"
//           />
//           <path
//             fill="#3c98bd"
//             d="M158.764 129.432H46.036v-90.1c0-3.978 3.5-7.215 7.8-7.215h98.381a6.323 6.323 0 0 1 6.547 6.056Zm-110.955-1.64h109.184v-89.62a4.611 4.611 0 0 0-4.774-4.416H53.836a5.821 5.821 0 0 0-6.027 5.575Z"
//             data-name="Path 2433"
//           />
//           <path
//             fill="#3c98bd"
//             d="M46.922 51.008h110.955v1.824H46.922z"
//             data-name="Rectangle 453"
//           />
//           <path
//             fill="#3c98bd"
//             d="M46.922 65.693h110.955v1.824H46.922z"
//             data-name="Rectangle 454"
//           />
//           <path
//             fill="#3c98bd"
//             d="M46.922 80.38h110.955v1.824H46.922z"
//             data-name="Rectangle 455"
//           />
//           <path
//             fill="#3c98bd"
//             d="M46.922 95.119h110.955v1.824H46.922z"
//             data-name="Rectangle 456"
//           />
//           <path
//             fill="#bed2fa"
//             d="M71.124 85.582h2.771v9.537h-2.771z"
//             data-name="Rectangle 457"
//           />
//           <path
//             fill="#bed2fa"
//             d="M68.076 84.753h2.401v10.366h-2.401z"
//             data-name="Rectangle 458"
//           />
//           <path
//             fill="#93b3f4"
//             d="m64.332 94.946 1.36-10.289 2.385.27-1.36 10.289Z"
//             data-name="Path 2839"
//           />
//           <path
//             fill="#bed2fa"
//             d="M148.542 85.582h2.771v9.537h-2.771z"
//             data-name="Rectangle 460"
//           />
//           <path
//             fill="#bed2fa"
//             d="M145.494 84.753h2.401v10.366h-2.401z"
//             data-name="Rectangle 461"
//           />
//           <path
//             fill="#93b3f4"
//             d="m141.75 94.946 1.355-10.293 2.386.268-1.355 10.294Z"
//             data-name="Path 2840"
//           />
//           <path
//             fill="#6d89cf"
//             d="M50.826 93.254h11.33v1.865h-11.33z"
//             data-name="Rectangle 463"
//           />
//           <path
//             fill="#bed2fa"
//             d="M49.441 91.971H60.77v1.283H49.441z"
//             data-name="Rectangle 464"
//           />
//           <path
//             fill="#93b3f4"
//             d="M50.555 90.689h10.862v1.283H50.555z"
//             data-name="Rectangle 465"
//           />
//           <path
//             fill="#bed2fa"
//             d="M50.292 89.709h9.809v.98h-9.809z"
//             data-name="Rectangle 466"
//           />
//           <path
//             fill="#93b3f4"
//             d="M105.206 93.254h11.329v1.865h-11.329z"
//             data-name="Rectangle 467"
//           />
//           <path
//             fill="#bed2fa"
//             d="M103.821 91.971h11.33v1.283h-11.33z"
//             data-name="Rectangle 468"
//           />
//           <path
//             fill="#93b3f4"
//             d="M104.935 90.689h10.862v1.283h-10.862z"
//             data-name="Rectangle 469"
//           />
//           <path
//             fill="#bed2fa"
//             d="M104.672 89.709h9.81v.98h-9.81z"
//             data-name="Rectangle 470"
//           />
//           <path
//             fill="#bed2fa"
//             d="M103.448 88.427h11.329v1.283h-11.329z"
//             data-name="Rectangle 471"
//           />
//           <path
//             fill="#93b3f4"
//             d="M104.562 87.144h10.862v1.283h-10.862z"
//             data-name="Rectangle 472"
//           />
//           <path
//             fill="#bed2fa"
//             d="M104.299 86.164h9.809v.98h-9.809z"
//             data-name="Rectangle 473"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M96.713 84.754h1.931v10.324h-1.931z"
//             data-name="Rectangle 474"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M120.462 84.28h1.931v10.798h-1.931z"
//             data-name="Rectangle 475"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M126.313 84.754h1.931v10.324h-1.931z"
//             data-name="Rectangle 476"
//           />
//           <path
//             fill="#fff"
//             d="M94.273 83.902h2.441v11.176h-2.441z"
//             data-name="Rectangle 477"
//           />
//           <path
//             fill="#fff"
//             d="M128.646 83.902h2.441v11.176h-2.441z"
//             data-name="Rectangle 478"
//           />
//           <path
//             fill="#bed2fa"
//             d="M91.832 84.435h2.441v10.643h-2.441z"
//             data-name="Rectangle 479"
//           />
//           <path
//             fill="#bed2fa"
//             d="m114.643 83.18 2.404-.388 2.244 11.898-2.403.388Z"
//             data-name="Path 2841"
//           />
//           <path
//             fill="#bed2fa"
//             d="M89.391 86.067h2.441v9.011h-2.441z"
//             data-name="Rectangle 481"
//           />
//           <path
//             fill="#bed2fa"
//             d="M131.84 86.067h2.441v9.011h-2.441z"
//             data-name="Rectangle 482"
//           />
//           <path
//             fill="#6d89cf"
//             d="M86.95 85.582h2.441v9.496H86.95z"
//             data-name="Rectangle 483"
//           />
//           <path
//             fill="#93b3f4"
//             d="M84.119 85.582h2.441v9.496h-2.441z"
//             data-name="Rectangle 484"
//           />
//           <path
//             fill="#93b3f4"
//             d="M134.62 85.582h2.441v9.496h-2.441z"
//             data-name="Rectangle 485"
//           />
//           <path
//             fill="#afcdfb"
//             d="M81.222 84.754h2.441v10.324h-2.441z"
//             data-name="Rectangle 486"
//           />
//           <path
//             fill="#afcdfb"
//             d="M123.624 84.754h2.441v10.324h-2.441z"
//             data-name="Rectangle 487"
//           />
//           <path
//             fill="#bed2fa"
//             d="M126.859 41.512h2.771v9.537h-2.771z"
//             data-name="Rectangle 488"
//           />
//           <path
//             fill="#bed2fa"
//             d="M130.276 40.683h2.401v10.366h-2.401z"
//             data-name="Rectangle 489"
//           />
//           <path
//             fill="#93b3f4"
//             d="m132.677 40.856 2.385-.27 1.36 10.29-2.385.27Z"
//             data-name="Path 2842"
//           />
//           <path
//             fill="#bed2fa"
//             d="M82.27 56.158h2.771v9.537H82.27z"
//             data-name="Rectangle 491"
//           />
//           <path
//             fill="#bed2fa"
//             d="M85.687 55.329h2.401v10.366h-2.401z"
//             data-name="Rectangle 492"
//           />
//           <path
//             fill="#93b3f4"
//             d="m88.088 55.502 2.385-.27 1.36 10.29-2.385.269Z"
//             data-name="Path 2843"
//           />
//           <path
//             fill="#bed2fa"
//             d="M49.441 41.512h2.771v9.537h-2.771z"
//             data-name="Rectangle 494"
//           />
//           <path
//             fill="#bed2fa"
//             d="M52.858 40.683h2.401v10.366h-2.401z"
//             data-name="Rectangle 495"
//           />
//           <path
//             fill="#93b3f4"
//             d="m55.259 40.856 2.386-.269L59 50.881l-2.386.268Z"
//             data-name="Path 2844"
//           />
//           <path
//             fill="#6d89cf"
//             d="M138.598 49.183h11.329v1.865h-11.329z"
//             data-name="Rectangle 497"
//           />
//           <path
//             fill="#bed2fa"
//             d="M139.983 47.901h11.329v1.283h-11.329z"
//             data-name="Rectangle 498"
//           />
//           <path
//             fill="#93b3f4"
//             d="M139.337 46.618h10.862v1.283h-10.862z"
//             data-name="Rectangle 499"
//           />
//           <path
//             fill="#bed2fa"
//             d="M140.652 45.639h9.809v.98h-9.809z"
//             data-name="Rectangle 500"
//           />
//           <path
//             fill="#93b3f4"
//             d="M84.218 49.183h11.329v1.865H84.218z"
//             data-name="Rectangle 501"
//           />
//           <path
//             fill="#bed2fa"
//             d="M85.603 47.901h11.329v1.283H85.603z"
//             data-name="Rectangle 502"
//           />
//           <path
//             fill="#93b3f4"
//             d="M84.957 46.618h10.862v1.283H84.957z"
//             data-name="Rectangle 503"
//           />
//           <path
//             fill="#bed2fa"
//             d="M86.272 45.639h9.809v.98h-9.809z"
//             data-name="Rectangle 504"
//           />
//           <path
//             fill="#bed2fa"
//             d="M85.976 44.356h11.33v1.283h-11.33z"
//             data-name="Rectangle 505"
//           />
//           <path
//             fill="#93b3f4"
//             d="M85.33 43.074h10.862v1.283H85.33z"
//             data-name="Rectangle 506"
//           />
//           <path
//             fill="#bed2fa"
//             d="M86.645 42.094h9.809v.98h-9.809z"
//             data-name="Rectangle 507"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M102.109 40.683h1.931v10.325h-1.931z"
//             data-name="Rectangle 508"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M78.36 40.21h1.931v10.798H78.36z"
//             data-name="Rectangle 509"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M72.509 40.683h1.931v10.325h-1.931z"
//             data-name="Rectangle 510"
//           />
//           <path
//             fill="#fff"
//             d="M104.04 39.832h2.441v11.176h-2.441z"
//             data-name="Rectangle 511"
//           />
//           <path
//             fill="#fff"
//             d="M69.666 39.832h2.441v11.176h-2.441z"
//             data-name="Rectangle 512"
//           />
//           <path
//             fill="#bed2fa"
//             d="M106.481 40.364h2.441v10.643h-2.441z"
//             data-name="Rectangle 513"
//           />
//           <path
//             fill="#bed2fa"
//             d="m81.46 50.619 2.245-11.898 2.404.388-2.245 11.898Z"
//             data-name="Path 2845"
//           />
//           <path
//             fill="#93b3f4"
//             d="M108.921 41.996h2.441v9.011h-2.441z"
//             data-name="Rectangle 515"
//           />
//           <path
//             fill="#bed2fa"
//             d="M66.473 41.996h2.441v9.011h-2.441z"
//             data-name="Rectangle 516"
//           />
//           <path
//             fill="#6d89cf"
//             d="M111.362 41.512h2.441v9.496h-2.441z"
//             data-name="Rectangle 517"
//           />
//           <path
//             fill="#93b3f4"
//             d="M63.693 41.512h2.441v9.496h-2.441z"
//             data-name="Rectangle 518"
//           />
//           <path
//             fill="#fff"
//             d="M110.59 54.518h2.441v11.176h-2.441z"
//             data-name="Rectangle 519"
//           />
//           <path
//             fill="#bed2fa"
//             d="M107.396 56.682h2.441v9.011h-2.441z"
//             data-name="Rectangle 520"
//           />
//           <path
//             fill="#93b3f4"
//             d="M104.616 56.198h2.441v9.496h-2.441z"
//             data-name="Rectangle 521"
//           />
//           <path
//             fill="#93b3f4"
//             d="M96.459 56.198H98.9v9.496h-2.441z"
//             data-name="Rectangle 522"
//           />
//           <path
//             fill="#93b3f4"
//             d="M93.052 56.198h2.441v9.496h-2.441z"
//             data-name="Rectangle 523"
//           />
//           <path
//             fill="#fff"
//             d="M54.624 54.518h2.441v11.176h-2.441z"
//             data-name="Rectangle 524"
//           />
//           <path
//             fill="#fff"
//             d="m57.069 54.696 2.423-.274 1.467 11.092-2.422.275Z"
//             data-name="Path 2846"
//           />
//           <path
//             fill="#bed2fa"
//             d="M51.431 56.682h2.441v9.011h-2.441z"
//             data-name="Rectangle 526"
//           />
//           <path
//             fill="#93b3f4"
//             d="M48.651 56.198h2.441v9.496h-2.441z"
//             data-name="Rectangle 527"
//           />
//           <path
//             fill="#c1d9f4"
//             d="M91.074 70.055h1.931v10.324h-1.931z"
//             data-name="Rectangle 528"
//           />
//           <path
//             fill="#fff"
//             d="M93.006 69.204h2.441V80.38h-2.441z"
//             data-name="Rectangle 529"
//           />
//           <path
//             fill="#bed2fa"
//             d="M95.446 69.736h2.441v10.643h-2.441z"
//             data-name="Rectangle 530"
//           />
//           <path
//             fill="#afcdfb"
//             d="M135.269 55.369h2.441v10.325h-2.441z"
//             data-name="Rectangle 531"
//           />
//           <path
//             fill="#afcdfb"
//             d="M137.927 55.369h2.441v10.325h-2.441z"
//             data-name="Rectangle 532"
//           />
//           <path
//             fill="#afcdfb"
//             d="M74.689 40.683h2.441v10.325h-2.441z"
//             data-name="Rectangle 533"
//           />
//           <path
//             fill="#93b3f4"
//             d="M70.234 70.888h2.441v9.496h-2.441z"
//             data-name="Rectangle 534"
//           />
//           <path
//             fill="#afcdfb"
//             d="M122.66 70.06h2.441v10.324h-2.441z"
//             data-name="Rectangle 535"
//           />
//           <path
//             fill="#bed2fa"
//             d="M185.105 48.68h-13.442a1.586 1.586 0 0 1-1.639-1.516V35.192a1.586 1.586 0 0 1 1.639-1.516h13.441a1.586 1.586 0 0 1 1.639 1.516v11.971a1.586 1.586 0 0 1-1.639 1.516"
//             data-name="Path 2434"
//           />
//           <path
//             fill="#dde8fd"
//             d="M184.523 48.03H172.25a1.448 1.448 0 0 1-1.5-1.385V35.711a1.449 1.449 0 0 1 1.5-1.385h12.277a1.449 1.449 0 0 1 1.5 1.385v10.934a1.449 1.449 0 0 1-1.5 1.385"
//             data-name="Path 2435"
//           />
//           <path
//             fill="#bed2fa"
//             d="M178.038 35.695a.347.347 0 1 1 .346.32.334.334 0 0 1-.346-.32"
//             data-name="Path 2436"
//           />
//           <path
//             fill="#bed2fa"
//             d="M180.832 36.147a.362.362 0 0 1 .471-.124.308.308 0 0 1 .134.436.362.362 0 0 1-.471.124.308.308 0 0 1-.135-.436"
//             data-name="Path 2437"
//           />
//           <path
//             fill="#bed2fa"
//             d="M183.228 37.907a.364.364 0 0 1 .479.1.306.306 0 0 1-.1.443.363.363 0 0 1-.479-.1.306.306 0 0 1 .1-.443"
//             data-name="Path 2438"
//           />
//           <path
//             fill="#bed2fa"
//             d="M184.413 40.626a.321.321 0 1 1-.346.32.334.334 0 0 1 .346-.32"
//             data-name="Path 2439"
//           />
//           <path
//             fill="#bed2fa"
//             d="M183.807 43.79a.3.3 0 0 1 0 .453.366.366 0 0 1-.49 0 .3.3 0 0 1 0-.453.366.366 0 0 1 .49 0"
//             data-name="Path 2440"
//           />
//           <path
//             fill="#bed2fa"
//             d="M181.632 45.807a.3.3 0 0 1 0 .453.366.366 0 0 1-.49 0 .3.3 0 0 1 0-.453.367.367 0 0 1 .49 0"
//             data-name="Path 2441"
//           />
//           <path
//             fill="#bed2fa"
//             d="M178.038 46.847a.347.347 0 1 1 .346.32.334.334 0 0 1-.346-.32"
//             data-name="Path 2442"
//           />
//           <path
//             fill="#bed2fa"
//             d="M175.925 36.147a.361.361 0 0 0-.471-.124.308.308 0 0 0-.135.436.362.362 0 0 0 .471.124.308.308 0 0 0 .134-.436"
//             data-name="Path 2443"
//           />
//           <path
//             fill="#bed2fa"
//             d="M173.531 37.907a.364.364 0 0 0-.479.1.306.306 0 0 0 .1.443.364.364 0 0 0 .479-.1.307.307 0 0 0-.1-.443"
//             data-name="Path 2444"
//           />
//           <path
//             fill="#bed2fa"
//             d="M172.344 40.626a.321.321 0 1 0 .346.32.334.334 0 0 0-.346-.32"
//             data-name="Path 2445"
//           />
//           <path
//             fill="#bed2fa"
//             d="M172.95 43.79a.3.3 0 0 0 0 .453.366.366 0 0 0 .49 0 .3.3 0 0 0 0-.453.366.366 0 0 0-.49 0"
//             data-name="Path 2446"
//           />
//           <path
//             fill="#bed2fa"
//             d="M175.125 45.807a.3.3 0 0 0 0 .453.366.366 0 0 0 .49 0 .3.3 0 0 0 0-.453.367.367 0 0 0-.49 0"
//             data-name="Path 2447"
//           />
//           <path
//             fill="#bed2fa"
//             d="M178.291 40.95a.348.348 0 1 1 .346.32.334.334 0 0 1-.346-.32"
//             data-name="Path 2448"
//           />
//           <path
//             fill="#bed2fa"
//             d="M178.59 36.949h.095v4.002h-.095z"
//             data-name="Rectangle 536"
//           />
//           <path
//             fill="#bed2fa"
//             d="m178.506 40.842 2.295-1.667.175.207-2.295 1.667Z"
//             data-name="Path 2838"
//           />
//           <path
//             fill="#3c98bd"
//             d="M204.096 119.752s15.844-13.938 20.289-10.7-20.289 10.7-20.289 10.7"
//             data-name="Path 2449"
//           />
//           <path
//             fill="#3c98bd"
//             d="M202.951 122.432s29.477-12.206 36.452-5.752-8.089 5.657-13.667 4.936-22.784.817-22.784.817"
//             data-name="Path 2450"
//           />
//           <path
//             fill="#3c98bd"
//             d="M201.713 119.444s.138-.686.327-1.691c.369-1.96.929-5.131 1.028-6.783.148-2.5 2.321-4.272 4.706-1.729s-5.144 9.517-5.144 9.517Z"
//             data-name="Path 2451"
//           />
//           <path
//             fill="#3c98bd"
//             d="M210.076 71.721C207.92 66.5 198.31 69.09 198.31 69.09s-5.626 10.012-7.535 10.417 3-9.429 3-9.429c-3.784.014-12.871 5.153-12.871 5.153s1.8 10.9-.16 10.858-1.06-9.728-1.06-9.728c-3.517 1.344-6.476 5.573-6.476 5.573-3.536 6.768 6.042 10.619 6.042 10.619a16.7 16.7 0 0 1-1.528 8.388 12.438 12.438 0 0 0-.918 2.281l.989-.092q.081-.379.191-.735v-.01c.052-.148.128-.358.222-.614.242-.575.4-1 .5-1.3.718-1.8 1.778-4.16 2.6-4.71a1.764 1.764 0 0 1-.257-.4l.257.4c2.058 3.2 10.581 2.967 15.2 1.633s2.428-2.373-.328-4.132-8.018-.738-9.675-1.374.554-1.633 3.722-1.7 5.056 2.692 10.182 2.666 8.032-9.22 8.032-9.22c-3.4 1.333-9.877.13-10.241-.965s8.957-1.851 10.371-2.322 3.66-3.391 1.5-8.611"
//             data-name="Path 2452"
//           />
//           <path
//             fill="#3c98bd"
//             d="M55.205 117.822c-4.439-5.02 3.924-12.475 3.924-12.475s14.144.538 15.686-1.008-12-2.644-12-2.644c2.2-3.516 13.035-9.014 13.035-9.014s10.829 7.964 11.912 6.115-9.978-6.6-9.978-6.6c3.492-2.5 9.8-2.815 9.8-2.815 9.407.611 8.073 11.753 8.073 11.753a23.529 23.529 0 0 0 10.012 3.416 17.562 17.562 0 0 1 3.013.461l-.671.868q-.46-.143-.91-.246h-.018c-.191-.036-.463-.088-.8-.147-.766-.106-1.319-.2-1.705-.286-2.375-.37-5.554-.744-6.625-.3a2.029 2.029 0 0 0-.287-.47l.287.47c2.292 3.761-2.875 11.565-6.991 15.1s-3.983.892-4.308-2.689 3.823-7.892 4.086-9.8-2.1-.425-4 2.484.013 6.261-2.973 11.02-14.67 2.16-14.67 2.16c3.41-2.394 5.84-9.123 4.857-10.094s-7.183 7.273-8.511 8.318-5.8 1.452-10.242-3.568"
//             data-name="Path 2453"
//           />
//           <path
//             fill="#fff"
//             d="M132.883 79.45h-34.9V62.312h35.088c4.7 0 8.5 3.522 8.5 7.866v1.228c0 4.443-3.894 8.044-8.7 8.044"
//             data-name="Path 2454"
//           />
//           <path
//             fill="#afcdfb"
//             d="M174.092 69.363v2.575a9.074 9.074 0 0 1-.8 3.777 5.813 5.813 0 0 1-5.1 3.732H96.82a.993.993 0 0 1-.855-1.088v-.386a.993.993 0 0 1 .855-1.088h43.511a7.4 7.4 0 0 0 .611-1.169 8.529 8.529 0 0 0 .638-3.277v-3.277a8.6 8.6 0 0 0-.176-1.744 7.684 7.684 0 0 0-1.009-2.545H96.82a.993.993 0 0 1-.855-1.089v-.385a.993.993 0 0 1 .855-1.089h71.737c2.528 0 4.66 2.159 5.322 5.108a8.842 8.842 0 0 1 .213 1.943"
//             data-name="Path 2455"
//           />
//           <path
//             fill="#bed2fa"
//             d="m97.987 70.882 5.285.288-5.285.174Z"
//             data-name="Path 2456"
//           />
//           <path
//             fill="#bed2fa"
//             d="m97.987 73.57 12.573.288-12.573.173Z"
//             data-name="Path 2457"
//           />
//           <path
//             fill="#3a49cd"
//             d="M102.315 129.433h51.482v-13.331h-51.9a6.251 6.251 0 0 0-6.479 5.993v.955a6.657 6.657 0 0 0 6.9 6.383"
//             data-name="Path 2458"
//           />
//           <path
//             fill="#fff"
//             d="M150.909 129.433h58.571v-13.331h-58.721a6.381 6.381 0 0 0-6.615 6.118v.955a6.526 6.526 0 0 0 6.765 6.257"
//             data-name="Path 2459"
//           />
//           <path
//             fill="#3a49cd"
//             d="M140.235 129.433h71.276a.965.965 0 0 0 1-.926v-.143a.965.965 0 0 0-1-.926h-71.275a.965.965 0 0 0-1 .926v.143a.965.965 0 0 0 1 .925"
//             data-name="Path 2460"
//           />
//           <path
//             fill="#3a49cd"
//             d="M140.235 118.096h71.275a.965.965 0 0 0 1-.926v-.143a.965.965 0 0 0-1-.925h-71.276a.965.965 0 0 0-1 .925v.143a.965.965 0 0 0 1 .926"
//             data-name="Path 2461"
//           />
//           <path
//             fill="#bed2fa"
//             d="m209.48 122.767-7.921.224 7.921.135Z"
//             data-name="Path 2462"
//           />
//           <path
//             fill="#bed2fa"
//             d="m209.48 119.7-18.845.224 18.845.135Z"
//             data-name="Path 2463"
//           />
//           <path
//             fill="#afcdfb"
//             d="M190.829 119.879a3.109 3.109 0 0 1 1.075 1.514 2.184 2.184 0 0 1 .084.527c.044 1.251 0 4.082 0 4.082l2.384-1.416 2.378 1.416v-3.837a3.055 3.055 0 0 0-.583-1.894.9.9 0 0 0-.659-.392Z"
//             data-name="Path 2464"
//           />
//           <path
//             fill="#93b3f4"
//             d="M190.829 119.879a3.109 3.109 0 0 1 1.075 1.514l4.778.056s-.187-1.348-1.173-1.57Z"
//             data-name="Path 2465"
//           />
//           <path
//             fill="#fff"
//             d="M136.42 95.801h57.223V79.45h-57.407c-4.481 0-8.114 3.36-8.114 7.505v1.171c0 4.239 3.715 7.675 8.3 7.675"
//             data-name="Path 2466"
//           />
//           <path
//             fill="#6d89cf"
//             d="M128.09 85.794v3.52a3.237 3.237 0 0 0 .4 1.524 4.68 4.68 0 0 0 2.273 1.981 6.583 6.583 0 0 0 2.638.537h61.966a1.194 1.194 0 0 1 1.315 1.016v.415a1.2 1.2 0 0 1-1.315 1.016H88.321a10.049 10.049 0 0 1-7.426-2.983 5.948 5.948 0 0 1-1.64-4.018v-2.776a5.343 5.343 0 0 1 .846-2.859 8.982 8.982 0 0 1 7.666-3.715h107.6a1.194 1.194 0 0 1 1.315 1.015v.415a1.194 1.194 0 0 1-1.315 1.016h-62.154a5.922 5.922 0 0 0-3.769 1.27 4.008 4.008 0 0 0-.97 1.163 3.141 3.141 0 0 0-.384 1.466"
//             data-name="Path 2467"
//           />
//           <path
//             fill="#bed2fa"
//             d="m193.644 87.626-7.944.275 7.944.166Z"
//             data-name="Path 2468"
//           />
//           <path
//             fill="#bed2fa"
//             d="m193.648 83.863-18.9.275 18.9.165Z"
//             data-name="Path 2469"
//           />
//           <path
//             fill="#fa7269"
//             d="M174.94 84.083a3.655 3.655 0 0 1 1.66 1.371 1.244 1.244 0 0 1 .13.477c.069 1.132 0 3.7 0 3.7l3.682-1.281 3.673 1.281v-3.473a2.1 2.1 0 0 0-.9-1.714 1.752 1.752 0 0 0-1.017-.355Z"
//             data-name="Path 2470"
//           />
//           <path
//             fill="#e75755"
//             d="M174.94 84.083a3.655 3.655 0 0 1 1.66 1.371l7.379.051a2.05 2.05 0 0 0-1.812-1.422Z"
//             data-name="Path 2471"
//           />
//           <path
//             fill="#060632"
//             d="M262.643 129.728v.1a.3.3 0 0 1-.3.293H.3a.3.3 0 0 1-.3-.293v-.1a.3.3 0 0 1 .3-.294h262.045a.3.3 0 0 1 .3.294"
//             data-name="Path 2472"
//           />
//           <path
//             fill="#ea8888"
//             d="M121.666 38.906a15.406 15.406 0 0 1 2.106 5.694c.67 3.379 1.257 4.627 2.225 5.32a62.022 62.022 0 0 0 6.357 2.739l-.4.873s-7.9-1-8.787-2.216-4.27-8.436-4.008-10.1 2.51-2.312 2.51-2.312"
//             data-name="Path 2473"
//           />
//           <path
//             fill="#fc9290"
//             d="M141.011 79.213c-.071.713 1 .886 2.244.943s.867.292 2.569.578 2.385-.146 2.508-.358c.11-.189-.682-.484-1.525-.818l-.319-.127a7.256 7.256 0 0 1-2.222-1.9 9.711 9.711 0 0 1-1.367-2.906l-2.313-.457s.65 1.993.875 2.844a2.459 2.459 0 0 1-.237 1.486 2.643 2.643 0 0 0-.213.72"
//             data-name="Path 2474"
//           />
//           <path
//             fill="#9e332e"
//             d="M143.254 80.157c1.242.057.867.293 2.569.578s2.385-.146 2.508-.359c.11-.189-.682-.484-1.525-.818l-.013.013a5.225 5.225 0 0 1-2.578.028c-1.126-.283-2.215-.905-2.991-1.107a2.651 2.651 0 0 0-.213.72c-.071.713 1 .886 2.244.943"
//             data-name="Path 2475"
//           />
//           <path
//             fill="#3c98bd"
//             d="M117.973 53.839s15.373-1.07 18.267.619 7.536 21.368 7.536 21.368a1.982 1.982 0 0 1-.926.276 8.35 8.35 0 0 1-1.906-.264s-6.671-8.8-7.141-11.023-.355-4.2-1.425-4.251-14.407 1.5-16.425-1.788a7.067 7.067 0 0 1-.349-6.542Z"
//             data-name="Path 2476"
//           />
//           <path
//             fill="#fc9290"
//             d="M135.128 81.497c-.071.713 1 .886 2.244.943s.867.292 2.569.578 2.385-.146 2.508-.358c.11-.189-.682-.484-1.525-.818l-.319-.128a7.252 7.252 0 0 1-2.222-1.9 9.708 9.708 0 0 1-1.367-2.906l-2.313-.457s.65 1.993.875 2.844a2.458 2.458 0 0 1-.237 1.486 2.643 2.643 0 0 0-.213.72"
//             data-name="Path 2477"
//           />
//           <path
//             fill="#9e332e"
//             d="M137.372 82.441c1.242.057.867.293 2.569.578s2.385-.146 2.508-.359c.11-.189-.682-.484-1.525-.818l-.013.013a5.226 5.226 0 0 1-2.579.028c-1.126-.283-2.215-.905-2.991-1.106a2.638 2.638 0 0 0-.213.72c-.071.713 1 .886 2.244.943"
//             data-name="Path 2478"
//           />
//           <path
//             fill="#0f53a1"
//             d="M114.962 54.72s13.656.6 16.477 2.39 6.631 21.623 6.631 21.623a2 2 0 0 1-.937.243 8.335 8.335 0 0 1-1.893-.333s-6.3-9.038-6.671-11.272-.178-4.207-1.245-4.3-14.46.98-16.337-2.378 3.976-5.976 3.976-5.976"
//             data-name="Path 2479"
//           />
//           <path
//             fill="#0b0754"
//             d="M121.077 27.598a3.677 3.677 0 0 0-1.766-.769.963.963 0 0 1 .439-.079 3.211 3.211 0 0 0-1.1 0c-3.984-2.624-6.349 3.232-6.644 4.653a9.328 9.328 0 0 1-2.714 5.215c-4.815 4.518 2.064 9.746 2.064 9.746.029.027 3.453-6.75 6.89-7.838a8.042 8.042 0 0 0 1.775-2.6 7.5 7.5 0 0 1-1.313 2.421c3.079-1.53 3.748-9.517 2.364-10.753"
//             data-name="Path 2480"
//           />
//           <path
//             fill="#fc9290"
//             d="M114.388 36.792a16.616 16.616 0 0 1 2.543 0 8.7 8.7 0 0 1 2.207.512c1.2.465 1.077 2.436-1.448 2.071s-3.479-2-3.3-2.584"
//             data-name="Path 2481"
//           />
//           <path
//             fill="#fc9290"
//             d="M119.031 38.226c.015.007.36 1.7-1.293 1.628-1.086-.044-3.427-1.259-3.22-2.119a10.031 10.031 0 0 0 1.084-3.889l.2.049 3.323.824s-.148.975-.216 1.9c-.058.775-.06 1.514.126 1.608"
//             data-name="Path 2482"
//           />
//           <path
//             fill="#ea8888"
//             d="M119.123 34.722s-.147.975-.216 1.9a3.873 3.873 0 0 1-3.107-2.723Z"
//             data-name="Path 2483"
//           />
//           <path
//             fill="#fff"
//             d="M115.487 33.361a8.561 8.561 0 0 1-.468-2.881 3.389 3.389 0 0 1 4.74-2.679 4.881 4.881 0 0 1 1.753 1.139c.618.645 1.418 1.909-.556 4.389l-.573.86Z"
//             data-name="Path 2484"
//           />
//           <path
//             fill="#fc9290"
//             d="M119.212 36.138s-4.346-.961-3.658-3.455.591-4.3 3.4-3.79 3.078 1.586 3.067 2.471-1.657 4.96-2.8 4.774"
//             data-name="Path 2485"
//           />
//           <path
//             fill="#0b0754"
//             d="M120.937 29.3s-2 2.644-3.934 2.646a3.893 3.893 0 0 1-2.6-.637 5.151 5.151 0 0 0 2.464-2.414s3.565-1.2 4.072.406"
//             data-name="Path 2486"
//           />
//           <path
//             fill="#0b0754"
//             d="M120.578 29.467a3.536 3.536 0 0 1 .744 1.549c.04.686-.226 2.016.2 2.07 0 0 1.444-1.777.752-3.139-.733-1.445-1.695-.479-1.695-.479"
//             data-name="Path 2487"
//           />
//           <path
//             fill="#0b0754"
//             d="M124.155 54.053c-.361.4-1.489.522-2.694.706a8.591 8.591 0 0 0-2.653.711c-1.609.874-6.865 3.826-8.405 3.692-.6-.052-.486-1.107-.124-2.506.569-2.21 1.761-5.279 1.761-6.613a35.959 35.959 0 0 1 .612-4.422l.087-.481c.692-3.831 1.65-8.348 1.65-8.348a3.936 3.936 0 0 0 3.152 2.157c2.082 0 1.6-1.645 1.6-1.645a6.259 6.259 0 0 1 2.349.654 16.925 16.925 0 0 1 1.814 2.908s.046.671-1.75.99a20.306 20.306 0 0 1 .489 3.036c.038.9-.662 3.7-.863 5.45a2.983 2.983 0 0 0 .028 1.324 2.737 2.737 0 0 0 1.1.839c1.016.547 2.278 1.073 1.849 1.548"
//             data-name="Path 2488"
//           />
//           <path
//             fill="#030231"
//             d="M122.306 52.506c1.153 1.818-3.127 2.365-3.835 2.75-1.609.874-6.528 4.041-8.069 3.907-.6-.052-.486-1.107-.124-2.506.57-2.21 1.761-5.279 1.761-6.613a35.977 35.977 0 0 1 .612-4.422l1.854-1.647s1.987 4.75 3.881 5.529a16.884 16.884 0 0 0 2.791.84 2.987 2.987 0 0 0 .028 1.324 2.735 2.735 0 0 0 1.1.839"
//             data-name="Path 2489"
//           />
//           <path
//             fill="#fc9290"
//             d="M113.819 38.214a2.546 2.546 0 0 0-3.119.8c-1.533 1.689 1.089 13.766 3.361 14.387 2.523.689 10.094.654 10.094.654l-.316-.849s-7.865-2.344-8.188-2.728-1.026-12.067-1.832-12.262"
//             data-name="Path 2490"
//           />
//           <path
//             fill="#0b0754"
//             d="M114.389 36.792s-3.256.272-4.2 1.262-1.222 3.675-1.222 3.675a8.268 8.268 0 0 0 6.322 1.31Z"
//             data-name="Path 2491"
//           />
//           <path
//             fill="#163560"
//             d="m134.598 49.709.311-2.642-4.039 4.923s1.691.779 1.79.63l1.938-2.911"
//             data-name="Path 2492"
//           />
//           <path
//             fill="#0b0754"
//             d="m128.554 49.708-3.731 5.27h6.266l3.509-5.27Z"
//             data-name="Path 2493"
//           />
//           <path
//             fill="#dde8fd"
//             d="m134.598 49.708.293-2.616-2.111 2.443Z"
//             data-name="Path 2494"
//           />
//           <path
//             fill="#dde8fd"
//             d="m125.015 54.708-.286-.189 3.708-5.1.118.286Z"
//             data-name="Path 2495"
//           />
//           <path
//             fill="#fff"
//             d="m128.436 49.422 5.9.153.259.133h-6.044Z"
//             data-name="Path 2496"
//           />
//           <path
//             fill="#fc9290"
//             d="M127.204 53.932a2.317 2.317 0 0 0-.4 0c.451-.194.9-.4.9-.4s-.2-.192-.977.063a.623.623 0 0 1-.261.027l1.086-.452c-.193-.161-.714-.033-1.119.1a.951.951 0 0 1-.856-.121l-.012-.009.053-.005c.634-.086.8-.422.619-.383s-1.239.11-1.239.11a5.313 5.313 0 0 0-1.432.314l.532.909a8.468 8.468 0 0 0 1.929.149 2.06 2.06 0 0 0 .114-.037l1.391-.085s-.025-.139-.331-.177"
//             data-name="Path 2497"
//           />
//           <path
//             fill="#0b0754"
//             d="m123.933 52.831-7.692-2.439-1.284-7.81-5.992-.855s1.473 10.895 4.331 11.942a15.417 15.417 0 0 0 8.51 1.036c3.158-.549.893.13 2.127-1.876"
//             data-name="Path 2498"
//           />
//           <path
//             fill="#0b0754"
//             d="M123.302 40.867s1.33 7.512 2.336 8.083a3.449 3.449 0 0 0 2.068 1.475l-1.465 2.324a15.154 15.154 0 0 1-2.671-.684s-1.364-.536-2.133-3.523a36.263 36.263 0 0 1-.866-6.813Z"
//             data-name="Path 2499"
//           />
//           <path
//             fill="#fff"
//             d="M134.567 116.138H92.226V95.802h42.571c5.573 0 10.091 4.179 10.091 9.334v1.457c0 5.272-4.621 9.546-10.32 9.546"
//             data-name="Path 2500"
//           />
//           <path
//             fill="#9e332e"
//             d="M184.164 104.169v3.058a10.6 10.6 0 0 1-.966 4.482c-1.234 2.648-3.528 4.428-6.155 4.428H90.816a1.184 1.184 0 0 1-1.033-1.291v-.458a1.184 1.184 0 0 1 1.033-1.291h51.088a2.373 2.373 0 0 0 2.207-1.372l.006-.015a9.962 9.962 0 0 0 .771-3.888v-3.889a10.049 10.049 0 0 0-.213-2.07l-.007-.034a3.969 3.969 0 0 0-3.964-2.986H90.816a1.185 1.185 0 0 1-1.033-1.292v-.457a1.185 1.185 0 0 1 1.033-1.292h86.661c3.054 0 5.63 2.562 6.429 6.062a10.33 10.33 0 0 1 .258 2.306"
//             data-name="Path 2501"
//           />
//           <path
//             fill="#bed2fa"
//             d="m92.226 105.97 6.385.342-6.385.206Z"
//             data-name="Path 2502"
//           />
//           <path
//             fill="#bed2fa"
//             d="m92.226 109.161 15.189.342-15.189.206Z"
//             data-name="Path 2503"
//           />
//           <path
//             fill="#fa7269"
//             d="M139.697 102.252a4.072 4.072 0 0 0-1.66 1.863 2.172 2.172 0 0 0-.129.648c-.069 1.539 0 5.021 0 5.021l-3.682-1.741-3.673 1.741v-4.719a3.26 3.26 0 0 1 .9-2.329 1.492 1.492 0 0 1 1.017-.483Z"
//             data-name="Path 2504"
//           />
//           <path
//             fill="#e75755"
//             d="M139.698 102.252a4.073 4.073 0 0 0-1.66 1.863l-7.379.069a2.438 2.438 0 0 1 1.812-1.932Z"
//             data-name="Path 2505"
//           />
//           <path
//             fill="#fff"
//             d="M85.984 69.208h2.441v11.176h-2.441z"
//             data-name="Rectangle 538"
//           />
//           <path
//             fill="#bed2fa"
//             d="M82.791 71.373h2.441v9.011h-2.441z"
//             data-name="Rectangle 539"
//           />
//           <path
//             fill="#93b3f4"
//             d="M80.01 70.888h2.441v9.496H80.01z"
//             data-name="Rectangle 540"
//           />
//           <path
//             fill="#fff"
//             d="M76.207 69.208h2.441v11.176h-2.441z"
//             data-name="Rectangle 541"
//           />
//           <path
//             fill="#bed2fa"
//             d="M73.014 71.373h2.441v9.011h-2.441z"
//             data-name="Rectangle 542"
//           />
//           <path
//             fill="#0f53a1"
//             d="M67.211 79.723s.782 3.139 3.062 3.139c1.954 0 4.635-4.086 4.635-4.086Z"
//             data-name="Path 2506"
//           />
//           <path
//             fill="#0b0754"
//             d="m93.258 126.368-1.308.642s-7.073-6.937-8.774-13.595a9.6 9.6 0 0 1-.3-3.473s-.1-.3-.283-.835l-.024-.071-.278-.821c-.341-1.006-.811-2.383-1.345-3.95a1830.473 1830.473 0 0 0-5.25-15.125l8.648-2.894a47.737 47.737 0 0 1 2.394 7.7c.217.735.435 1.548.639 2.433.231 1 .446 2.1.625 3.285a46.715 46.715 0 0 1 .518 6.743c0 1.008-.022 2.052-.086 3.131a12.812 12.812 0 0 0 .318 3.042c1.09 5.479 4.5 13.783 4.5 13.783"
//             data-name="Path 2507"
//           />
//           <path
//             fill="#030231"
//             d="M97.993 129.432h-6.992a2.5 2.5 0 0 1 .2-1.733 1.173 1.173 0 0 0-.05-1.489 2.91 2.91 0 0 0 1.178.205 2.6 2.6 0 0 0 1.04-.338 24.167 24.167 0 0 0 1.992 1.936c.457.3 2.494.2 2.635 1.419"
//             data-name="Path 2508"
//           />
//           <path
//             fill="#030231"
//             d="m88.005 99.669-5.432 9.367-.278-.821c-.341-1.006-.811-2.383-1.345-3.95A1830.473 1830.473 0 0 0 75.7 89.14l8.648-2.894a47.721 47.721 0 0 1 2.394 7.7c.217.735.435 1.548.639 2.433.231 1 .446 2.1.625 3.285"
//             data-name="Path 2509"
//           />
//           <path
//             fill="#030231"
//             d="M75.558 127.408a2.687 2.687 0 0 0-.028 2.024h3.8s.079-.835-1.3-1.8a3.013 3.013 0 0 0-2.474-.221"
//             data-name="Path 2510"
//           />
//           <path
//             fill="#0b0754"
//             d="M79.696 55.902c0-.175.1-2.063 3.2-2.231 0 0-1.522.2-1.77.829a2.622 2.622 0 0 1 1.872-.562c.853.228 1.386 1.588 1.4 2.039s-.416 1.916-.95 2.051a1.771 1.771 0 0 1-.651.015 6.694 6.694 0 0 1 .435.679c1.3 2.324.179 5.062-.877 4.831-.677-.148-1.088.937-1.088.937l-6.509-5.177s2.28-4.647 4.932-3.412"
//             data-name="Path 2511"
//           />
//           <path
//             fill="#fc9290"
//             d="M75.606 71.633a8.245 8.245 0 0 0 2.76 1.087c4.258.91 5.89-2.419 6.5-4.7a3.885 3.885 0 0 0-1.443-.41 14.28 14.28 0 0 0-.9-.068c-.478-.339-1.191-1.725-1.348-3.878l-.2.05-3.356.85s.154.987.229 1.919a3.423 3.423 0 0 1-.082 1.6c-.262.053-.419.087-.419.087a19.378 19.378 0 0 0-1.745 3.466"
//             data-name="Path 2512"
//           />
//           <path
//             fill="#ea8888"
//             d="M77.624 64.56s.154.986.229 1.919a3.913 3.913 0 0 0 3.127-2.769Z"
//             data-name="Path 2513"
//           />
//           <path
//             fill="#fc9290"
//             d="M77.585 66.042s4.377-1.04 3.635-3.552-.677-4.337-3.5-3.779-3.084 1.653-3.056 2.547 1.767 4.989 2.925 4.783"
//             data-name="Path 2514"
//           />
//           <path
//             fill="#0b0754"
//             d="M74.375 59.83c.449-.926 1.008-.89 1.36-.735a3.352 3.352 0 0 1 4.089-.415 5.23 5.23 0 0 0 2.537 2.4 3.929 3.929 0 0 1-2.62.685 3.4 3.4 0 0 1-1.764-.57 10.618 10.618 0 0 0 2.336 1.532c-2.465-.38-4.178-2.97-4.354-3.245a3.143 3.143 0 0 0-.6 1.413c-.027.694.266 2.035-.162 2.1 0 0-1.493-1.774-.819-3.163"
//             data-name="Path 2515"
//           />
//           <path
//             fill="#fc9290"
//             d="M76.327 67.956s7.351-1.651 10.548.788l-1.6 20.607-14.377-3.213s.4-1.3 3.161-4.771 1.558-8.553 2.266-13.411"
//             data-name="Path 2516"
//           />
//           <path
//             fill="#030231"
//             d="m80.612 87.056-.023.2a1252.438 1252.438 0 0 0-.354 3.099c-.395 3.495-1.014 9.108-1.436 13.538a52.5 52.5 0 0 0-.426 6.646c.34 1.325 0 17.161 0 17.161a5.419 5.419 0 0 1-3.075 0s-3.255-14.271-2.8-16.254a6.358 6.358 0 0 0-.3-3.677c-2.527-10.886-2.25-16.92-1.749-19.808a11.444 11.444 0 0 1 .432-1.764 3.532 3.532 0 0 1 .173-.433 12.671 12.671 0 0 1 9.561 1.289"
//             data-name="Path 2517"
//           />
//           <path
//             fill="#0f53a1"
//             d="M87.867 74.62c-.355 2.479-1.775 5.513-2.282 7.146 0 0 .848 5.669.039 7.226a.712.712 0 0 1-.345.357c-3 1.208-14.673.035-15.166-3.448-.179-1.266 4.447-5.718 4.717-6.258a3.59 3.59 0 0 0-.311-2.449c-.769 2.193-5.012 1.562-5.012 1.562.5-.788 1.739-6.241 3.124-8.7 1.042-1.851 3.823-2.118 3.823-2.118a4.281 4.281 0 0 0 3.957 1.457c2.8-.241 3.311-1.826 3.311-1.826a10.369 10.369 0 0 1 3.248.876 11.041 11.041 0 0 1 .9 6.178"
//             data-name="Path 2518"
//           />
//           <path
//             fill="#3c98bd"
//             d="M85.583 81.769s.848 5.669.039 7.226c-2.184-1.014-5.031-3.2-4.165-6.623 1.258-4.969 6.408-7.748 6.408-7.748-.355 2.479-1.775 5.513-2.282 7.146"
//             data-name="Path 2519"
//           />
//           <path
//             fill="#0b0754"
//             d="m76.466 75.062 5.006 7.428h-8.518l-4.769-7.268Z"
//             data-name="Path 2520"
//           />
//           <path
//             fill="#dde8fd"
//             d="m81.216 82.117.086-.259-4.737-7.03-.095.234Z"
//             data-name="Path 2521"
//           />
//           <path
//             fill="#fff"
//             d="m76.562 74.828-8.024.211-.352.183 8.281-.161Z"
//             data-name="Path 2522"
//           />
//           <path
//             fill="#030231"
//             d="m68.185 75.222-4.5-2.254 5.247 7.621 4.024 1.9Z"
//             data-name="Path 2523"
//           />
//           <path
//             fill="#fc9290"
//             d="M92.005 80.43c-.482.2-1.72 1.552-2.161 1.689-1.986.615-10.439-1.021-10.439-1.021l.262-1.369s8.3.2 9.208-.022c.172-.043 1.068-1.34 1.413-1.526Z"
//             data-name="Path 2524"
//           />
//           <path
//             fill="#fc9290"
//             d="M79.668 79.726s-1-.753-1.677-.583a11.034 11.034 0 0 0-2.04 1.149c-.369.187-1.373.857-.864 1.262s2.092.057 2.719-.253a3.488 3.488 0 0 1 1.6-.2Z"
//             data-name="Path 2525"
//           />
//           <path
//             fill="#fc9290"
//             d="M78.182 79.119s-1.216-.134-1.548-.128-.242.073-.058.312.816.329.846.413.761-.6.761-.6"
//             data-name="Path 2526"
//           />
//           <path
//             fill="#0f53a1"
//             d="M83.719 67.569s3.606.4 4.6 1.826c1.255 1.808 4.218 9.01 4.122 10.825 0 0-2.166 3.41-9.593 2.864 0 0-.773-2.525.789-3.358a25.333 25.333 0 0 0 4.254-.985l-1.275-4.9Z"
//             data-name="Path 2527"
//           />
//           <path
//             fill="#fc9290"
//             d="M69.339 77.938c-.112-.42-1.1-.158-1.436.084a1.287 1.287 0 0 0-.254.276 4.497 4.497 0 0 1-.024-.19c-.019-.2-.267-.551-.329-.286s-.163 1.377-.163 1.377c-.012.9.611 1.265 1.011.974a4.275 4.275 0 0 0 1.2-2.235"
//             data-name="Path 2528"
//           />
//         </g>
//       </g>
//     </g>
//   </svg>
//          </div>
//        </div>
       
//         </div>
//       </div>
      
      
//         </div>
//      );
//   // }
// }
 
// export default  withNamespaces()(Downloading) ;
// >>>>>>> 5f09275ac9cef549fb77e7d5f1b9e746ab157533
