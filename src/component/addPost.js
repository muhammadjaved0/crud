import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { addPost } from "../store/post/action/index";

const AddPost = ({ show, onCancel }) => {
  const dispatch = useDispatch();
  const {
    register,
    watch,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const watchFields = watch();

  useEffect(() => {}, [watchFields]);

  const onSubmit = (data) => {
    dispatch(addPost(data));
    onCancel();
  };
  return (
    <>
      <Modal
        title="Please fill the form"
        visible={show}
        onCancel={onCancel}
        footer={null}
      >
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>userId</Form.Label>
            <Form.Control
              type="number"
              {...register("userId", { required: true })}
              type="number"
              placeholder="Enter userId"
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
      </Modal>
    </>
  );
};

export default AddPost;
