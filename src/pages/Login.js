import logo from '../logo.svg';
import '../App.css';
import './style.css';
import Form from 'react-bootstrap/Form';
import {InputGroup, FormControl, Button} from 'react-bootstrap/InputGroup';

function Login() {
  return (
    <div className="bg-dark h-100">
      <div className="container text-light text-center fs-2 p-3 mb-5">
        Controle de estoque com React
      </div>
      <div className="d-flex justify-content-center main">
        <div className="bg-light border p-3">
          <div className="container text-center fs-4 p-3">
            Login
          </div>
          <div className="p-3">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">*</InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="password"
              />
            </InputGroup>

            <Button>AA</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
