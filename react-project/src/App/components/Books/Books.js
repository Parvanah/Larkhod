import React from "react";
import { Link, useLocation } from "react-router-dom";

const Books = () => {
  const location = useLocation();
  const locationData = location.state;
  const subjects = locationData.subjects;

  return (
    <div>
      {subjects.map((item) => {
        return (
          <Link to="/unit" state={{ units: item.parts }}>
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Books;
