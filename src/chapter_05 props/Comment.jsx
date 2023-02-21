import React from "react";

const style = {
  wrapper : {
    margin : 8,
    padding : 8,
    display : "flex",
    flexDirection : "row",
    border: "1px solid grey",
    borderRadius: 16,
  },

  imageContainer : {}, 
  image : {
    width:50,
    heigth:50,
    borderRadius:25,
  },

  contentContainer: {
    marginLeft:8,
    display: "flex",
    flexDirection : "column",
    justifyContent:"center",
  },

  nameText: {
    color:"black",
    fontSize: 16,
    fontWeigth: "bold",
  },

  commentText: {
    color: "black",
    fontSize: 16,
  },
};

// 내용을 보면, style에서 기록된 내용으로 기록한 property를 가져와서, style 속성에 내용을 전달할 수도 있고,
// 외부 파일을 만들어서 연결시켜 주는 방법도 있다. 
// App.js에서 볼 수 있듯 "import './App.css';"을 연결하면, className= 에 입력해주면 된다. 

function Comment(props) {
  return (
    <div style={style.wrapper}>
       <div style={style.imageContainer}>
       <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={style.image} />
       </div>

      <div style={style.contentContainer}>
      <span style={style.nameText}>{props.name}</span>
      <span style={style.commentText}>{props.comment}</span>
      {/* 
          innerText에 props를 통해서 Component를 가져다 사용하는 곳에서 가져와서 사용한다. 
          function Commentlist에 연결된 속성에 입력된 객체의 내용을 통해서 해당 component로 전달된다. 
      */}
    </div>
    </div>


  )
}

export default Comment;