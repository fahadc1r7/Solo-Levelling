import React from 'react'
import { useState } from 'react'
import { addProgressLog } from '../utils/localstorage'
import { Form } from 'react-router-dom'


const ProgressForm = ({challengeId, onLog}) => {
    const [note, setNote] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!note.trim())  return

        const entry ={
            data: new Date().toISOString().split("T")[0],
            note,
        }

        addProgressLog(challengeId, entry)
        setNote("")
        onLog()
    }
  return (
   <form onSubmit={handleSubmit} className='f-flex gap-2 mt-3'>
    <input type="text"
    placeholder='What did you do today'
    className='form-control mt-3 mb-3' 
    value={note}
    onChange={(e)=> setNote(e.target.value)}/>
 
    <button type='submit' className=' btn btn-outline-dark'>Log Today</button>
   </form>
  )
}

export default ProgressForm