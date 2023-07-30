import React from 'react'
import "./Continue.css";
import { AuthContext } from "../App/context/AuthContext";
import {useContext } from 'react';
import { useNavigation } from 'react-router-dom';



const Continue = () => {
  const navigation = useNavigation();
  const {currentState,
    setCurrentState , currentBook,
    setCurrentBook} = useContext(AuthContext);
    console.log(currentBook);

   
      return (
        <div>
        {}
        </div>
      )
    
};

export default Continue;