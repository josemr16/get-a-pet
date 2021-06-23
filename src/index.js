import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
// import SignUpForm from './components/SignUpForm';
// import SignInForm from './components/SignInForm';
// import Navbar from './components/NavBar';
// import EditPost from './components/EditPost';
// import MakePost from './components/MakePost';
// import PostCard from './components/PostCard';
// import PostCardList from './components/PostCardList';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App/>
{/*    <Navbar />
    <MakePost />
    <EditPost />
    <SignInForm />
    <PostCardList posts={posts} user = {user}/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
