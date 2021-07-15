import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost } from "../store/post/action/index";
import Container from "react-bootstrap/Container";
import { Button, Row, Col, Card, Spin } from "antd";
import AddPost from "./addPost";
import EditPost from "./editPost";
import { DeleteOutlined } from "@ant-design/icons";

const PostList = () => {
  const posts = useSelector((state) => state.post);
  const loader = useSelector((state) => state.post.loadingPosts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const onDelete = (deleteId) => {
    dispatch(deletePost(deleteId));
  };
  return (
    <>
      <Button
        className="justify-content-center ml-5 mb-4"
        type="primary"
        onClick={handleShow}
      >
        Add new post
      </Button>
      <AddPost show={show} onCancel={handleClose} />
      {loader ? (
        <div className="spinner-center">
          <Spin />
        </div>
      ) : (
        ""
      )}
      <Container fluid>
        <Row className="justify-content-center ">
          {posts.posts.map((post) => {
            return (
              <Col
                key={post.id}
                md={post.id % 2 === 0 ? 5 : 5}
                className="mb-4 ml-4"
              >
                <Card title={post.title}>
                  <div className="float-right">
                    <EditPost id={post.id} />
                    <DeleteOutlined
                      style={{ fontSize: "1.1rem", color: "#FF0000" }}
                      onClick={() => {
                        onDelete(post.id);
                      }}
                    />
                  </div>
                  <p>{post.body}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default PostList;
