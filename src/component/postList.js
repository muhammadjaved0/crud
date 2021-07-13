import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deletePosts } from "../store/post/action/index";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewListModal from "./newListModal";
import EditListModal from "./editListModal";
import { RiDeleteBinLine } from "react-icons/ri";

const Crud = () => {
  const posts = useSelector((state) => state.post);
  console.log("post arry ", posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const onDelete = (deleteId) => {
    console.log("delete id===============", deleteId);
    debugger;
    dispatch(deletePosts(deleteId));
    console.log("delete runnning ================");
  };
  return (
    <>
      <NewListModal title="Add New Post" />
      <Container fluid>
        {console.log("here is posts", posts)}
        <Row className="justify-content-center ">
          {posts.posts.map((post) => {
            return (
              <>
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
                      <Card.Text className="d-flex justify-content-between">
                        <h4>{post.title}</h4>
                        <div className="float-right">
                          <EditListModal id={post.id} />
                          <RiDeleteBinLine color="blue" fontSize="1.1em"
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
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Crud;
