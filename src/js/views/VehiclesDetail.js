import React, { useEffect, useState, useContext } from "react";
import { Card, ListGroup, Row, Col, Button} from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
function CardVehicleDetail() {

  const {theid} = useParams();
  const {store , actions} = useContext(Context);

  useEffect (() => {
    actions.getVehicleDetail(theid)
},[])


  return (
  <div className="container-fluid d-flex justify-content-center mt-5">
    <Card style={{ width: '38rem' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`}/>
      <Card.Body>
          <Card.Title>{store.vehiclesDetail.name}</Card.Title>
          <Card.Text>
            You can read more about the vehicle in the tables. May the force be with you.
          </Card.Text>
        </Card.Body> 
          <Row>
            <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header><h6>Technical data</h6></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>The manufacturer is: {store.vehiclesDetail.manufacturer}</ListGroup.Item>
                      <ListGroup.Item>The model is: {store.vehiclesDetail.model}</ListGroup.Item>
                      <ListGroup.Item>The vehicle class is: {store.vehiclesDetail.vehicle_class}</ListGroup.Item>
                      <ListGroup.Item>The speed is: {store.vehiclesDetail.max_atmosphering_speed} km/h</ListGroup.Item>
                      <ListGroup.Item>The capacity is: {store.vehiclesDetail.cargo_capacity} kg</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
              <Col ClassName="col-6">
                <Card  style={{ width: '18rem' }}>
                    <Card.Header><h6>General data</h6></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>The length is: {store.vehiclesDetail.length} m</ListGroup.Item>
                      <ListGroup.Item>The consumables are: {store.vehiclesDetail.consumables}</ListGroup.Item>
                      <ListGroup.Item>The capacity of passengers is: {store.vehiclesDetail.cargo_capacity}</ListGroup.Item>
                      <ListGroup.Item>The crew is: {store.vehiclesDetail.crew}</ListGroup.Item>
                    </ListGroup>
                </Card>
              </Col>
          </Row>
        <Card.Body>
        <Link to={`/vehicles`}><Button variant="warning">Return to Vehicle List</Button></Link>
        </Card.Body>
    </Card>
  </div>
  );

}

export {CardVehicleDetail};