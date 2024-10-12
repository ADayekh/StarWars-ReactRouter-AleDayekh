import React, { useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
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
                    <div className ="col-3 my-3" key ={index}>
                        <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${singleVehicle.uid}.jpg`}  />
                                <Card.Body>
                                <Card.Title>{singleVehicle.name}</Card.Title>
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