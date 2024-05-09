/* eslint-disable*/ // 터니멀에 뜨는 waring 보기 싫으면 설정
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '부산 우동 맛집', '여행지 추천']); 
  // [a,b] a에는 '남자 코트 추천'이 들어가고
  // b에는 a를 수정할 함수가 들어감
  // 웹앱을 만드려면 데이터는 state에 저장을 해두어야 함
  // state에 데이터 저장해놓는 이유:
  // state는 변경되면 html이 자동으로 재렌더링이 됩니다.
  // 자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해서 쓰세요
  let makeStyle = {color: 'blue', fontSize: '30px'};
  let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; // deep copy
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  function 정렬(){
    let sortArray = [...글제목];
    sortArray.sort();
    글제목변경(sortArray);
  }

  return (
    <div className="App">
        <div className="black-nav">
          <div style={makeStyle}>개발 Blog</div>
        </div>
        <span onClick={제목바꾸기}>제목 바꾸기 버튼</span>
        <span onClick={정렬}>정렬 버튼</span>
        <div className='list'>
          <h3>{글제목[0]} <span onClick={()=>{좋아요변경(좋아요+1)}}>♥</span>{좋아요}</h3>
          <p>5월 6일 발행</p>
          <hr></hr>
        </div>
        <div className='list'>
          <h3>{글제목[1]}</h3>
          <p>5월 7일 발행</p>
          <hr></hr>
        </div>
        <div className='list'>
          <h3>{글제목[2]}</h3>
          <p>5월 8일 발행</p>
          <hr></hr>
        </div>
        <Modal></Modal>
    </div>
  );
}

function Modal(){ //Component는 대문자로 시작해야함
  // return() 내부를 묶을 때 의미없는 <div>쓰기 싫으면 <></> 쓰기
  // return() 안에 있는건 태그하나로 묶어야함 
  // Component를 만들어두면 관리가 편해짐
  // 어떤걸 Component로 만드는게 좋을까
  // -반복출현하는 HTML 덩어리들
  // -자주 변경되는 HTML UI들
  return (
        <div className='modal'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}

export default App;
