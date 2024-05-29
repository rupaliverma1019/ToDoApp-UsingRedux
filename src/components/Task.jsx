import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
