import React from "react";
function Tablerow({number,index}){
    
    return(
        <div>
             {number} X {index} = {number*index}
        </div>
    )
}
export default Tablerow;