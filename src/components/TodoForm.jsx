import React, { useState } from 'react'

function TodoForm(props) {

    const [newAct,setNewAct] =useState("")

    const listItems = props.listItems
    const setListItems = props.setListItems

    function handleChange(event){
setNewAct(event.target.value)
    }

    function addAct(){
        setListItems([...listItems,{id:listItems.length+1,activity:newAct}])
        setNewAct("")
    }

    return (
        <>
       <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-medium'>Manage Activities</h1>

                <div>
                    <input onChange={handleChange} value={newAct} type='text' className='border border-black transparent p-1' placeholder='Next Activity'></input>
                    <button onClick={addAct} className='bg-black text-white border border-black p-1'>Add</button>
                </div>
            </div>
        </>
    )
}

export default TodoForm