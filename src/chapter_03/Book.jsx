import React  from "react";

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책의 이름은 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  )
}

export default Book;

// 간단하게 구성된 Book 컴포넌트이다. 
// 이번에는 해당 컴포넌트를 사용할 Library.jsx로 이동하자. 