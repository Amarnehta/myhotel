// src/components/Slider.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Slider = () => {
  const carouselData = [
    {
      id: 1,
      image: require('../images/carouselimg1.jpg'),
    },
    {
      id: 2,
      image: require('../images/carouselimg2.jpg'),
    },
    {
      id: 3,
      image: require('../images/carouselimg3.jpg'),
    },
    {
      id: 4,
      image: require('../images/carouselimg4.jpg'),
    },
    {
      id: 5,
      image: require('../images/carouselimg5.jpg'),
    },
  ];
  return (
    <Carousel className="slider-container" interval={5000} pause={false} controls={false} indicators={false}>
      {carouselData.map((carousel) => (
        <Carousel.Item key={carousel.id}>
          <img
            className="d-block w-100  slider-item-img"
            src={carousel.image}
            alt={`slide ${carousel.id}`}
             
          />

        </Carousel.Item>
      ))}
    </Carousel>

  );
};

export default Slider;
