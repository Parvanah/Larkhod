import React from "react";
import { Link, useLocation } from "react-router-dom";

const Units = () => {
  // getting props that passed from Books to Unit
  const location = useLocation();
  const locationData = location.state;
  const units = locationData.units;

  return (
    <div>
      {units.map((item) => {
        if (item.lessons == undefined) {
          //with out units
          //now its div but we can put it to link to go to pages of that lessons

          return <div>{item.label}</div>;
        } else {
          return (
            //with units
            <Link to="/lessons" state={{ lessons: item.lessons }}>
              <h3>{item.label}</h3>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Units;
