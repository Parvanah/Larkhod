import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import config, { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  // const [user, setUser] = useState(userInfo.user);
  axios.defaults.baseURL = "http://192.168.43.81:8000/api/v1";
  axios.defaults.timeout = 3000;
  axios.defaults.headers.common["Authorization"] = "token";

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
  const changeInfo = async (name) => {
    try {
      setIsLoading(true);

      console.log(userInfo);
      const response = await axios.put(`/user/${userInfo.user._id}`, {
        name,
        email: userInfo.user.email,
      });
      console.log("put");
      console.log(response.data);

      AsyncStorage.setItem(
        "userInfo",
        JSON.stringify({ ...userInfo, user: response.data })
      );
      setUserInfo({ ...userInfo, user: response.data });
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setIsLoading(false);
    }
  };

  const information = async (name, lastName, age, grade, phoneNumber) => {
    try {
      setIsLoading(true);
      console.log(name);
      const response = await axios.post(`/auth/register`, {
        name: name,
        email: email,
        password: password,
        phone: phoneNumber,
      });
      console.log(response.data);
      setUserInfo(response.data);
      AsyncStorage.setItem("userInfo", JSON.stringify(response.data));

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
      // AsyncStorage.removeItem("userInfo");
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
    // Loggout();
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
