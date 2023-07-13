import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'




function App () {

  const { fromLanguage, setFromLanguaje} = useStore();
  return (
    <div className='App'>
      <h1>Google Translate </h1>
      <button onClick={() =>{
        setFromLanguaje('es')
      }}>
        Cambiar a Español
      </button>
      {fromLanguage}
    </div>
  )
}

export default App
