import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoContainer() {

  const [listItems,setListItems] = useState([
    
  ])



  return (
    <>
     <div className='flex gap-5 flex-wrap'>
            
            <TodoForm listItems={listItems}  setListItems={setListItems }/>

            <TodoList listItems={listItems}  setListItems={setListItems }/>
            </div></>
  )
}

export default TodoContainer