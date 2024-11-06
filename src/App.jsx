import Header from './components/Header/Header.jsx'
import TasksWrapper from './components/TasksWrapper.jsx';
import TaskModal from './components/TaskModal.jsx'
import { useState, createContext, useEffect } from 'react';

export const TaskContext = createContext(null);

export function App() {
  // Состояние модального окна
  const [ show, setShow ] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ currentTask, setCurrentTask ] = useState()
  const [ modalMode, setModalMode ] = useState('create')
  const setEditMode = () => setModalMode('edit')
  const setCreateMode = () => setModalMode('create')
  // Задания
  const [ tasks, setTasks ] = useState([])

  const addTask = (taskName, taskDeadline, taskDescription) => {
    let dateStr = null
    if(taskDeadline){
      const date = taskDeadline.split('-')
      const currentDate = new Date().toLocaleDateString().split('.')
      if(Number(date[0]) > Number(currentDate[2])) dateStr = `${currentDate.join('.')} - ${date[2]}.${date[1]}.${date[0]}`
  
      if (Number(date[0]) === Number(currentDate[2])) {
        if (Number(date[1]) > Number(currentDate[1])) dateStr = `${currentDate.join('.')} - ${date[2]}.${date[1]}.${date[0]}`
        else if (Number(date[1]) === Number(currentDate[1])) {
          if (Number(date[2]) >= Number(currentDate[0])) dateStr = `${currentDate.join('.')} - ${date[2]}.${date[1]}.${date[0]}`
        }
      }
    }
    setTasks([
      ...tasks,
      {
        'taskName': taskName, 
        'taskDeadline': dateStr,
        'taskDescription': taskDescription,
        'taskId': Number(Date.now())
      }
    ])
  }
  
  const deleteTask = taskId => setTasks(tasks.filter( task => task.taskId !== taskId ))
  
  const editTask =  updatedTask => setTasks( tasks.map( task => task.taskId === updatedTask.taskId ? { ...task , ...updatedTask} : task)) 


  
  const [ searchTerm, setSearchTerm ] = useState('')

  const handleSearchChange = e => { 
    setSearchTerm(e.target.value)
  }
  const resetSearchTerm = () => { setSearchTerm('') }

  const filteredTasks = tasks.filter( task => task.taskName.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <>
      <Header openModal={handleShow} setCreateMode={setCreateMode} handleSearchChange={handleSearchChange} resetSearchTerm={resetSearchTerm}/>

      <TaskContext.Provider value={{
        tasks, 
        handleShow, 
        handleClose, 
        addTask, 
        editTask,
        deleteTask, 
        modalMode, 
        setCreateMode, 
        setEditMode, 
        currentTask, 
        setCurrentTask,
        }}>
        <TasksWrapper tasks={tasks} searchTerm={searchTerm} filteredTasks={filteredTasks}/>
        <TaskModal show={show}/>
      </TaskContext.Provider>
    </>
  );
}


