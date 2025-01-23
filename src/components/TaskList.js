import React from "react";
import Task from "./Task";

function TaskList({tasks,setTasks,handleDelete}) {
  //initialize state
  return (
    <div className="tasks">

      {tasks.map((task,index)=> (
        <Task 
        key={index}
        text={task.text}
        category={task.category} 
        onDelete={()=> handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
