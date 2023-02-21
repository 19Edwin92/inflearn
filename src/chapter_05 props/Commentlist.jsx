import React from "react";
import Comment from "./Comment"; 
// Comment component를 가져와서 사용할 것인데, 이때, 이번에는 특별한 태그를 가져오는 것이 아니라,
// 기록된 <div>를 가져와서 사용할 것이다. 
// - img 태그를 기록하거고
// - span 태그 2개를 담은, div를 가져올 것이다. 
// - Comment component에서 작동하는 내용은 이것이 전부이다.


const comments = [
  { name : "Adwin",
    comment : "우와 이게 props구나 신기하네"},
  { name : "Bdwin",
    comment : "그래도 내가 리액트로 무언가를 하고 있긴 하구나"},
  { name : "Cdwin",
    comment : "당분간은 정리 없다. 실습만 하자."},
]

function Commentlist(props) {
  return (
    <div>
      {/* 여기서부터 comments 객체를 map으로 사용하고 */}
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
          // comment객체(key)에서 가져온 값을 전달해 주는데, 보면 Map()메서드를 통해서 전달해준다. 
        )
      })}
      {/* 여기까지 comments 객체를 map으로 사용하고 */}
    </div>
  )
}
export default Commentlist;