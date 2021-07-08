import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/post/action/index";
import Card from "react-bootstrap/Card";

function Crud() {
  const users = useSelector((state) => state.user);
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      {console.log("here is user", users)}
      {/* <button onClick = {()=>dispatch(getUser())} > + </button> */}
    </div>
  );
}

export default Crud;
