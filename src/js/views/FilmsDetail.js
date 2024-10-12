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
          <Row>
            <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header><h6>Cinematic data</h6></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Fue dirigida por: {store.filmsDetail.director}</ListGroup.Item>
                      <ListGroup.Item>Fue producida por: {store.filmsDetail.producer}</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
              <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header><h6>Elemental data</h6></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Su número en la saga es el: {store.filmsDetail.episode_id}</ListGroup.Item>
                      <ListGroup.Item>Su fecha de estreno fue el día: {store.filmsDetail.release_date}</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
          </Row>
        <Card.Body>
        <Link to={`/films`}><Button variant="warning">Return to Film List</Button></Link>
        </Card.Body>
    </Card>
  </div>
  );

}

export {CardFilmDetail};