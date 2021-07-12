import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { editPosts } from "../store/post/action/index";

const EditListModal = (props) => {
    console.log("props id" , props.id)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const watchFields = watch();

  // useEffect(() => {
  //    console.log("watchFields", watchFields);
  // }, [watchFields])

  const onSubmit = (data) => {
    const updatdData = {
        ...data,
        id: props.id
    }
    console.log("updatd data",updatdData);
    setShow(false);
    console.log("our data", data);
    dispatch(editPosts(updatdData));
  };
  console.log("run============");
  return (
    <>
      <Button className="mb-5" variant="primary" onClick={handleShow}>
       Edit post
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Please fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                {...register("title", { required: true })}
                placeholder="Enter user name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                {...register("body", { required: true })}
                type="text"
                placeholder="Enter description"
              />
            </Form.Group>
            <div className="form-group submit">
              <input
                type="submit"
                value="submit"
                className="btn btn-success btn-block"
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditListModal;
