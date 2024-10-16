import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
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
                    <div className ="col-sm-12 col-md-6 col-lg-3 my-3" key ={index}>
                        <Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${singleChracter.uid}.jpg`}  />
                                <Card.Body>
                                                <Row className="mb-2">
                                                    <Col className="col-9">
                                                         <Card.Title>{singleChracter.name}</Card.Title>
                                                     </Col>
                                                     <Col className="col-3">
                                                         <Button variant="dark" onClick={() => actions.addFavouriteItem(singleChracter.name)}>💛</Button>
                                                     </Col>
                                                </Row>
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