import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Form, Button, Card, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    const handleLogin = async()=>{
        try {
            let res = await axios.post(`${config.API_URL}/user/create`, {name, email, password})
            if(res.status === 200){
                console.log(res.data.message)
                toast.success(res.data.message)
                navigate('/login');
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
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" required onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" onClick={handleLogin} className="w-100">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    </>
}

export default Register