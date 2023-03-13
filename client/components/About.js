import React from 'react'
import { Card, Col, Row} from 'react-bootstrap';


function About() {
  return (
   

      <Card id="about">
        <Row className="align-items-center">
        {/* <Col xs={6} md={4} lg={6}> */}
        <Col>
          <Card.Img
            // width={1024}
            // height={768}
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            className="mr-3"
            src="https://images.unsplash.com/photo-1596704285467-74840223c121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            alt="my image"
          />
          </Col>
      {/* <Col xs={12} md={8}> */}
      <Col>
        <Card.Body >
          <Card.Title>About</Card.Title>
          <Card.Text>
            <p>I am a skilled professional who specializes in the application of makeup for various purposes, such as fashion, film, television, or special events. A makeup artist uses their creativity and expertise to create a desired look for their clients, whether it's a natural or glamorous look, or a character makeup for film or theater.</p>
            <p>I have a wide range of skills, including knowledge of different skin types and tones, the ability to use makeup products and tools effectively, and a strong eye for detail. They also stay up-to-date with the latest makeup trends and techniques, as well as safety and sanitation practices.</p>
            <p>I am trained to work with clients to understand their individual needs and preferences, as well as to provide expert advice on the best products and techniques to use to achieve their desired look. They work closely with clients to ensure their satisfaction and make sure that the makeup complements their overall style and aesthetic.</p>
            <p>I worked independently or as part of a team, such as in the fashion or film industry. They may also offer makeup services for weddings, special events, or personal makeup lessons.</p>
            <p>Overall, I am a highly skilled and creative professional who can help their clients look and feel their best. Whether it's for a special occasion or a professional production, a makeup artist can bring their expertise to help their clients achieve the perfect look.</p>
          </Card.Text>
        </Card.Body>
        </Col>
      </Row>
      </Card>
 
  )
} 

export default About