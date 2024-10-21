import React from 'react'

import Container from 'react-bootstrap/Container';

import Task from './Task.jsx'
import TasksEmptyList from './TasksEmptyList.jsx'

function TasksWrapper({tasks}) {
  console.log(tasks)
  return (
    <Container>
      <section className="my-5 d-flex w-100 h-100 flex-wrap align-items-center rounded-4 gap-5">
        {
          tasks.length ? 
          tasks.map( task => <Task taskName={task.taskName} taskDeadline={task.taskDeadline} taskDescription={task.taskDescription} taskId={task.taskId}/>)
          : <TasksEmptyList/>
        }
      </section>
    </Container>
  );
}

export default TasksWrapper;