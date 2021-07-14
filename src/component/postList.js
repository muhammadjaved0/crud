import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePost } from "../store/post/action/index";
import { Button } from "antd";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  }, []);

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
        <div
          className="spinner-border spinner-center h-31 w-31 l-50 t-50"
          role="status"
        >
          <span className="sr-only">Loading...</span>
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
                md={post.id % 2 === 0 ? 3 : 4}
                className="mb-4"
              >
                <Card
                  variant="primary"
                  className="h-100 shadow bg-white rounded text-left"
                >
                  <Card.Body>
                    <Card.Text className="d-flex justify-content-between">
                      {post.title}
                      <div className="float-right">
                        <EditPost id={post.id} />
                        <DeleteOutlined
                          style={{ fontSize: "1.1rem", color: "#FF0000" }}
                          onClick={() => {
                            onDelete(post.id);
                          }}
                        />
                      </div>
                    </Card.Text>
                    <Card.Text>{post.body}</Card.Text>
                  </Card.Body>
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
