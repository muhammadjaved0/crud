import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";


const NewUserModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("our data", data);
  };
  return (
    <>
      <Button className="mb-5" variant="primary" onClick={handleShow}>
        Add new user
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" {...register("title", { required: true })} placeholder="Enter user name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" {...register("body", { required: true })} type="text" placeholder="Enter description" />
            </Form.Group>
            <div className="form-group submit">
                    <input
                      type="submit"
                      value="Register"
                      className="ps-btn ps-btn--fullwidth ps-btn--black"
                    />
                  </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewUserModal;
