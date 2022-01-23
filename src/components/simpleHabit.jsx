import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  // setCount = count를 업데이트할수 있는 함수
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  // state = {
  //   count: 0,
  // };

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & update : ${count}`);
  }, []);

  // [] 비어있으면 처음에만 호출됨 mount
  // [원하는데이터] : 원하는 데이터가 변경 되었을때만 실행

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
