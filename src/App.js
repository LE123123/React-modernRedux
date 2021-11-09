import React from 'react';

import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;

// 프레젠테이션 컴포넌트
// 상태 관리가 이루어지지 않고, 그저 props를 받아와서 화면에
// UI를 보여 주기만 하는 컴포넌트를 말한다.

// 컨테이너 컴포넌트
// 리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고
// 리덕스 스토어에 액션을 디스패치하기도 한다.
