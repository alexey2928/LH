import React, { useEffect } from 'react'
import { logout } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { Container, Button, Col, Card, Table } from 'react-bootstrap';

import { fetchOneUserAsync, selectUser } from '../slices/usersSlice';

function UserProfile() {
    const {id} = useSelector((state) => state.auth);
    const user = useSelector(selectUser);
	const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOneUserAsync(id));
      }, [dispatch]);
  
    return (
    <div>
      <Container>
        <Col>
        <h1>Hello, {user.firstName} </h1>
        <img src={user.image} className="img-fluid rounded-start "style={{width:"240px"}} alt="Your picture"></img>
        <Card>
          <Card.Header>Pesonal Information <Button>Update</Button></Card.Header>
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
        <Card>
        <Card.Header>Appointments</Card.Header>
              {!user.Appointments ? (
                <Card.Text>No Appointments yet</Card.Text>
              ): (
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
                   <td>{app.start_time}</td>
                 </tr>
                ))}
             </tbody>
           </Table>
              )}
        </Card>
        </Col>
      </Container>

		    
    </div>
  )
}

export default UserProfile