import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';


const thingsToDo = [
  {
    name: "Finish Assignment",
    id: 123,
    completed: false
  },
  {
    name: "Clean room",
    id: 124,
    completed: false
  },
  {
    name: "Go grocery shopping",
    id: 1235,
    completed: false
  },
  {
    name: "Read book",
    id: 1246,
    completed: false
  },
  {
    name: "Make dinner",
    id: 1237,
    completed: false
  },
  {
    name: "Clean bathroom",
    id: 1248,
    completed: false
  }
];

class App extends React.Component {

  
  constructor() {
    super();
    // initialize state object
    this.state = {
      thingsToDo: thingsToDo,
      anotherStateProperty: "hello web31!",
      item: "",
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      item: e.target.value
    });
  };
  // class state vs function state
  // class state is _always_ an object with class properties
  // function state - each state property is it's own variable
  //   ie - const [groceries, setGroceries] = useState(groceries);

  // Class methods to update state
  // pass addItem to ListForm as a prop

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      thingsToDo: [...this.state.thingsToDo, newItem]
    });
  };
  toggleItem = itemId => {
    // loop through all groceries, find the one on which we clicked,
    // toggle the purchased field for that item
    // else, leave the item untouched
    this.setState({
      thingsToDo: this.state.thingsToDo.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  
   clearCompleted= () => {
  
    this.setState({
      thingsToDo: this.state.thingsToDo.filter(item => {
        if (item.completed) {
          return false;
        } else {
          return true;
        }
      })
    });
  };


  render() {
    // const { groceries, anotherStateProperty } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList thingsToDo={this.state.thingsToDo} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
