// import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Contact.css";
import Button from '../Button/Button'

const ContForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [thanks, setThanks] = useState({
    active: false,
    message: "",
  });

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log("********DATA INSIDE CHANGE HANDLER *******");
    console.log(data);
  };
  console.log(data);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("data object");
    // axios.post('http://localhost:8000/api/contact/', data)
    // .then()
    // .catch();
    console.log(data);
    setData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setThanks({
      active: true,
      message: "Thank you for contacting me!",
    });
  };

  return (
    <div className="contact">
      {thanks.active ? (
        <div>{thanks.message}</div>
      ) : (
        <Form onSubmit={submitHandler}>
          <div className="form-group container p-5" id='inputContainer'>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={changeHandler}
              value={data.firstName}
            />
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={changeHandler}
              value={data.lastName}
            />
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              onChange={changeHandler}
              value={data.email}
            />
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={changeHandler}
              value={data.phone}
            />
            <input
              className="form-control"
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={changeHandler}
              value={data.subject}
            />
            <textarea
              className="form-control"
              type="text"
              name="message"
              placeholder="Message"
              onChange={changeHandler}
              value={data.message}
            />
            <Button type="submit" className='btn' buttonStyle='btn--form'
            buttonSize='btn--large'>Submit</Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default ContForm;
