import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTasks } from './redux/taskSlice';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(loadTasks(tasks));
  }, [dispatch]);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
