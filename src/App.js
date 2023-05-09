import React from "react"
import Header from "./Components/Header"
import Task from "./Components/Task"
import "./styles.css"
import Reset from "./Components/Reset"

export default function App() {

    return (
        <div className="app">
            <Header />
            <Task />
            <Reset />
        </div>
    )
}