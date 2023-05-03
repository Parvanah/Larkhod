import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Books.css";
const Books = (props) => {
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;
  const navigate = useNavigate();
  const leftScroll = () => {
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const righScrool = () => {
    const slider = document.getElementById("ul");
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  return (
    <div className="Books">
      <div className="top">
       <div className="first-svgs">
         <div className="arrowSvg" onClick={()=>navigate('/')}>  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={22}
    data-name="Group 411"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path fill="#707070" d="M0 0h36v22H0z" data-name="Rectangle 85" />
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
        <div> <div className="left-svg"><svg
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
  </div>
  </div>
          <div className="first-section"> <h1>کتاب های موجود دراین صنف</h1>
           <p>از اینجا شما میتوانید کتاب های مورد نیاز خود راانتخاب نمایید</p></div>
           <div className="third-section">
           <svg
    xmlns="http://www.w3.org/2000/svg"
    width={74.741}
    height={73.209}
    {...props}
  >
    <g fill="none">
      <path d="m0 21.671 57.391 51.538L74.74 0Z" />
      <path
        fill="#edc315"
        d="M61.055 14.38 20.078 26.26l31.465 28.256 9.512-40.138M74.74 0 57.39 73.21 0 21.671 74.74 0Z"
      />
    </g>
  </svg> </div>
 
      </div>
     <div className="middlebook">
    <div onClick={()=>leftScroll()} className="arrrow">  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16.435}
    height={30.158}
    {...props}
  >
    <path
      fill="#707070"
      d="M16.435 0 0 15.079l16.435 15.079v-8.293l-7.384-6.786 7.384-6.755Z"
      data-name="Path 968"
    />
  </svg></div>
     <div className="middle" id="ul">
     {subjects.map((item) => {
        return (
          <Link to="/unit" state={{ units: item.parts }}>
            <img src={bookicon}/>
           <div>
           <p>کتاب</p>
            <h5>{item.label}</h5>
           </div>
          </Link>
        );
      })}
     </div>
     <div onClick={()=>righScrool()}><svg
    xmlns="http://www.w3.org/2000/svg"
    width={16.435}
    height={30.158}
    {...props}
  >
    <path
      fill="#707070"
      d="m0 0 16.435 15.079L0 30.158v-8.29l7.384-6.786L0 8.327Z"
      data-name="Path 967"
    />
  </svg></div>
     </div>
      <div className="bottom">
      <div className="bottom-section"> <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85.325}
    height={84.161}
    {...props}
  >
    <g fill="none">
      <path d="m27.877 84.161 57.448-67.312L-.003 0Z" />
      <path
        fill="#edc315"
        d="M31.79 64.172 66.63 23.35 14.885 13.133 31.79 64.172M27.877 84.16 0 0l85.325 16.848-57.448 67.312Z"
      />
    </g>
  </svg></div>
       <div className="p-section"> <p>این کتاب ها به فصل های جداگانه تقسیم شده است</p></div>
      
       <div className="last-svg"><svg
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
      </div>

    </div>
  );
};

export default Books;
