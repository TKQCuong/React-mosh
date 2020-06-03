import React, { useState } from 'react';
import EditUser from './Edit';
import { Form, Button } from "react-bootstrap";
import _ from "lodash";


const SmallInput = ({ user, setUser }) => {
    const [input, setInput] = useState([{
        name: '', email: ''
    }]);

    const syncInput = (e) => {
        // setInput({ name: user.name, email: user.email })
    }

    const handleOnChange = (e) => {
        console.log(e)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {_.map(user, u => (
                <>
                    <span>{u.name}</span>
                    <span>{u.email}</span>
                    <button onClick={() => setInput({name: u.name, email: u.email})}>Edit</button><br/>
                    {/* <button onClick={() => syncInput(u.id)}>Edit</button><br/> */}
                </>
            ))}
            <Form onChange={e => handleOnChange(e)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        id="form-control-login"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        name="email"
                        id="form-control-login"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" id="button_login">
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default SmallInput;