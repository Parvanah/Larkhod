import { BASE_URL } from "../config";
import { AsyncStorage } from "react";
import axios from "axios";
import React, {
  setStatusCode,
  Authorization,
  createContext,
  useEffect,
  useState,
} from "react";
axios.defaults.baseURL = "http://192.168.208.250:8000/api/v1";
axios.defaults.timeout = 3000;

// import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  // const [name, setName] = useState(null);
  const [currentBook, setCurrentBook] = useState();
  const [currentState, setCurrentState] = useState();
  const [currentLesson, setCurrentLesson] = useState();
  const [currentpart, setCurrentpart] = useState();
  const [backendError, setBackendError] = useState("not connected");
  const [currentPath, setCurrentPath] = useState();
  const Authorization = async (status, token, errorMessage) => {
    try {
      const res = await axios
        .get(`/auth/user`, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          console.log("get");
          let userInformation = res.data;
          localStorage.setItem("userInfo", JSON.stringify(userInformation));
          setUserInfo(userInformation);
          setCurrentPath("/header");
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
  const register = async (name, email, password) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        password,
        name,
      });
      console.log(response.data);
      setIsLoading(false);
      setCurrentPath("/home");
    } catch (error) {
      console.log(email);
      console.log(password);
      console.log(error.response.data);
      setIsLoading(false);
    }
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
      // // localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // setIsLoading(false);
      // var accsess_token = userInformation.token;
      const statusCode = response?.status;
      console.log(userInfo);
      console.log("done");
      setBackendError("");
      Authorization(statusCode, response?.data?.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      setBackendError(error.response.data.message);
      setUserInfo(null);
      console.log(error?.response?.status);
      setStatusCode(error?.response?.status);

      setIsLoading(false);
    }
  };
  const forgotPassword = async (email) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/auth/forgotPassword`, {
        email,
      });
      const statusCode = response?.status;
      console.log(userInfo);
      console.log("done");
      Authorization(statusCode, response?.data.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      setUserInfo(null);
      console.log(error?.response?.status);
      setStatusCode(error?.response?.status);

      setIsLoading(false);
    }
  };
  const changePassword = async (password, confirmPassword) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/auth/changePassword`, {
        password,
        confirmPassword,
      });
      const statusCode = response?.status;
      console.log(userInfo);
      console.log("done");
      Authorization(statusCode, response.data.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      setUserInfo(null);
      console.log(error?.response?.status);
      setStatusCode(error?.response?.status);

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
  //     localStorage.setItem('userInfo', JSON.stringify(userInfo));
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

      localStorage.setItem(
        "userInfo",
        JSON.stringify({ ...userInfo, user: response?.data })
      );
      setUserInfo({ ...userInfo, user: response?.data });
      setIsLoading(false);
    } catch (error) {
      console.log(error.response?.data);
      setIsLoading(false);
    }
  };

  // const information = async (name, lastName, age, grade) => {
  //   try {
  //     setIsLoading(true);
  //     console.log(name);
  //     const response = await axios.post(`/auth/register`, {
  //       name: name,
  //       email: email,
  //       password: password,
  //     });
  //     console.log(response?.data);
  //     setUserInfo(response?.data);
  //     localStorage.setItem("userInfo", JSON.stringify(userInfo));

  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error?.response?.data);
  //     setIsLoading(false);
  //   }
  // };
  // const verifyEmail = async (cellCount) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post(`/auth/verifyEmail`, {
  //       cellCount
  //     });
  //     const statusCode = response.status;
  //     console.log(userInfo);
  //     console.log("done");
  //     Authorization(statusCode, response.data.token, "Successfully");
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error?.response?.data);
  //     setUserInfo(null);
  //     console.log(error.response.status);
  //     setStatusCode(error.response.status);

  //     setIsLoading(false);
  //   }
  // };
  const verifyEmail = async (email) => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/auth/verifyEmail`, {
        email,
      });
      const statusCode = response.status;
      console.log(userInfo);
      console.log("done");
      Authorization(statusCode, response.data.token, "Successfully");
      setIsLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      setUserInfo(null);
      console.log(error?.response?.status);
      setStatusCode(error?.response?.status);

      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfo = await localStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      // window.location.pathname = "/header";

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
      localStorage.removeItem("userInfo");
      window.location.pathname = "/";
      setUserInfo(null);
      setIsLoading(false);
    } catch (e) {
      console.log(`loggout error${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
    setCurrentPath(window.location.pathname);
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
        // information,
        isLoggedIn,
        Authorization,
        Loggout,
        password,
        email,
        forgotPassword,
        changePassword,
        verifyEmail,
        currentState,
        setCurrentState,
        currentBook,
        setCurrentBook,
        currentLesson,
        setCurrentLesson,
        currentpart,
        setCurrentpart,
        backendError,
        setBackendError,
        currentPath,
        setCurrentPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
