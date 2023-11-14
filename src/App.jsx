import { useState } from 'react'
import './App.css'
import NoteList from './componentes/NoteList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >

        <h1 id="titulo">Aplicación de Notas</h1>
        <NoteList></NoteList>
        
      </div>

    </>
  )
}

export default App
