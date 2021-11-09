import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 스토어의 단일성을 충족시켜 주기 위해서 다양한 리덕스 들을
// 하나로 통합시켜 준다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
