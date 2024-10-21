import Header from './components/Header/Header.jsx'
import TasksWrapper from './components/TasksWrapper.jsx';
import TaskModal from './components/TaskModal.jsx'
import { useState, createContext } from 'react';

export const DeleteContext = createContext(null);

export function App() {
  // Состояние модального окна
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Задания
  const [ tasks, setTasks ] = useState([])

  const addTask = (taskName, taskDeadline, taskDescription) => {
    setTasks([
      ...tasks,
      {
        'taskName': taskName, 
        'taskDeadline': taskDeadline, 
        'taskDescription': taskDescription,
        'taskId': Date.now()
      }
    ])
  }
  const deleteTask = e => { 
    setTasks(tasks.filter( task => task.taskId !== Number(e.currentTarget.id) ))
  }

  return (
    <>
      <Header openModal={handleShow}/>

      <DeleteContext.Provider value={deleteTask}>
        <TasksWrapper tasks={tasks}/>
      </DeleteContext.Provider>
      
      <TaskModal show={show} closeModal={handleClose} createTask={addTask}/>
    </>
  );
}

