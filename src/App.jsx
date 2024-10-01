import React,{useState} from 'react';
import Table from './Table';

 
function App() {
 
  const [Flip,setFlip]=useState(false);

  let key1='table1';
  let key2='table2';

  if(Flip){
    key1='table2';
    key2='table1';
    }

  function Handleflip(){
   setFlip(!Flip);
 
  }
 console.log('app function running')
  return (
   
      <div className='text-red-100 my-36 bg-slate-800 p-2 flex gap-10 w-2/4 mx-auto  '>
       <Table key={key1}></Table>  
       <Table key={key2}></Table>
       <button className='border border-blue-500 mb-3 px-6 py-1 rounded-md  shadow-lg shadow-cyan-500/50 h-12 mt-28'onClick={Handleflip} >FLIP</button>
    </div>
  )
}

export default App
