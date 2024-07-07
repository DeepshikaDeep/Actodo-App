import React from 'react'
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="flex justify-center  bg-black p-24 ">
        <div className="bg-white p-14 border rounded-md">
         <Header/>
         <Card/>
         <TodoContainer/>
        </div>
    </div>
  )
}

export default App





