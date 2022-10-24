import React, { useState } from 'react'
import "./App.css"
import { Display } from './components/Display'
import {BtnArea} from './components/BtnArea'


const operators = ['%', '/', '*', '-', '+'];
export const App = () => {
  const [str, setStr] = useState("test");
  const [lastOperator, setLastOperator] = useState("")
  const handleOnClick = val =>{
    console.log(val);

    if(val === 'AC'){
      setStr("");
      return;
  }

  if(val === 'C'){
    const shortStr = str.slice(0, -1)
    return setStr(shortStr);
}

if(val === "="){  
  const lastChar = str[str.length-1];
  let displayStr = str;
  if(operators.includes(lastChar)){
      displayStr  =str.slice(0, -1);
  }
  const total = eval(displayStr).toString();
  setStr(total);
  return total();
}

// prevent multiple operator showing at once

  if(!str){
      return;
    }
    const lastChar = str[str.length -1];
    let temStr = str;
    if(operators.includes(lastChar)){
        temStr =str.slice(0,-1);
    }
    setStr(temStr + val);
  }


  // make sure no more than 1 dot per number
    
  if(val === ".") {
    if(lastOperator){
        const operatorIndex = str.lastIndexOf(lastOperator);

        const lastNumberSet = str.slice(operatorIndex + 1);

        if(lastNumberSet.includes(".")){
            return;
        }

        if(!lastOperator && str.includes(".")){
            return;
        }
    }

    if(!lastOperator && str.includes(".")){
        return;
    } 
}


    setStr(str +val);
  }
  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="calculator">
          <Display str={str}/>
          {/* <div class="display prank">0.00</div> */}
          
          <BtnArea handleOnClick={handleOnClick}/>
         
      </div>
    
</div>
  )
}


