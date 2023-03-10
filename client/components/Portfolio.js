import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import port1 from '../../public/asset/port1.jpg'

function Portfolio() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" id="portfolio"
          src="https://images.unsplash.com/photo-1595784279873-62b38b5e7cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3774&q=80"
          //src={port1}
          alt="Angela"
        />
        <Carousel.Caption>
          <h3>Express Make-up</h3>
          <p>Express makeup is a quick and easy way to look put-together and polished in just a few minutes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" id="portfolio"
          src="https://images.unsplash.com/photo-1585433405076-9626d637cc83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Evening Make-up</h3>
          <p>Evening makeup is a glamorous and bold look that is perfect for special occasions and events.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" id="portfolio"
          src="https://images.unsplash.com/photo-1591570915688-e1b5292de457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nude Make-up</h3>
          <p>
            Nude makeup is a natural, minimalistic look that enhances your features without looking too heavy.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Portfolio