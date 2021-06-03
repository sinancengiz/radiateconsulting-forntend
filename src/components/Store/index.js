import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import { useHistory } from "react-router-dom";
import Table from "../Table"

const Store = (props) =>{
  const storeId = props.match.params.store_id;
  const [tables, setTables] = useState([]);
  const history = useHistory();
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let url = `https://afternoon-refuge-74969.herokuapp.com/stores/${storeId}/store_products`;
    fetch(url)
      .then(res => res.json())
      .then(json => setTables(json));
  });

  const handleDeleteStore = () =>{
    console.log(storeId)
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    };
    fetch(`https://afternoon-refuge-74969.herokuapp.com/stores/${storeId}`, requestOptions);
    history.push(ROUTES.HOME)
  }

  let show_tables = [];
  if (tables.length > 0) {
    for (let i = 0; i < tables.length; i++){
        show_tables.push(
          <div className="Store-Link">
            <Table storeId={tables[i].store_id} productId={tables[i].product_id} tableId={tables[i].id} quantity={tables[i].quantity}></Table>
          </div>
            
        )
    }
  }

 
  return(
    <div className='Store-component'>
      <div >
        {show_tables}
        {tables.length < 4? <Button className="Table-Button-component" href={`/newtableform/${storeId}`} variant="info" ><p style={{paddingTop:75}}>Add New Product</p></Button>:null}
      </div>
      <div style={{textAlign:"center", padding:"20px",   position: "absolute",  top: "10px",  right: "20px"}}>
        <Button onClick={handleDeleteStore} variant="danger">This Store is not making enough money Just Close the Store</Button>
        <Button style={{marginLeft:"10px"}} href={ROUTES.HOME} >Back to Home Page</Button>
      </div>
    </div>
)};

export default Store;
  