import React from "react";

import TestimonialsCard from "./TestimonialsCard";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import "../components/styles/TestimonialsCard.css";

import image1 from "../components/assets/1.jpg";
import image2 from "../components/assets/2.jpg";
import image3 from "../components/assets/3.jpg";
import image4 from "../components/assets/4.jpg";
//  -----------Using map function---------------
const TestimonialsArray = [
  {
    id: 1,
    image: image1,
    title: " Ali ",
    rating: "4.0",
    description: "This is the best Mediterranean food that I've ever had.",
    order: "Order a delivery",
  },
  {
    id: 2,
    image: image2,
    title: "Ahmed",
    rating: "4.5",
    description:
      "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!.",
    order: "Order a delivery",
  },
  {
    id: 3,
    image: image4,
    title: "Ahmed ",
    rating: "5.0",
    description:
      "'ve had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    order: "Order a delivery",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="Testimonial-card-container">
      <div className="Testimonial-card-containe">
        <Container fluid="sm">
          <div className="title-holder">
            <Carousel col={3} row={1}>
              {TestimonialsArray.map((tst) => {
                return (
                  <Carousel.Item>
                    <TestimonialsCard
                      id={tst.id}
                      title={tst.title}
                      image={tst.image}
                      description={tst.description}
                      rating={tst.rating}
                    />
                  </Carousel.Item>
                );
              })}
             
            </Carousel>
          </div>
        </Container>
      </div>
    </section>
  );
};


//------  using  seaparate data without array mappping" ---------------
/* 
const Testimonials = () => {
    return (
      <section id="testimonials" className="Testimonial-card-container">
        <div className="Testimonial-card-containe">
          <Container fluid="sm">
            <div className="title-holder">
              <Carousel col={3} row={1}>
                
                 
                    <Carousel.Item>
                      <TestimonialsCard
                        id="1" 
                        title="Micheal well"
                        image={image1}
                        description="The food here really refreshed me after a late night shift
                        at the local supply depot"
                        rating="5.0"
                      />
                    </Carousel.Item>
                     <Carousel.Item>
                     <TestimonialsCard
                       id="2" 
                       title="Aliyana well"
                       image={image3}
                       description="This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!."
                       rating="5.0"
                     />
                   </Carousel.Item>
                    <Carousel.Item>
                    <TestimonialsCard
                      id="3" 
                      title="Alex Wall"
                      image={image4}
                      description="The food here was fire, the best of best mediterranean . will visit aggain soon."
                      rating="5.0"
                    />
                  </Carousel.Item>
                 
                
               
              </Carousel>
            </div>
          </Container>
        </div>
      </section>
    );
  };
  */
export default Testimonials;
