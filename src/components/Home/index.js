import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import { useHistory } from "react-router-dom";
import store_image from '../../images/store.jpg'


const Home = (props) => {
  const [stores, setStores] = useState([]);
  const history = useHistory();
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    let url = `https://afternoon-refuge-74969.herokuapp.com/stores`;
    fetch(url)
      .then(res => res.json())
      .then(json => setStores(json));
  });

  let show_stores = [];
  if (stores.length > 0) {
    for (let i = 0; i < stores.length; i++){
        show_stores.push(
            <a href={`/stores/${stores[i].id}`} className="Store-Link" >
              <img className='Store-Button-component' src={store_image} alt={"City"} />
              <p className="Store-Title">{stores[i].title}</p>
            </a>
        )
    }
  }

  return(
      <div className='Home-component'>
        { show_stores }
        {stores.length < 5? <Button className="Store-Button-component" href={ROUTES.NEWSTOREFORM} variant="primary" ><p style={{paddingTop:50}}>Open New Store</p></Button>:null}
      </div>
)};

export default Home;
  