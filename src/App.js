import React, { Component } from 'react';
import './App.css';
import './styles/common.css'
import Task from './components/Task/Task';
import { KEYS } from './constants'

class App extends Component {
  state = {
    Tasks: [
      { key: 0, name: 'First Task' },
      { key: 1, name: 'Second Task' }
    ]
  }

  editTask(object, key, name) {
    const clonedObject = [...object];
    for (const id in clonedObject) {
      const item = clonedObject[id];
      if (item.key === key) {
        item.name = name;
      }
    }
    return clonedObject;
  }

  addTask(name) {
    const Tasks = [...this.state.Tasks];
    Tasks.push({ key: Tasks.length, name })
    this.setState({ Tasks });
  }

  onChangeHandle = (key, e) => {
    const Tasks = [...this.state.Tasks];
    const newTask = this.editTask(Tasks, key, e.target.value)
    this.setState(newTask)
  }

  onKeyDownOfAdd = (event) => {
    if (event.keyCode === KEYS.ENTER) {
      event.preventDefault;
      event.stopPropagation;
      const newTask = event.target.value;
      this.addTask(newTask);
    }
  }

  render() {
    const Tasks = this.state.Tasks;
    return (
      <div className="App">
        <h1> Todos </h1>
        {Tasks.map(task =>
          <Task change={this.onChangeHandle} key={task.key} id={task.key} name={task.name} />
        )}
        Add More Items:
        <input onKeyDown={this.onKeyDownOfAdd} />
      </div>
    );
  }
}

export default App;
