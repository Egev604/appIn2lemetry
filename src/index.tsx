import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./Components/Main/Main";
import Info from "./Components/Main/Info";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main/>,
//         errorElement:<div>404 Nor Found</div>
//     },
//     {
//         path: "/main",
//         element: <Main/>,
//         errorElement:<div>404 Nor Found</div>
//     },
//     {
//         path: "/info",
//         element: <Info/>,
//         errorElement:<div>404 Nor Found</div>
//     },
// ]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <App></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
