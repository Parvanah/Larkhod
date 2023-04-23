import React from "react";
import { Link, useLocation } from "react-router-dom";

const Lessons = () => {
  const location = useLocation();
  const locationData = location.state;
  const lessons = locationData.lessons;

  return (
    <div>
      {lessons.map((item) => {
        return <div>{item.label}</div>;
      })}
    </div>
  );
};

export default Lessons;
