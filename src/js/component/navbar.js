import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image} from "react-bootstrap";
import StarLogo from "/workspaces/StarWars-ReactRouter-AleDayekh/src/img/pngimg.com - star_wars_logo_PNG34.png"
import '/workspaces/StarWars-ReactRouter-AleDayekh/src/styles/navbar.css';

export const NavbarStar = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Image className="StarLogo" src={StarLogo}/></Navbar.Brand>
          <Nav className="mx-auto">
            <Link to={"/films"}><Nav.Link className="text-light px-5" href="#films"><h5>FILMS</h5></Nav.Link></Link>
            <Link to={"/chracters"}><Nav.Link className="text-light px-5"  href="#features"><h5>CHARACTERS</h5></Nav.Link></Link>
            <Link to={"/planets"}><Nav.Link className="text-light px-5"  href="#pricing"><h5>PLANETS</h5></Nav.Link></Link>
            <Link to={"/vehicles"}><Nav.Link className="text-light px-5" href="#vehicles"><h5>VEHICLES</h5></Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
	);
};
