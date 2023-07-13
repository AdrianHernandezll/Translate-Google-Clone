import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'




function App () {
  return (
    <div className='App'>
      <h1>Google Translate </h1>
      <button onClick={() =>{
        dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es'})
      }}>
        Cambiar a Español
      </button>
    </div>
  )
}

export default App
