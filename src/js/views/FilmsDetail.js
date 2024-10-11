import React, { useEffect, useState, useContext } from "react";
import { Card, ListGroup, Row, Col, Button} from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
function CardFilmDetail() {

  const {theid} = useParams();
  const {store , actions} = useContext(Context);

  useEffect (() => {
    actions.getFilmDetail(theid)
},[])



  return (
  <div className="container-fluid d-flex justify-content-center mt-5">
    <Card style={{ width: '38rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/films/${theid}.jpg`}/>
      <Card.Body>
          <Card.Title>{store.filmsDetail.title}</Card.Title>
          <Card.Text>
            You can read more about the film in the tables. May the force be with you.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to={`/chracters`}><Button>Return to Character List</Button></Link>
        </Card.Body>
    </Card>
  </div>
  );

}

export {CardFilmDetail};