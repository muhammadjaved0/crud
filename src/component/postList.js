import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts , deletePosts} from "../store/post/action/index";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewListModal from "./newListModal";
import EditListModal from "./editListModal";
import { Button } from "react-bootstrap";
const Crud = () => {
  const posts = useSelector((state) => state.post);
  console.log("post arry " , posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onDelete = (deleteId) => {
  console.log("delete id===============",deleteId)
  debugger
  dispatch(deletePosts(deleteId));
  console.log("delete runnning ================")
  }
  return (
    <>
      <NewListModal title = "Add New Post"/>
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
                  <EditListModal id = {post.id}/>
                  <Button onClick = {() => {onDelete(post.id)}}>DELETE POST</Button>
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
