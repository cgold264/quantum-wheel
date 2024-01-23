import {useState} from 'react';
import WheelComponent from 'react-wheel-of-prizes'
import Container from 'react-bootstrap/Container';
import { Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const quantumImage = "./backgrounds/quantum-background.jpg";

  const containerStyle = {
    backgroundImage: `url(${quantumImage})`,
    backgroundSize: 'cover', // Adjust this based on your requirements
    // Other background-related styles can be added here
  };

  const [inputUsers, setInputUsers] = useState();

  const [quantumRole, setQuantumRole] = useState(false);

  const segments = [
    'cullen',
    'bender',
    'connor',
    'erik'
  ]

  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000'
  ]
  const onFinished = (winner) => {
    console.log(winner)
  }

  return (
    <>
    <Row className='text-center bg-dark text-light'>
          <h1 className='my-3'>
            <b>Quantum Wheel</b>
          </h1>
        </Row>
    <div className={quantumRole ? "quantum-background" : "conventional-background"}>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment='won 10'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={250}
                upDuration={1000}
                downDuration={10}
                fontFamily='Arial'
              />
          </Col>
          <Col className="py-5 bg-secondary">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><h1>Players</h1></Form.Label>
                <Form.Control as="textarea" row={7} />
              </Form.Group>
            </Form>
            <Button variant={quantumRole ? "light" : "outline-light"} onClick={() => {setQuantumRole(true)}} className="m-2">
              Quantum
            </Button>
            <Button variant={!quantumRole ? "light" : "outline-light"} onClick={() => {setQuantumRole(false)}} className="m-2">
              Conventional
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;
