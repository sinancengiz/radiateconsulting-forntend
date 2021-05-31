import React, { useState, useEffect } from "react";
import { Form, Button} from 'react-bootstrap';
import * as ROUTES from '../../../constants/routes';
import { useHistory } from "react-router-dom";



const NewStoreForm = (props) => {

    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");
    const history = useHistory();
    
    const handleSubmit = () =>{
        console.log("clicke ")
        history.push(ROUTES.HOME)
    }

    const handleChange = () =>{
        console.log("clicke ")
    }

    return(
        <Form style={form_style } onSubmit={handleSubmit} >
            <Form.Label>New Store Form</Form.Label>
            <Form.Group controlId="storeTitle">
                <Form.Control type="text" placeholder="Title" name="title" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="storeOwner">
                <Form.Control type="text"  placeholder="Onwer Name" name="owner" onChange={handleChange} />
            </Form.Group>
            <Button href={ROUTES.HOME} variant="primary" style={{marginRight:"20px"}}>Back</Button>
            <Button variant="danger" type="submit">
                Open Store
            </Button>
        </Form>
    )
};

export default NewStoreForm;

const form_style = {margin:"100px"}