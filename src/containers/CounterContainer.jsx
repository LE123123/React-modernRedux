import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// // state값은 현재 스토어가 지니고 있는 상태를 가리킵니다.
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// // store의 내장 함수 dispatch를 파라미터로 받아 옵니다.
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  //   (dispatch) => ({
  //     increase: () => dispatch(increase()),
  //     decrease: () => dispatch(decrease()),
  //   }),
  //   (dispatch) =>
  //     bindActionCreators(
  //       {
  //         increase,
  //         decrease,
  //       },
  //       dispatch,
  //     ),
  {
    increase,
    decrease,
  },
)(CounterContainer);

// 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect
// 함수를 사용해야 한다.

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)

// mapStateToProps는 리덕스 스토어 안의 상태를 컴포넌트의 props안으로 전달하기 위해
// 필요한 것이다.

// mapDispatchToProps는 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는
// 함수이다.
