import React, { useEffect, useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

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
                                <Card.Title>{singlePlanet.name}</Card.Title>
                                <Card.Text></Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                        </Card>
                    </div>   
                )})
            }
        </div>
        )
}

export {CardPlanet};