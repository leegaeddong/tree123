import { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="HeadStyle">
        <div>to do list</div>
        <div>react</div>
      </div>
      <Second />
    </div>
  );
};

const Second = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([
    { id: 1, title: "이건 첫번째입니다 ", content: " 첫번째" },
    { id: 2, title: "두번째입니다 ", content: "두번째 " },
  ]);
  const onDataAdd = () => {
    let newData = {
      id: data.length + 1,
      title: title,
      content: content,
    };
    setData([...data, newData]);
    console.log(data);
  };

  return (
    <>
      <div className="SecondStyle">
        <div className="SecondStyle_1"></div>
        <span className="SecondStyle-label"> 제목 </span>
        <input
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          name="title"
        ></input>
        <span className="SecondStyle-label"> 내용</span>
        <input
          onChange={(event) => setContent(event.target.value)}
          type="text"
          name="content"
        ></input>
        <button onClick={onDataAdd} className="add-button">
          추가하기
        </button>
      </div>
      <div>
        <h2> working..</h2>
        <div className="todo-box">
          <h2 className="todo-title"> 리액트를 공부하기</h2>
          <div>리액트 기초를 공부해봅시다.</div>
          <div className="buttonAll">
            <button className="delete-button">삭제하기 </button>
            <button className="end-button">완료</button>
          </div>
        </div>
        <div>
          <h2> done..</h2>
          <div className="todo-box">
            <h2 className="todo-title"> 리액트를 공부하기</h2>
            <div>리액트 기초를 공부해봅시다.</div>
            <div className="buttonAll">
              <button className="delete-button">삭제하기 </button>
              <button className="end-button">완료</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
