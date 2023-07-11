// import React, { Suspense } from 'react';
import React from 'react';
import './i18n';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './App/context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider> 
  {/* <Suspense fallback={(<div>Loading...</div>)}> */}
  <GoogleOAuthProvider clientId="286821865292-sel956ul462umja0aubg0c2dgt9v4t0k.apps.googleusercontent.com">
  <App />
    </GoogleOAuthProvider>;

{/* </Suspense> */}
</AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
