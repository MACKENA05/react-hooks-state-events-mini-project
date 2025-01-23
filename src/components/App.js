import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
   const [tasks, setTasks] = useState(TASKS);

   function handleDelete(taskIndex){
    const updatedTask = tasks.filter((_, index)=> index !== taskIndex )
    setTasks(updatedTask);
  }
  function handleTaskFormSubmit(newTask){
    setTasks((tasks)=> [...tasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks = {tasks} setTasks={setTasks} categories ={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} setTasks= {setTasks} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
