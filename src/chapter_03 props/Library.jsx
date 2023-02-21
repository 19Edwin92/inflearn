import React from "react";
import Book from "./Book";
// 01 Book컴포넌트를 연결받아서 Library컴포넌트에 연결해서 사용하고,
// 02 최종적으로 export default Library;를 통해서
// 03 index.js로 연결되어서 최종적으로 화면에 출력되게 될 것이다. 

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
      {/* Book 태그는 Book컴포넌트를 통해서 만들어진 태그이다. */}
      {/* 이때 생성자함수를 호출?해서 Library컴포넌트를 통해서 작성할 때,
          argument를 Book컴포넌트로 전달하고, 최종적인 결과를 웹페이지에 출력한다.
          이때 숫자를 전달한다면 {중괄호} 안에서, 문자를 전달한다면 "따옴표" 안에서 전달한다.*/}
    </div>
  )
}

export default Library;
