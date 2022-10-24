import React from 'react'
import { Button } from './Button'

export const BtnArea = ({handleOnClick}) => {
    const btns = [
        {lable:"AC", cls:"btn-ac"},
        {lable:"C", cls:"btn-c"},
        {lable:"%", cls:"btn-perc"},
        {lable:"/", cls:"btn-divide"},
        {lable:"7", cls:"btn-7"},
        {lable:"8", cls:"btn-8"},
        {lable:"9", cls:"btn-9"},
        {lable:"*", cls:"btn-multi"},
        {lable:"4", cls:"btn-4"},
        {lable:"5", cls:"btn-5"},
        {lable:"6", cls:"btn-6"},
        {lable:"-", cls:"btn-minus"},
        {lable:"1", cls:"btn-1"},
        {lable:"2", cls:"btn-2"},
        {lable:"3", cls:"btn-3"},
        {lable:"+", cls:"btn-plus"},
        {lable:"0", cls:"btn-0"},
        {lable:".", cls:"btn-0"},
        {lable:"=", cls:"btn-equal"}
    ]
  return (
        <>
       
            {btns.map((btn,i)=>{
                return < Button 
                key={i} 
                lable={btn.lable} 
                cls={btn.cls}
                handleOnClick={handleOnClick}/>
            })}


          {/* <div class="btn btn-perc">%</div>
          <div class="btn btn-divide">/</div>
          <div class="btn btn-7">7</div>
          <div class="btn btn-8">8</div>
          <div class="btn btn-9">9</div>
          <div class="btn btn-multi">*</div>
          <div class="btn btn-4">4</div>
          <div class="btn btn-5">5</div>
          <div class="btn btn-6">6</div>
          <div class="btn btn-minus">-</div>
          <div class="btn btn-1">1</div>
          <div class="btn btn-2">2</div>
          <div class="btn btn-3">3</div>
          <div class="btn btn-plus">+</div>
          <div class="btn btn-0">0</div>
          <div class="btn btn-dot">.</div>
          <div class="btn btn-equal">=</div> */}
        </>
  )
}
