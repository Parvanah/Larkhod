import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {BASE_URL} from '../config';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {  
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);


    const register = async(email, password, confirmPassword) => {
      try{
        setIsLoading(true);
        const response = await 
        axios.post(`${BASE_URL}/register`, {
        data:
        email,
        password,
        confirmPassword});
        console.log(response.data);
      }catch(error){
        console.log(error);
        setIsLoading(false);
      }
    };
    
    const login = async(email, password) => {
      try{
        setIsLoading(true);
        const response = await 
        axios.post(`${BASE_URL}/login`, {
        data:
        email,
        password,
       });
        console.log(response.data);
      }catch(error){
        console.log(error);
        setIsLoading(false);
      }
    };

    // const changeInfo = (firstName, lastName, age) =>{
    //   setIsLoading(true);
    //   axios.post(`${BASE_URL}/changeInfo` ,{
    //     firstName,
    //     lastName,
    //     age
    //   }).then(res =>{
    //     let userInfo = res.data;
    //     console.log(userInfo);
    //     setUserInfo(userInfo);
    //     AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    //     setIsLoading(false);
        
    //   }).catch(e => {
    //     console.log(`changeInfo error ${e}`);
    //     setIsLoading(false);
    //   });
    // }
    const changeInfo = async(firstName, lastName, age, grade) => {
      try{
        setIsLoading(true);
        const response = await 
        axios.post(`${BASE_URL}/changeInfo`, {
        firstName:
        lastName,
        age,
        grade
        });
        console.log(response.data);
      }catch(error){
        console.log(error);
        setIsLoading(false);
      }
    };

    const information = async(firstName, lastName, email, age, grade) => {
      try{
        setIsLoading(true);
        const response = await 
        axios.post(`${BASE_URL}/information`, {
        data:
        firstName,
        lastName,
        email,
        age,
        grade
       });
        console.log(response.data);
      }catch(error){
        console.log(error);
        setIsLoading(false);
      }
    };

    const isLoggedIn = async() =>{
     try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo); 

      if (userInfo){
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
     }catch(e){
      setSplashLoading(false);
      console.log(`isLogged in error ${e}`)
     }
    };
    useEffect(()=>{
     isLoggedIn();
    }, [])
    return (
        <AuthContext.Provider
          value={{
            isLoading,
            userInfo,
            splashLoading,
            register,
            login,
            changeInfo,
            information,
            isLoggedIn
          }}>
          {children}
        </AuthContext.Provider>
      );
    };
    
