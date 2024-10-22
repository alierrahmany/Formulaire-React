import React, { useState } from 'react'

const Add = () => {
    const [value,setValue]=useState()
    const change=()=>{
        
    }
  return (
    <div>
      <input type="text" name="" id="" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={change}>Ajouter</button>
    </div>
  )
}

export default Add
