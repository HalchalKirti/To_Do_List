import React, { useState } from "react";
import Tablerow from "./Tablerow";


function Table(){
     const state=useState(2);//const[num,updateNum]=useState(2)
     let num=state[0];
     const updateNum=state[1];
     let [upto,Newupto]=useState(10);
     let row =[];
     for(let i=1;i<=upto;i++){
        row.push(<Tablerow number={num} index={i}></Tablerow>)
     }

    // const [a,setA]=useState(0);//why
    function NextTable(){
        // num++
        console.log(`next table called`);
        console.log(num);
       updateNum(num+1);//why//something to inform react thet something is changed.
       }
    function Handlestart(event){
        const Input=+(event.target.value);
        updateNum(Input);
    }
    function HandleTill(event){
        const setupto=+(event.target.value);
       Newupto(setupto);
    }
    return(
        <div >
            <button className='border border-blue-500 mb-3 px-6 py-1 rounded-md  bg-cyan-500 shadow-lg shadow-cyan-500/50 ' onClick={NextTable}>next</button>
            <br /> <div className="flex gap-3">
            <input value={num} type="number" onInput={Handlestart} className="border border-cyan-700 mb-3 w-28 px-6 py-1 rounded-md  text-white bg-slate-800 " />
            <input value={upto} type="number" onInput={HandleTill} className="border border-cyan-700 mb-3  w-28 px-6 py-1 rounded-md  text-white bg-slate-800 " />
            </div>
        {num>20?<div className="border border-green-700 mb-3 px-6 py-1 rounded-md  text-white" >Welldone reached{num}</div>:<div className="border border-red-700 mb-3  px-6 py-1 rounded-md  text-white" >work hard only reached!{num}</div>}
        {row}
        </div>
    )
}
export default Table;