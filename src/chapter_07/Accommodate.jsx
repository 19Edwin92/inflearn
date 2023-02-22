import React, { useState, useEffect } from "react";
import useCounter from "./useCount";

const MAX_CAPACITY = 10; //최대수용수 

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // useEffect를 확인하기 위해 두개를 기록하였다. 
  useEffect(() => {   // 의존성 배열이 없는 경우이기에, 컴포넌트가 마운드 된 직후, 업데이트될 때마다
    console.log("====================");
    console.log("useEffect() is called");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY); // 카운트값이 바뀔 때마다 호출된다. 
    console.log(`Current count value : ${count}`);
  }, [count])

  return (
    <div style={{ padding:16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color : "red"}}> 정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;