import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

const Home = (props) => {
  const [stores, setStores] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let url = `https://afternoon-refuge-74969.herokuapp.com/stores`;
    fetch(url)
      .then(res => res.json())
      .then(json => this.setStore(json));
  });

  console.log(stores)
  return(
      <div>
        <h1>Hello, Home Page</h1>
        <p>edited</p>
        { //stores? <Button  href={`/stores/${stores[0].id}`} variant="success">{"Store Title"}</Button> : <h1>No store</h1>
        }
        
      </div>
)};

export default Home;
  