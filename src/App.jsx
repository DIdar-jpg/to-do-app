import Header from './components/Header/Header.jsx'
import TasksWrapper from './components/TasksWrapper.jsx';
import TaskModal from './components/TaskModal.jsx'
import { useState } from 'react';

function App() {
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
        'taskDescription': taskDescription 
      }
    ])
  }

  return (
    <>
      <Header openModal={handleShow}/>
      <TasksWrapper tasks={tasks}/>
      <TaskModal show={show} closeModal={handleClose} createTask={addTask}/>
    </>
  );
}

export default App;
