//NUEVO

import React, { useState } from "react";
import Note from "./Note.jsx";
import NoteEditor from "./NoteEditor.jsx";
import "../estilo/NoteList.css";



function NoteList (){

    const [tasks, setTasks] = useState([]); //Tendremos un array de objetos
    const [searchTerm, setSearchTerm] = useState('');

    const addTask = (task) => {
        //trim() quita los espacios del principio y final.
        if(task.text.trim()){
            task.text = task.text.trim();
            const updatedTasks = [...tasks, task];
            setTasks(updatedTasks);
            //Guardar las notas en el almacenamiento local cada vez que se envía una nueva nota

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            JSON.parse(localStorage.getItem("tasks"));
        }

    }
    
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        //Borrar las notas en el almacenamiento local cada vez que se envía una nueva nota

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        JSON.parse(localStorage.getItem("tasks"));
        
    }

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    
        <>

        <div className="input-group input-group-md mb-3">
            <span className="input-group-text" id="inputGroup-sizing-md">Buscar</span>
            <input
                type="text"
                className="form-control"
                placeholder="Nota"
                aria-label="Nota"
                aria-describedby="basic-addon1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            >
            </input>
        </div>
        <NoteEditor className= "container-NotaEditor" onSubmit = {addTask}/>

    
        {filteredTasks.map ((task) => 
            <Note className= "container-Nota"
                key = {task.id}
                id = {task.id}
                title = {task.title}
                text = {task.text}
                deleteNote={deleteTask}
            />
        )
        }

        </>

    );

}

export default NoteList;