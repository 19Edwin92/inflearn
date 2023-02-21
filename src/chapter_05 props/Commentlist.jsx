import React from "react";
import Comment from "./Comment"; 

const comments = [
  {
    name : "Adwin",
    comment : "우와 이게 props구나 신기하네"
  },
  {
    name : "Bdwin",
    comment : "그래도 내가 리액트로 무언가를 하고 있긴 하구나"
  },
  {
    name : "Cdwin",
    comment : "당분간은 정리 없다. 실습만 하자."
  },
]

function Commentlist(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        )
      })}
    </div>
  )
}
export default Commentlist;