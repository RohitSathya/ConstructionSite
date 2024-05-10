import React from 'react'
import './carousel.css'
import cb1 from '../images/cb1.jpg'
import cb2 from '../images/cb2.jpg'
import cb3 from '../images/cb3.jpg'
import { useState,useEffect } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'// Import Bootstrap CSS
import { Carousel } from 'react-bootstrap';
export default function carousel() {
  const [index, setIndex] = useState(0);

  // Advance to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const images = [
    cb1,cb2,cb3
    // Add more image paths as needed
  ];
  return (
    <>
     <Carousel activeIndex={index} onSelect={() => {}}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={image}  height='850px'
            alt={`Slide ${idx}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
   
    </>
  )
}
