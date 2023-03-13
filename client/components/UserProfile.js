import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';

import { Container, Button, Col, Card, Table, Form, Modal } from 'react-bootstrap';

import { fetchOneUserAsync, selectUser, updateUserAsync } from '../slices/usersSlice';
import { useNavigate } from 'react-router-dom';
import UpdateUser from '../lists/updateUserForm';
import { async } from '../../public/bundle';

function UserProfile() {
    const {id} = useSelector((state) => state.auth);
    const user = useSelector(selectUser);
  	const dispatch = useDispatch()
    const navigate = useNavigate()

 
    useEffect(() => {
        dispatch(fetchOneUserAsync(id));
    }, [dispatch, id]);



    return (
    <div id="userProfile">
      <Container>
        <Col>
        <h1>Hello, {user.firstName} </h1>
        <img src={user.image} className="img-fluid rounded-start "style={{width:"240px"}} alt="Your picture"></img>
        <Card>
          <Card.Header>Pesonal Information 
          <Button variant="primary" onClick={()=> navigate("/update")}>
            Update
            </Button>
          <Button variant="primary" onClick={()=> navigate("/change_password")}>
            Change Password
            </Button>
            </Card.Header>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <br></br>
        <Card>
        <Card.Header>Appointments</Card.Header>
        {console.log(user)}
              {user.Appointments ? (
                  <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Service Name</th>
                      <th>Price</th>
                      <th>How long?</th>
                      <th>When Starts?</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   {user.Appointments.map((app)=>(
                    <tr key={app.id}>
                      <td>{app.Service.name}</td>
                      <td>${app.Service.price}</td>
                      <td>{app.Service.duration} min</td>
                      <td><Moment format="MMMM Do YYYY h:mm A">{app.start_time}</Moment></td>
                    </tr>
                   ))}
                </tbody>
              </Table>
              ): (
                <Card.Text>No Appointments yet</Card.Text>
              )}
        </Card>
        </Col>
      </Container>

		    
    </div>
  )
}

export default UserProfile