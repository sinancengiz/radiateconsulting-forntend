import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Product from "../Product"
import tableImage from '../../images/table.png';

const Table = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(props.quantity);
  const [tableId, setTableId] = useState(props.tableId);

  useEffect(() => {
    // Update the document title using the browser API
    let url = `https://afternoon-refuge-74969.herokuapp.com/products/${props.productId}`;
    fetch(url)
      .then(res => res.json())
      .then(json => setProduct(json));
  });

  const handleDeleteTable = async () =>{
    console.log(props)
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    };
    await fetch(`https://afternoon-refuge-74969.herokuapp.com/stores/${props.storeId}/store_products/${props.tableId}`, requestOptions);
    window.location.reload(false);
  }

  const handleSell = () => {
    if(quantity>0){
      let dummyQuantity = quantity-1
      setQuantity(dummyQuantity)
      const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ quantity: dummyQuantity })
      };
      fetch(`https://afternoon-refuge-74969.herokuapp.com/stores/${props.storeId}/store_products/${tableId}`, requestOptions);
      if(dummyQuantity == 0 ){
        alert(`You just sold last ${product.name} in the table`)
      }
    }else{
      alert(`There is no ${product.name} in the table`)
    }
  }

  const handleBuy = () => {
    if(quantity<8){
      console.log("buy")
      console.log(props.storeId)
      console.log(props.tableId)
      console.log(quantity+1)
      let dummyQuantity = quantity+1
      setQuantity(dummyQuantity)
      const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ quantity: dummyQuantity })
      };
      fetch(`https://afternoon-refuge-74969.herokuapp.com/stores/${props.storeId}/store_products/${props.tableId}`, requestOptions);

    }else{
      alert(`${product.name} table is Full`)
    }
  }
  return (
    <div >
      <img style={{height:"200px",width:"250px", margin:"20px"}} src={tableImage} alt="Logo" />
      {product? <Product productName={product.name} quantity={quantity}></Product> : null}      
      <Button className="Table-Delete-Button" onClick={handleDeleteTable} variant="danger" >Delete Table</Button>
      <Button className="Sell-Button" onClick={handleSell} >Sell</Button>
      <Button className="Buy-Button" onClick={handleBuy} >Buy</Button>
    </div>
  )
};

export default Table;
  