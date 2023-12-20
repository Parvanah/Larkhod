import * as React from "react";
import { withNamespaces } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./readingBook.css";
import reading from "./App/assets/reading.png";
import backr from "./App/assets/backr.png";
const ReadingBook = ({ t }) => {
  return (
    <div className="readingBookk">
    <div className="topOfbook">
      <div className="backslashR">
      <Link to="/home">
      <img src={backr} className="backslashR"/>
          </Link>
       
      </div>
     <div className="bottomOfBook">
     ‌<div className="r_text">
        <p>{t( "rtext")}</p>
        </div>
      <div className="readingBooks">
      <img src={reading}  />
        </div>
     </div>
        </div>‌
      {/* <div className="bottomOfBook">gggg</div> */}
    </div>
  );
};
export default withNamespaces()(ReadingBook);
