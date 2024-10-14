import React, { useEffect,useState, useContext } from "react";
import {Accordion, Card, Button, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardFilm = () => {
    const {store , actions} = useContext(Context);

    useEffect (() => {
        actions.getFilms()
    },[])
    
   

    return ( 
        <div className="row justify-content-center">
                { 
                    store.films.map((film, index) => {
                        return (
                        <div className="col-4 my-3" key ={index}>
                                    <Card style={{ width: '30rem' }}>
                                            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}  />
                                            <Card.Body>
                                                <Row className="mb-2">
                                                    <Col className="col-9">
                                                         <Card.Title>{film.properties.title}</Card.Title>
                                                     </Col>
                                                     <Col className="col-3">
                                                         <Button variant="dark" onClick={() => actions.addFavouriteItem(film.properties.title)}>💛</Button>
                                                     </Col>
                                                </Row>
                                            <Card.Text>
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header >Description</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="row ">
                                                                {film.properties.opening_crawl}
                                                            </div>
                                                            <div className="row mt-3">
                                                            <Link to={`/films/${film.uid}`}><Button variant="warning">Learn More</Button></Link>
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Card.Text>
                                            </Card.Body>
                                    </Card>
                        </div>
                        
                        )
                })
           } 
        </div>       
    )
}

export {CardFilm};