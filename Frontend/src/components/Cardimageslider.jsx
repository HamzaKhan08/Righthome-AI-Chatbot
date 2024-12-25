import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardImageSlider() {
  return (
    <div className="card-slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65fa5ee3751459f6af83e3a3_modern%20house%20ideas.webp"
            alt="First Slide"
          />
          <Carousel.Caption>
            <h5>Property Image Name</h5>
            <p>Details if we want to add then !</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/thumbnails/023/309/311/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg"
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h5>Property Image Name</h5>
            <p>Details if we want to add then !</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/beautiful-house-large-front-yard-lush-green-lawn-has-blue-exterior-white-trim-gray-roof-there-four-bedrooms-323792207.jpg"
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h5>Property Image Name</h5>
            <p>Details if we want to add then !</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
