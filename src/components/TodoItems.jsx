import React from 'react';
import tick from '../assets/tick.png';
import non_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';
const TodoItems = ({text,id,iscomplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

     <div onClick={()=>{toggle(id,iscomplete)}} className=' flex flex-1 items-center cursor-pointer'>
        <img src={ iscomplete ? tick : non_tick} alt="" className='w-7'/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${iscomplete  ? "line-through" : ""}`}>{text}</p>
        </div> 
        <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />
         
    </div>
  )
}

export default TodoItems
