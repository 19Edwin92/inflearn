import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
      {/* - toLocaleDateString() : 2023년 02월 22일 수요일
          - toLocaleTimeString() : 오전 1:28:35
          - toLocaleString() : 2023년 02월 22일 수요일 오전 1:28:35 
          - {중괄호}를 입력하면 HTML구문 내에서 위처럼 "자바스크립트 문법"으로 기록할 수 있다. 
      */}
    </div>
  )
};

export default Clock;