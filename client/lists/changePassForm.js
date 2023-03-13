import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

import { changePassAsync, selectUser} from '../slices/usersSlice';
import { useNavigate } from 'react-router-dom';

function ChangePass() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useSelector((state) => state.auth);
    const user = useSelector(selectUser);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [password, setPassword] = useState("");

  const handleBack = (e) => {
    e.preventDefault();
    handleClose()
    navigate("/dashboard")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      changePassAsync( {password:password, id:id })
    );
    handleClose()
    navigate("/dashboard")
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="change password"
                autoFocus
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBack}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangePass;