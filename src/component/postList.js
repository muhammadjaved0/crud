import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/post/action/index";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewListModal from "./newListModal";
const Crud = () => {
  const posts = useSelector((state) => state.post);
  console.log("post arry " , posts)
  debugger
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <NewListModal />
      <Container fluid>
        {console.log("here is posts", posts)}
        <Row className="justify-content-center">
          {posts.posts.map((post) => {
            return (
              <Col
                md={post.id % 2 === 0 ? 3 : 4}
                key={post.id}
                className="mb-4"
              >
                <Card
                  variant="primary"
                  className="h-100 shadow bg-white rounded text-left"
                >
                  <Card.Body>
                    <Card.Text>
                      <h4>{post.title}</h4>
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

export default Crud;
