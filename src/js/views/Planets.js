import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const CardPlanet = () => {
    const {store , actions} = useContext(Context);

    useEffect (() => {
        actions.getPlanets()
    },[])
    
    return (
     
        <div className="row justify-content-center">
            { store.planets.map((singlePlanet, index) => { 
            return ( 
                    <div className ="col-3 my-3" key ={index}>
                        <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${singlePlanet.uid}.jpg`}  />
                                <Card.Body>
                                                <Row className="mb-2">
                                                    <Col className="col-9">
                                                         <Card.Title>{singlePlanet.name}</Card.Title>
                                                     </Col>
                                                     <Col className="col-3">
                                                         <Button variant="dark" onClick={() => actions.addFavouriteItem(singlePlanet.name)}>💛</Button>
                                                     </Col>
                                                </Row>
                                <Card.Text></Card.Text>
                                <Link to={`/planets/${singlePlanet.uid}`}><Button variant="warning">Learn More</Button></Link>
                                </Card.Body>
                        </Card>
                    </div>   
                )})
            }
        </div>
        )
}

export {CardPlanet};