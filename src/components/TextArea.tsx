import { Form} from 'react-bootstrap';
import { SectionType } from '../types.d';


type Props = {
     type: SectionType
     loading?: boolean
     onChange: (value: string) => void
     value: string


}
const commonStyles = { border: 0 ,height: '200px',resize: 'none'}

const getPlacerholder = ({type, loading}: {type:SectionType, loading?: boolean}) => {
     if(type === SectionType.From) return 'Introducir texto'
     if(loading === true) return 'Cargando...'
     return 'Traduccion'
}


export const TextArea = ({value,loading, type, onChange}: Props) =>{

     const styles = type === SectionType.From 
     ? commonStyles 
     : { ...commonStyles, backgroundColor: '#f5f5f5' }  

const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
     onChange(event.target.value)
}

     return(

          <Form.Control
          as='textarea'
          placeholder={getPlacerholder({type,loading})}
          autoFocus={type === SectionType.From}
          disabled={type === SectionType.To}
          style={styles}
          value={value}
          onChange={handleChange}
          />
     )
}