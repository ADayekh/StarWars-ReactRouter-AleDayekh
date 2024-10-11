import React, { useEffect, useState, useContext } from "react";
import { Card, Col, ListGroup, Row, Button} from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
function CardChracterDetail() {

  const {theid} = useParams();
  const {store , actions} = useContext(Context);

  useEffect (() => {
    actions.getCharacterDetail(theid)
},[])



  return (
  <div className="container-fluid d-flex justify-content-center mt-5">
    <Card style={{ width: '38rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}/>
        <Card.Body>
          <Card.Title> {store.chractersDetail.name}</Card.Title>
          <Card.Text>
          You can read more about the chracter in the tables. May the force be with you.
          </Card.Text>
        </Card.Body> 
          <Row>
            <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header>Physical data</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>The mass is: {store.chractersDetail.mass} kg</ListGroup.Item>
                      <ListGroup.Item>The height is: {store.chractersDetail.height} cm</ListGroup.Item>
                      <ListGroup.Item> The hair color is: {store.chractersDetail.hair_color}</ListGroup.Item>
                      <ListGroup.Item> The skin color is: {store.chractersDetail.skin_color}</ListGroup.Item>
                      <ListGroup.Item>The eyes color is: {store.chractersDetail.eye_color}</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
              <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header>Elemental data</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>The gender is: {store.chractersDetail.gender}</ListGroup.Item>
                      <ListGroup.Item>The birth year is: {store.chractersDetail.birth_year}</ListGroup.Item>
                      <ListGroup.Item>The creation of the character is: {store.chractersDetail.created}</ListGroup.Item>
                      <ListGroup.Item>The last edition was in: {store.chractersDetail.edited}</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
          </Row>
        <Card.Body>
        <Link to={`/chracters`}><Button>Return to Character List</Button></Link>
        </Card.Body>
    </Card>
  </div>
  );

}

export {CardChracterDetail};