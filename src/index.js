import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home,Aboutus,Contactus,Events,Courses,Course,NotFound} from './pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path="/" element={<App/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/contactus" element={<Contactus/>}></Route>
        <Route path="/courses" element={<Courses/>}>
           <Route path="course/:id" element={<Course/>}></Route>
        </Route>
        <Route path="/course/:id" element={<Course/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
