import React from 'react'

function TodoList(props) {

  const listItems = props.listItems
  const setListItems = props.setListItems
  
  function click(id){
   setListItems(listItems.filter((item)=>{
    if(item.id === id){
      return false
    }else{
      return true 
    }
   }))
  }


  return (
   <>
   <div className='bg-[#BDB4EA] border rounded-md
             p-2 flex-grow'>
                <h1 className='text-2xl font-medium'>Today's Activity</h1>
                
                {listItems.length===0 && <p className='text-gray-700 font-semibold text-center'>You haven't added anything yet</p> }
                {listItems.map((items,index)=>(
                  <>
                  <div className='flex justify-between'>
                 <p>{index+1}. {items.activity}</p>
                 <button className='text-red-500' onClick={()=>click(items.id)}>Delete</button>
                 </div>
                  </>
                ))}
            </div></>
  )
}

export default TodoList