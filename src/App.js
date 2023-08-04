import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List';
import Display from './Display';

function App() {

  const [nextList, setNextList] = useState([])

  const addToList = (task)=> {
    setNextList([...nextList, task])
  }

  const deleteCurrentTask = (deleteIdx) => {
    const byeBye = nextList.filter((newTask, Idx)=> Idx !== deleteIdx)
    setNextList(byeBye) 
  }

  const updateToggle = (targetIdx, targetBool)=> {
    const updatedToggle = nextList.map((newTask, Idx)=> {
      if(targetIdx === Idx) {
        return{...newTask, isComplete: targetBool}
      }else{
        return newTask
      }
    })
    setNextList(updatedToggle);
  }

  return (
    <div className="App">
      <List newList = {addToList}/>
      <Display nextAdd = {nextList} deleteTask = {deleteCurrentTask} toggleUpdate = {updateToggle}/>
    </div>
  );
}

export default App;
