import React, { useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const CardVehicle = () => {
    const {store , actions} = useContext(Context);

    useEffect (() => {
        actions.getVehicles()
    },[])
    
    return (
     
        <div className="row justify-content-center">
            { store.vehicles.map((singleVehicle, index) => { 
            return ( 
                    <div className ="col-sm-12 col-md-6 col-lg-3 my-3" key ={index}>
                        <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${singleVehicle.uid}.jpg`}  />
                                <Card.Body>
                                                <Row className="mb-2">
                                                    <Col className="col-9">
                                                         <Card.Title>{singleVehicle.name}</Card.Title>
                                                     </Col>
                                                     <Col className="col-3">
                                                         <Button variant="dark" onClick={() => actions.addFavouriteItem(singleVehicle.name)}>💛</Button>
                                                     </Col>
                                                </Row>
                                <Card.Text></Card.Text>
                                <Link to={`/vehicles/${singleVehicle.uid}`}><Button variant="warning">Learn More</Button></Link>
                                </Card.Body>
                        </Card>
                    </div>   
                )})
            }
        </div>
        )
}

export {CardVehicle};