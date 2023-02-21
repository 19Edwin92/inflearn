import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import Commentlist from './chapter_05/Commentlist';
import NotificationList from './chapter_06/Notifocationlist';

//chapert06 state 사용하기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 리액트 18에서 2개씩 발생되는 이슈 때문에 
    <NotificationList />
  // </React.StrictMode>
);

//chapter05 댓글 만들기
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Commentlist />
//   </React.StrictMode>
// );

//chapter04 - clock
// setInterval(()=> {}, 1000) 1초마다 화면이 새롭게 덧씌어지도록 했다. 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// })

//chapter03
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
