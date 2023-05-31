import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import config, { BASE_URL } from "../config";

export const AuthContext = createContext();
axios.defaults.baseURL = "http://172.20.10.4:8000/api/v1";
axios.defaults.timeout = 3000;

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  // const [name, setName] = useState(null);
  const Authorization = async (status, token, errorMessage) => {
    try {
      const res = await axios
        .get(`/auth/user`, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          console.log("get");
          let userInformation = res.data;
          AsyncStorage.setItem("userInfo", JSON.stringify(userInformation));
          setUserInfo(userInformation);

          setIsLoading(false);
        });
    } catch (e) {
      setIsLoading(true);
      setUserInfo(null);
      console.log("getError");
      console.log(e);
      setIsLoading(false);
    }
  };

  const register = (emailOutside, passwordOutside) => {
    setIsLoading(true);
    setEmail(emailOutside);
    setPassword(passwordOutside);
    console.log(email);
    console.log(password);
    setIsLoading(false);
    // try {
    //   setIsLoading(true);
    //   email = emailOutside;
    //   password = passwordOutside;
    // } catch (error) {
    //   // console.log(email);
    //   console.log(error);
    //   // console.log(error.response.data);
    //   setIsLoading(false);
    // }
  };

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/auth/login`, {
        email,
        password,
      });
      // console.log(response.status);
      // let userInformation = response.data;
      // // setUserInfo(userInfo);
      // // AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      // setIsLoading(false);
      // var accsess_token = userInformation.token;
      const statusCode = response.status;
      console.log(userInfo);
      console.log("done");
      Authorization(statusCode, response.data.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setUserInfo(null);
      console.log(error.response.status);
      setStatusCode(error.response.status);

      setIsLoading(false);
    }
  };
  const forgotPassword = async (email) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/auth/forgotPassword`, {
        email
      });
      const statusCode = response.status;
      console.log(userInfo);
      console.log("done");
      Authorization(statusCode, response.data.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setUserInfo(null);
      console.log(error.response.status);
      setStatusCode(error.response.status);

      setIsLoading(false);
    }
  };
  const changePassword = async (password, confirmPassword) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/auth/changePassword`, {
        password, 
        confirmPassword
      });
      const statusCode = response.status;
      console.log(userInfo);
      console.log("done");
      Authorization(statusCode, response.data.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setUserInfo(null);
      console.log(error.response.status);
      setStatusCode(error.response.status);

      setIsLoading(false);
    }
  };

  // const changeInfo = (firstName, lastName, age) =>{
  //   setIsLoading(true);
  //   axios.post(`/changeInfo` ,{
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
  const changeInfo = async (firstName, lastName, age, grade) => {
    try {
      setIsLoading(true);
      const response = await fetch(BASE_URL);
      axios.post(`/changeInfo`, {
        firstName,
        lastName,
        age,
        grade,
      });
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const information = async (name, lastName, age, grade) => {
    try {
      setIsLoading(true);
      console.log(name);
      const response = await axios.post(`/auth/register`, {
        name: name,
        email: email,
        password: password,
      });
      console.log(response.data);
      setUserInfo(response.data);
      AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));

      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`isLogged in error ${e}`);
    }
  };
  const Loggout = () => {
    try {
      setIsLoading(true);
      AsyncStorage.removeItem("userInfo");
      setUserInfo(null);
      setIsLoading(false);
    } catch (e) {
      console.log(`loggout error${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
    
  }, []);
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
        isLoggedIn,
        Authorization,
        Loggout,
        password,
        email,
        forgotPassword,
        changePassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
