import { useNavigate } from "react-router-dom";
import React from 'react'
import "./Continue.css";
import { AuthContext } from "../App/context/AuthContext";
import {useContext } from 'react';
import { useNavigation } from 'react-router-dom';



const Continue = () => {
  const { userInfo, isLoading } = useContext(AuthContext);
  const navigation = useNavigation();
  const {currentState,
    setCurrentState , currentBook,
    setCurrentBook} = useContext(AuthContext);
    console.log(currentBook);
                 // const navigation = useNavigate();
//   if (userInfo === null) {
//     return navigation("/");
//   } else if (isLoading) {
//     return <h1>Loading.....</h1>;
//   } else if(userInfo !== null){
  return (
    <div>
    {}
    </div>
  )
// }
};

export default Continue;