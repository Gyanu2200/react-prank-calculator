import React from 'react'

export const Button = ({lable, cls,handleOnClick}) => {
    // const cls = "btn-c"
    // const lable = "AC"
  return (
    <div className={"btn" + cls} onClick ={()=>handleOnClick(lable)}>{lable}</div>
  )
}
