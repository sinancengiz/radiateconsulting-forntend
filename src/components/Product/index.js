import React, { useState, useEffect } from "react";
import banana_image from '../../images/banana.jpg';
import apple_image from '../../images/apple.jpg';
import orange_image from '../../images/orange.jpg';
import watermelon_image from '../../images/watermelon.jpg';
import melon_image from '../../images/melon.png';
import cherry_image from '../../images/cherry.jpg';
import strawberry_image from '../../images/strawberry.jpg';

const Store = (props) =>{
  const [image, setImage] = useState();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    switch(props.productName) {
      case "Banana":
        setImage(banana_image)
        break;
      case "Apple":
        setImage(apple_image)
        break;
      case "Orange":
        setImage(orange_image)
        break;
      case "Cherry":
        setImage(cherry_image)
        break;
      case "Strawberry":
        setImage(strawberry_image)
        break;
      case "Watermelon":
        setImage(watermelon_image)
        break;
      default:
        setImage(melon_image)
    }
  });
 
  let show_products = [];
  if (props.quantity > 0) {
    for (let i = 0; i < props.quantity; i++){
      show_products.push(
        <img style={{height:"30px", width:"30px"}} src={image} alt={"Product Image"}></img>
      )
    }
  }

  return (
    <div className="Product-Display">
      {show_products}
    </div>
  )
};

export default Store;
  