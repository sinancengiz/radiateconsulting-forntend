import React, { useReducer } from "react";
import { Form, Button} from 'react-bootstrap';
import * as ROUTES from '../../../constants/routes';
import { useHistory } from "react-router-dom";



const NewStoreForm = (props) => {

    const history = useHistory();
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        title: '',
        owner: '',
        }
      );
      const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({[name]: newValue});
      }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userInput.title)
        console.log(userInput.owner)
        const title = userInput.title;
        const owner = userInput.owner;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ title: title, owner: owner })
        };
        fetch('https://afternoon-refuge-74969.herokuapp.com/stores', requestOptions);
        history.push(ROUTES.HOME)
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