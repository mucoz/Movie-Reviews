import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap';
import { propTypes } from "react-bootstrap/esm/Image";

function Login(props){
    
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    
    const onChangeName = (event)=>{
        setName(event.target.value);
    }

    const onChangeId = (event)=>{
        setId(event.target.value);
    }

    const login = ()=>{
        props.login({name:name, id:id});
        props.history.push("/");
    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={name} placeholder="Enter username" onChange={onChangeName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" value={id} placeholder="Enter ID" onChange={onChangeId} />
                </Form.Group>
                <Button variant="primary" onClick={login}>Submit</Button>
            </Form>
        </div>
    );
};

export default Login;