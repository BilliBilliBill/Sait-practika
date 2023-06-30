import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forestImg1 from '../kartinki/1.png'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={forestImg1}
            alt="Forest"
            style={{ maxWidth: '100%', height: '630' }}
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}
