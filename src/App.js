import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const getTasks = async () => {
      const server_tasks = await fetchTasks();
      setTasks(server_tasks)
    }
    getTasks();
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    // console.log(data);
    return data;
  }
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    // console.log(data);
    return data;
  }


  // Delete Task
  const deleteTask = async (id) => {
    // alert(`Deletng Task with id: ${id}`);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // alert(`Toggling Task with id: ${id}`);

    const toggle_task = await fetchTask(id);
    const updated_task = toggle_task;
    updated_task.reminder = ! toggle_task.reminder;

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updated_task)
    })

    const data = await res.json();

    setTasks(tasks.map(task => {
      if(task.id === id){
        task.reminder = data.reminder
      }
      return task;
    }))
  }

  // Add Task
  const addTask = async (e, task) => {
    e.preventDefault();
    if(!task.text){
      alert("Task cannot be Empty");
      return;
    }

    const res = await fetch(`http://localhost:5000/tasks`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    console.log(res);
    const data = await res.json();

    setTasks([...tasks, data])
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
