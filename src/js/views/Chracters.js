import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const CardChracter = () => {
    const {store , actions} = useContext(Context);
    
    useEffect (() => {
        actions.getChracters()
    },[])
    

    return (
     
        <div className="row justify-content-center">
            { store.chracters.map((singleChracter, index) => { 
            return ( 
                    <div className ="col-3 my-3" key ={index}>
                        <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${singleChracter.uid}.jpg`}  />
                                <Card.Body>
                                <Card.Title>{singleChracter.name}</Card.Title>
                                <Card.Text>  
                                    <Link to={`/chracters/${singleChracter.uid}`}><Button variant="warning">Learn More</Button></Link>
                                </Card.Text>
                                </Card.Body>
                        </Card>
                    </div>   
                )})
            }
        </div>
        )
}

export {CardChracter};