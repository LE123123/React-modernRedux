import { createAction, handleActions } from 'redux-actions';

// 이렇게 리덕스를 작성하는 것을 Ducks스타일 이라고 부른다.
// 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서
// 다 작성하는 방식이다.

// 액션 타입 설정
// 이름 정하는 규칙은 '모듈 이름/액션 이름'과 같은 형태로 작성된다.
// 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게 해 준다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// export const increase = () => ({
//   type: INCREASE,
// });

// export const decrease = () => ({
//   type: DECREASE,
// });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// counter모듈의 초깃값과 리듀서 함수를 만들어 준다.
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// handleAction의 첫번쨰 파라미터에는 각 액션에 대한 업데이트 함수를 넣어주고,
// 두 번째 파라미터에는 초기 상태를 넣어 준다. -> 가독성이 높아진다
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
