import {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Components/Header/Header';
import CreateNotes from './Components/Notes/CreateNotes';
import NotesList from './Components/Notes/NotesList';
import {Note} from "./modelsTS/notesModel";


function App() {

  const [notes,setNotes] = useState <Note[]>([{
    id: (new Date).toString(),
    title: "Bienvenue",
    text: "Voici un simple projet pour mettre en pratique mes connaissances en react/typescript",
    color : "rgb(166, 211, 250)",
    date: (new Date).toString()
  }]);


  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
          <NotesList notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateNotes notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
