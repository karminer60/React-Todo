// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Item from './Todo.js';

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.thingsToDo.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;