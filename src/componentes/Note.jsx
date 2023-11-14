import React from 'react';
import "../estilo/Note.css";

function Note ({ id, text, title, deleteNote }){
    
    return (

        <div className= "nota-container">
            <div className='nota-texto'>
                <div className='titulo'>
                    <h3>{title}</h3>
                </div>
                <div className='texto'>
                    {text}
                </div>
                
            </div>
            <div onClick = { () => deleteNote(id)}>

                <button className="button-eliminar">
                    Eliminar
                </button>
                
            </div>
        </div>
    );
}

export default Note
