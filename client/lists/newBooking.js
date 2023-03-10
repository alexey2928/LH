import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const services = ['Service A', 'Service B', 'Service C'];
const durations = [30, 60, 90];

function newBooking() {
  const [service, setService] = useState(services[0]);
  const [duration, setDuration] = useState(durations[0]);
  const [datetime, setDatetime] = useState(null);

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(Number(event.target.value));
  };

  const handleDatetimeChange = (event) => {
    setDatetime(new Date(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ service, duration, datetime });
    // Submit the form data to the server
  };

  const getDateTimeOptions = () => {
    const options = [];

    for (let hour = 9; hour <= 16; hour++) {
      for (let minute = 0; minute < 60; minute += duration) {
        const date = new Date();
        date.setHours(hour, minute, 0, 0);
        options.push(
          <option key={date.toISOString()} value={date.toISOString()}>
            {date.toLocaleString()}
          </option>
        );
      }
    }

    return options;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="service">
        <Form.Label>Service</Form.Label>
        <Form.Control as="select" value={service} onChange={handleServiceChange}>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="duration">
        <Form.Label>Duration (minutes)</Form.Label>
        <Form.Control as="select" value={duration} onChange={handleDurationChange}>
          {durations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="datetime">
        <Form.Label>Date and Time</Form.Label>
        <Form.Control as="select" value={datetime?.toISOString()} onChange={handleDatetimeChange}>
          <option value="">Select a date and time</option>
          {getDateTimeOptions()}
        </Form.Control>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default newBooking