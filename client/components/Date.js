
import React from 'react';
import moment from 'moment';
import { Form } from 'react-bootstrap';

function MyComponent() {
  const now = new Date();
  const formattedDate = moment(now).format('MMM Do YYYY');
  const formattedTime = moment(now).format('h:mm a');
  
  return (
    <div>
      <Form.Label>Date: {formattedDate}</Form.Label>
      <Form.Label>Time: {formattedTime}</Form.Label>
    </div>
  );
}

export default MyComponent