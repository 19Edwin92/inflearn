import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock';
// import Commentlist from './chapter_05/Commentlist';
import NotificationList from './chapter_06 state/Notifocationlist';

//chapert06 state 사용하기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> 
    <NotificationList />
  // </React.StrictMode>

  // React.StrictMode => 리액트버전 18에서는 Strict Mode의 작동방식 때문에, 발생되는 오류로 2개씩 보여질 것인데, 
  // 실제 배포했을 때는 발생되지 않으며, 개발 중(Strict Mode)일 때만 발생되는 오류인데, 이를 각추처리해 주면 문제가 없이 잘 작동될 것이다. 
  //https://www.inflearn.com/questions/619705/notificationlist-jsx-챕터-6장-실습-내용-질문-동시에-2개씩-나옴
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
