import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button } from 'react-bootstrap';




import './App.css'
import { useStore } from './hooks/useStore'
import { ArrowIcon } from './components/Icons';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';




function App () {

  const { fromLanguage, setFromLanguaje,interchangeLanguages,setToLanguage} = useStore();
  return (
    <Container fluid>
        <h1>Google Translate </h1>
        <Row>
          <Col>
            <LanguageSelector onChange={setFromLanguaje}/>
          </Col>
          <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
                <ArrowIcon/>
            </Button>
          </Col>

          <Col>
            <LanguageSelector onChange={setToLanguage}/>
          </Col>

        </Row>
    </Container>
  )
}

export default App
