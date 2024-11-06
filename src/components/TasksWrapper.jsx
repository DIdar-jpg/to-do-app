import React from 'react'

import Container from 'react-bootstrap/Container';

import Task from './Task.jsx'
import TasksEmptyList from './TasksEmptyList.jsx'

function TasksWrapper({tasks, searchTerm, filteredTasks}) {

  const tasksToRender = filteredTasks.length || filteredTasks.length === 0 && searchTerm.length > 0 ? filteredTasks : tasks
  
  return (
    <Container>
      <section className="my-5 d-flex w-100 h-100 flex-wrap align-items-start rounded-4 gap-5">
       {
          tasksToRender.length > 0
          ?
          tasksToRender.map( (task) => 
            <Task 
            key={task.taskId}
            taskName={task.taskName}
            taskDeadline={task.taskDeadline}
            taskDecription={task.taskDecription}
            taskId={task.taskId}
            />
          )
          :
          <TasksEmptyList />
        }
      </section>
    </Container>
  );
}

export default TasksWrapper;