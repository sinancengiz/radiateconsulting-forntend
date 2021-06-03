import React, { useState, useEffect, useReducer } from "react";
import { Form, Button} from 'react-bootstrap';
import * as ROUTES from '../../../constants/routes';
import { useHistory } from "react-router-dom";



const NewTableForm = (props) => {

    const history = useHistory();
    const storeId = props.match.params.store_id;
    const [products, setProducts] = useState([]);
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        quantity: 1,
        productId: 1,
        }
      );

      // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        let url = `https://afternoon-refuge-74969.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(json => setProducts(json));
    });

    let product_options = [];
    if (products.length > 0) {
      for (let i = 0; i < products.length; i++){
        product_options.push(
            <option value={products[i].id}>{products[i].name}</option>      
        )
      }
    }

    let quantity_options = [];
    for (let i = 1; i < 9; i++){
        quantity_options.push(
            <option value={i}>{i}</option>      
        )
    }
    
    const handleChange = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({[name]: newValue});
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const quantity = userInput.quantity;
        const productId = userInput.productId;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ store_id: storeId, product_id: productId, quantity: quantity })
        };
        fetch(`https://afternoon-refuge-74969.herokuapp.com/stores/${storeId}/store_products`, requestOptions);
        history.push(`/stores/${storeId}`)
    }

    return(
        <Form style={form_style } onSubmit={handleSubmit} >
            <Form.Label>New Table Form</Form.Label>
            <Form.Group controlId="ProductId" >
                <Form.Control as="select" name="productId" onChange={handleChange} value={userInput.productId}>
                    {product_options}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="Quantity" >
                <Form.Control as="select" name="quantity" onChange={handleChange} value={userInput.quantity}>
                    {quantity_options}
                </Form.Control>
            </Form.Group>
            <Button href={ROUTES.HOME} variant="primary" style={{marginRight:"20px"}}>Back</Button>
            <Button variant="danger" type="submit">
                Open Table
            </Button>
        </Form>
    )
};

export default NewTableForm;

const form_style = {margin:"100px"}