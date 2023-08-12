import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap';




import './App.css'
import { useStore } from './hooks/useStore'
import { ArrowIcon } from './components/Icons';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';
import { TextArea } from './components/TextArea';
import { SectionType } from './types.d';





function App () {

  const { loading,fromLanguage,toLanguage,fromText,result, setFromLanguaje,interchangeLanguages,setToLanguage,setFromText,setResult} = useStore();
  return (
    <Container fluid>
        <h1>Google Translate </h1>
        <Row>
          <Col>
                <Stack gap={2}>
                  <LanguageSelector
                  type='from'
                  value={fromLanguage}
                  onChange={setFromLanguaje}
                  />
                  <TextArea 
                  loading={loading}
                  type={SectionType.From}
                  value={fromText}
                  onChange={setFromText}
                  />
                </Stack>

                  
          </Col>


          <Col xs='auto'>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
                <ArrowIcon/>
            </Button>
          </Col>

            <Col>
              <Stack gap={2}>
                <LanguageSelector 
                type='to'
                value={toLanguage}
                onChange={setToLanguage}
                />
                <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
                />

              </Stack>
            </Col>
        </Row>
    </Container>
  )
}

export default App
