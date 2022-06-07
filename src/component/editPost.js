import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { editPost } from "../store/post/action/index";
import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const EditPost = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const watchFields = watch();

  useEffect(() => {}, [watchFields]);

  const onSubmit = (data) => {
    const updatdData = {
      ...data,
      id: props.id,
    };
    setIsModalVisible(false);
    dispatch(editPost(updatdData));
  };
  return (
    <>
      <EditOutlined
        style={{ fontSize: "1.1rem", color: "#08c" }}
        onClick={showModal}
      />
      <Modal
        title="Please fill the form"
        visible={isModalVisible}
        onCancel={handleCancel}
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

export default EditPost;
