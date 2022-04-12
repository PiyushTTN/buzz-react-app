import React from "react";
import App from "./App";
import  ReactDOM  from "react-dom/client";
import { AuthProvider } from './components/context/AuthContext';

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render (
  <AuthProvider>
    <App />
  </AuthProvider>
);






// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />

//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
