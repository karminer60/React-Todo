// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Item from './Item';

const GroceryList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;