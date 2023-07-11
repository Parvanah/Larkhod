import React from "react";
import './downloading.css';
import { Link, useLocation } from "react-router-dom";
import img9 from './assets/books.png';
import { useNavigate } from "react-router-dom";
// import * as React from "react";
import bookicon from "./assets/Group_360.png";
import backgroundImage from "./assets/book-blue.jpg";
const  Downloading = (props) => {
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;


    return ( 
        <div className="download-b"> 
        <div className="books-svg">  
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={22}
              data-name="Group 411"
              {...props}
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
            </svg></div>
            <div className="book-right">
                 <svg
                xmlns="http://www.w3.org/2000/svg"
                width={77.557}
                height={70.977}
                {...props}
              >
                <path
                  fill="#707070"
                  d="M7.374 67.094a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.394 0a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.394 0a3.692 3.692 0 1 0-7.374 0 3.692 3.692 0 1 0 7.374 0Zm23.395 0a3.788 3.788 0 0 0-3.687-3.883 3.789 3.789 0 0 0-3.687 3.883 3.789 3.789 0 0 0 3.687 3.883 3.789 3.789 0 0 0 3.687-3.883ZM7.374 46.024a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.688-3.883Zm23.395 0a3.788 3.788 0 0 0-3.687-3.883 3.888 3.888 0 0 0 0 7.765 3.788 3.788 0 0 0 3.687-3.882ZM7.374 24.954a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.687-3.884Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.687-3.884Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.789 3.789 0 0 0 3.688-3.884Zm23.395-.001a3.789 3.789 0 0 0-3.687-3.883 3.888 3.888 0 0 0 0 7.766 3.789 3.789 0 0 0 3.687-3.883ZM7.374 3.883a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.687-3.883Zm23.394 0a3.692 3.692 0 1 0-3.687 3.883 3.788 3.788 0 0 0 3.688-3.883Zm23.395 0A3.788 3.788 0 0 0 73.87 0a3.888 3.888 0 0 0 0 7.766 3.789 3.789 0 0 0 3.687-3.883Z"
                />
              </svg></div>
        <div className="ufff">
        {subjects.map((item) => {
            if (item.parts[0].lessons == undefined) {
              return (
                <Link
                  state={{ lessons: item.parts, title: " مضمون " + item.label }}
                  id="link"
                >
                  {/* <img src={bookicon} /> */}
                  <div className="uff">
                    <div> دانلود </div>
                    <p id="h5"> کتاب {item.label}</p>
                  </div>
                </Link>
              );
            } else {
              return (
                <Link  state={{ units: item.parts }} id="link">
                  {/* <img src={bookicon} /> */}
                  <div className="uff">
                  <div className="d-book"> دانلود </div>
                    <p id="h5"> کتاب {item.label}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      
        </div>
     );
}
 
export default Downloading;