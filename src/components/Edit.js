import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";

export default function EditUser({ user, setUser }) {
    console.log(setUser, 'edit')
    const [inputName, setInputName] = useState();
    const [inputEmail, setEmail] = useState();

    const syncInput = () => {
        setInputName(user.name)
        setEmail(user.email)
    }

    // const updateInput = () => {
    //     setUser({name: inputName, email: inputEmail})
    // }

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log('submit')
    }
    return (
        <React.Fragment>
            <button onClick={() => syncInput()}>Edit</button>
            <Form onChange={e => handleOnChange(e)} onSubmit={e => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        id="form-control-login"
                        className="form-control-register"
                        required
                        value={inputName}
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
                        value={inputEmail}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" id="button_login">
                    Update
                </Button>
            </Form>
        </React.Fragment>
    );
}
