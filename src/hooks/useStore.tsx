import { type State, type Action } from '../types.d'
import { useReducer } from 'react';


//1. Create a initialSate


const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result:'',
  loading: false,
  
}

//2. Create Reducer

function reducer(state: State,action: Action){

    const { type  } = action

    if(type === 'INTERCHANGE_LANGUAGE'){
      return{
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }

    if(type === 'SET_FROM_LANGUAGE'){
      return{
        ...state,
        fromLanguage: action.payload
      }
    }

    if(type === 'SET_TO_LANGUAGE'){
      return{
        ...state,
        toLanguage: action.payload
      }
    }

    if(type === 'SET_FROM_TEXT'){
      return{
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''

      }
    }

    if(type === 'SET_RESULT'){
      return{
        ...state,
        result: action.payload
      }
    }


    return state

}

export function useStore(){
     //3. Usando el hook useReducer
  const [
    {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguages = () => {
         dispatch({type: 'INTERCHANGE_LANGUAGE'})
    }

    const setFromLanguaje = (payload: string) => {
         dispatch({type: 'SET_FROM_LANGUAGE', payload})
    }

    const setToLanguage = (payload: string) => {
     dispatch({type: 'SET_TO_LANGUAGE', payload})
    }

    const setFromText = (payload: string) => {
     dispatch({type: 'SET_FROM_TEXT', payload})
    }

    const setResult = (payload: string) => {
     dispatch({type: 'SET_RESULT', payload})
    }



    return {
     fromLanguage,
     toLanguage,
     fromText,
     result,
     loading,
     interchangeLanguages,
     setFromLanguaje,
     setToLanguage,
     setFromText,
     setResult,
    }

    
}