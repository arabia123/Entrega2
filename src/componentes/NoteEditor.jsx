//NUEVO
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; //nos da una ip distinta cada vez
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilo/NoteEditor.css"

function NoteEditor({onSubmit}){ //aqui metemos los elementos que usamos "las props"

    const [input1, setInput1] = useState('');//cada vez que escribamos actualizamos el valor de imput titulo
    const [input2, setInput2] = useState('');//cada vez que escribamos actualizamos el valor de imput texto

    const handleChange1 = (content) => { //mantenemos el valor en la variable
        setInput1(content.target.value);
    }

    const handleChange2 = (content) => { //mantenemos el valor en la variable
        setInput2(content.target.value);
    }

    const handleSend = (content) => { //enviamos el texto
        content.preventDefault(); //no recarga la pagina
        const newTask = {
            //genera un id unico llamando a uuidv4
            id: uuidv4(),
            title: input1,
            text: input2
        }

        
        onSubmit(newTask) //onSubmit es una prop

        setInput1('');
        setInput2('');
    
    }

    return (

        <>
        <form className="form-nota" onSubmit={handleSend}>

            <div className='row'>
                <h2 className='insertarNota'>Insertar Nota</h2>

                <div className="input-group input-group-md mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-md">Titulo</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Título"
                        aria-describedby="basic-addon1"
                        placeholder = "Titulo"
                        name = "title"
                        value={input1}
                        onChange = {handleChange1}
                    />
                </div>

                <div className='form-group mb-1'>
                    <textarea
                        className="form-control"
                        type='text'
                        placeholder = "nota"
                        name = "text"
                        rows="2"
                        value={input2}
                        onChange = {handleChange2}
                    ></textarea>
                </div>
            </div>
            <button className="button-nota">
                    Guardar
                </button>
        </form>
        </>
    );
}

export default NoteEditor