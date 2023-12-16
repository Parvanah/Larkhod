import * as React from "react";
import { withNamespaces } from "react-i18next";
import "./readingBook.css";
const ReadingBook = ({ t }) => {
  return (
    <div className="readingBookk">
      ‌<div className="topOfbook">Books For reading</div>‌
      {/* <div className="bottomOfBook">gggg</div> */}
    </div>
  );
};
export default withNamespaces()(ReadingBook);
