import React from 'react';
import './i18n';
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from './App/context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import Home from "./App/components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <GoogleOAuthProvider clientId="636420957829-hdhig5j161g74rclqtcmp99enq1pmma2.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </AuthProvider>
);
reportWebVitals();
