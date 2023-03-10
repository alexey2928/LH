import React from 'react'
import { Card, Media } from 'react-bootstrap';


function About() {
  return (
    <div>
      <Card>
          <Card.Img
            // width={1024}
            // height={768}
            className="mr-3"
            src="https://images.unsplash.com/photo-1596704285467-74840223c121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            alt="my image"
          />
        <Card.Body>
          <Card.Title>About</Card.Title>
          <Card.Text>
            I am a skilled professional who specializes in the application of makeup for various purposes, such as fashion, film, television, or special events. A makeup artist uses their creativity and expertise to create a desired look for their clients, whether it's a natural or glamorous look, or a character makeup for film or theater.
            I have a wide range of skills, including knowledge of different skin types and tones, the ability to use makeup products and tools effectively, and a strong eye for detail. They also stay up-to-date with the latest makeup trends and techniques, as well as safety and sanitation practices.
            I am trained to work with clients to understand their individual needs and preferences, as well as to provide expert advice on the best products and techniques to use to achieve their desired look. They work closely with clients to ensure their satisfaction and make sure that the makeup complements their overall style and aesthetic.
            I worked independently or as part of a team, such as in the fashion or film industry. They may also offer makeup services for weddings, special events, or personal makeup lessons.
            Overall, I am a highly skilled and creative professional who can help their clients look and feel their best. Whether it's for a special occasion or a professional production, a makeup artist can bring their expertise to help their clients achieve the perfect look.
          </Card.Text>
        </Card.Body>
        
      </Card>
      {/* <Card style={{ width: '50%', height:"50%" }}>
      <Card.Img variant="left" src="https://images.unsplash.com/photo-1596704285467-74840223c121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
        I am a skilled professional who specializes in the application of makeup for various purposes, such as fashion, film, television, or special events. A makeup artist uses their creativity and expertise to create a desired look for their clients, whether it's a natural or glamorous look, or a character makeup for film or theater.
        I have a wide range of skills, including knowledge of different skin types and tones, the ability to use makeup products and tools effectively, and a strong eye for detail. They also stay up-to-date with the latest makeup trends and techniques, as well as safety and sanitation practices.
        I am trained to work with clients to understand their individual needs and preferences, as well as to provide expert advice on the best products and techniques to use to achieve their desired look. They work closely with clients to ensure their satisfaction and make sure that the makeup complements their overall style and aesthetic.
        I worked independently or as part of a team, such as in the fashion or film industry. They may also offer makeup services for weddings, special events, or personal makeup lessons.
        Overall, I am a highly skilled and creative professional who can help their clients look and feel their best. Whether it's for a special occasion or a professional production, a makeup artist can bring their expertise to help their clients achieve the perfect look.
        </Card.Text>
      </Card.Body>
    </Card> */}
    </div>
  )
} 

export default About