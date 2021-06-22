import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Navbar from './components/NavBar';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const person = {adminIsSignedIn:true}

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <SignInForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
