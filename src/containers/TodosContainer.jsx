import React from 'react';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { connect } from 'react-redux';

const TodosContainer = ({
  changeInput,
  insert,
  toggle,
  remove,
  input,
  todos,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // 상태
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    // 액션 생성 함수들
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
