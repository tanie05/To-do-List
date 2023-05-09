import React, {useState} from "react"
import Reset from "./Reset"
export default function Input(prop) {
    const [taskVal, setTaskVal] = useState("")

    function handleChange(event) {
        setTaskVal(event.target.value)
    }

    function handleSubmit() {
        const send = taskVal
        setTaskVal("")
        if(send)
        prop.addTodo(send)
        
    }


    return (
        <div className="input-form">
            <input type = "text" placeholder="Enter the task" className="input-box" onChange = {handleChange} value = {taskVal} />
            <button className="input-button" onClick = {handleSubmit} >Add</button>
            
            
        </div>
    )
}