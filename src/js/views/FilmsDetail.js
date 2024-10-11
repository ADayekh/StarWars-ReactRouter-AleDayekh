import React, { useEffect, useState, useContext } from "react";
import { Card, ListGroup} from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

function CardFilmDetail() {

  const uid = useParams();
  const {store , actions} = useContext(Context);

  useEffect (() => {
    actions.getFilmDetail(uid)
},[])



  return (
  <div className="container-fluid d-flex justify-content-center mt-5">
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}/>
        <Card.Body>
          <Card.Title> {store.filmsDetail.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
  </div>
  );

}

export {CardFilmDetail};