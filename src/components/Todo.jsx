import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
   
   const [todolist,settodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")):[]);
   const intputRef = useRef();
   const add =()=>{
   const inputtext = intputRef.current.value.trim();
   if(inputtext ===""){
    return null;
   }
   const newTodo = {
      id:Date.now(),
      text:inputtext,
      iscomplete:false,
   }
   settodolist ((prev)=>[...prev,newTodo]);//spread last one and insert new
   intputRef.current.value="";   
}
  const deleteTodo = (id)=>{
    settodolist((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.id !==id)
    })
  } 
  const toggle = (id,iscomplete)=>{
    settodolist((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id===id){
                console.log(iscomplete)
                return {...todo, iscomplete: !iscomplete}
            }
            return todo;
        })
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todolist))
  },[todolist])
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex
    flex-col p-7 min-h-[550px] rounded-xl'>
     
     {/*------------title----------*/}
     <div className='fles items-center mt-7 gap-2'>
        <img className = 'w-8'src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>TO-DO-LIST</h1>
     </div>
     {/*---------------input------------------*/}
     <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={intputRef} className ='bg-transparent border-0 outline-none flex-1 h-4 pl-6 pr-2 placeholder:text-slate-100'type="text" placeholder='Add your task' />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-40 h-14 text-white text-lg font-medium cursor-pointer '>Add+</button>
     </div>
     {/*to-do item*/}
     <div>
        
        {todolist.map((item,index)=>{
            return <TodoItems key ={index} text ={item.text} id = {item.id} iscomplete = {item.iscomplete} deleteTodo ={deleteTodo} toggle={toggle}/>
        })}
        
        
     </div>
    </div> 
  )
}

export default Todo
