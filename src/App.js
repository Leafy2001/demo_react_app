import { useState } from 'react';
import AddTask from './components/AddTask';

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Office Meeting",
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: 3,
            text: "Shopping",
            day: "Feb 5th at 2:30pm",
            reminder: false
        }
    ]
  )

  // Delete Task
  const deleteTask = (id) => {
    // alert(`Deletng Task with id: ${id}`);
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // alert(`Toggling Task with id: ${id}`);
    setTasks(tasks.map(task => {
      if(task.id === id){
        task.reminder = !task.reminder
      }
      return task;
    }))
  }

  // Add Task
  const addTask = (e, task) => {
    e.preventDefault();
    if(!task.text){
      alert("Task cannot be Empty");
      return;
    }
    setTasks([...tasks, task])
  }

  const toggle_form = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" toggle_form={toggle_form} showAddTask={showAddTask} />
      {showAddTask ? <AddTask onAdd = {addTask} /> : ''}
      {
        tasks.length > 0 ?
          <Tasks 
            tasks = {tasks} 
            setTasks = {setTasks} 
            onDelete = {deleteTask} 
            onToggle = {toggleReminder} 
          />

          : <h2>No tasks Available</h2>
      }
      
    </div>
  );
}

export default App;
