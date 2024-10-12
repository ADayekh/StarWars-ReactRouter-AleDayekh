import React, { useEffect, useState, useContext } from "react";
import { Card, ListGroup, Row, Col, Button} from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
function CardPlanetDetail() {

  const {theid} = useParams();
  const {store , actions} = useContext(Context);

  useEffect (() => {
    actions.getPlanetDetail(theid)
},[])


  return (
  <div className="container-fluid d-flex justify-content-center mt-5">
    <Card style={{ width: '38rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}/>
      <Card.Body>
          <Card.Title>{store.planetsDetail.name}</Card.Title>
          <Card.Text>
            You can read more about the planet in the tables. May the force be with you.
          </Card.Text>
        </Card.Body> 
          <Row>
            <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header><h6>Astrophysic data</h6></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>The diameter is: {store.planetsDetail.diameter} km</ListGroup.Item>
                      <ListGroup.Item>The gravity is: {store.planetsDetail.gravity}  </ListGroup.Item>
                      <ListGroup.Item>The orbital period is: {store.planetsDetail.orbital_period} days </ListGroup.Item>
                      <ListGroup.Item>The rotation period is:  {store.planetsDetail.rotation_period} hours</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
              <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header><h6>Superficial data</h6></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>The population number is: {store.planetsDetail.population} </ListGroup.Item>
                      <ListGroup.Item>The terrain is:  {store.planetsDetail.terrain}</ListGroup.Item>
                      <ListGroup.Item>The climate is:  {store.planetsDetail.climate}</ListGroup.Item>
                      <ListGroup.Item>The surface water is:  {store.planetsDetail.surface_water}</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
          </Row>
        <Card.Body>
        <Link to={`/planets`}><Button variant="warning">Return to Planet List</Button></Link>
        </Card.Body>
    </Card>
  </div>
  );

}

export {CardPlanetDetail};