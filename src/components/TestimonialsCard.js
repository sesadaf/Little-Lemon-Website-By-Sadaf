import React from "react";

import Card from "react-bootstrap/Card";
import "../components/styles/TestimonialsCard.css";

import { Item } from "react-grid-carousel";
const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem',
      alignItems:'center',
    },
    cardImage: {
       
      objectFit: 'contain',
      padding:0.5,
      
      borderRadius: 200,
      width:'25rem',
      height:'25rem'
    }
  }
const TestimonialsCard = (props) => {
  console.log(props);
  return (
    <section>
      
      <Card className="text-center image-container">
       
        <Card.Img variant="top" src={props.image} as="img"style={styles.cardImage}/>
       
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          
    
            <Card.Text>{props.rating} <span className="star">&#9733;</span>  </Card.Text>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
     
      
    </section>
  );
};
export default TestimonialsCard;
