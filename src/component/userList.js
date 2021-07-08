import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/post/action/index";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Crud = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          {users.users.map((user) => {
            return (
              <Col sm={2} md={3} lg={3} key={user.id}>
                <Card
                  variant="primary"
                  className="mb-4 shadow bg-white rounded"
                >
                  <Card.Header>{user.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.phone}</Card.Text>
                    <Card.Text>{user.address.city}</Card.Text>
                    <Card.Text>{user.address.street}</Card.Text>
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
