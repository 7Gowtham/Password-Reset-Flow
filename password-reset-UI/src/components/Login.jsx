import React, {useState} from 'react'
import axios from 'axios';
import { Form, Button, Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import config from '../utils/config';

function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
  
    const handleLogin = async() =>{
      try {
        let res = await axios.post(`${config.API_URL}/user/login`, {email, password}) 
        if(res.status === 200){
            console.log(res.data.message)
            toast.success(res.data.message)
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  
    return <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '22rem' }} className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formemail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={handleLogin} className="w-100">
            Submit
          </Button>

          <div className="text-center mt-3">
            <Link to="/user/forgot-password" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-3">
            <Link to="/user/create" className="text-decoration-none">
              Register?
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
      
    </>
}

export default Login