import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image} from "react-bootstrap";
import StarLogo from "/workspaces/StarWars-ReactRouter-AleDayekh/src/img/pngimg.com - star_wars_logo_PNG34.png"
import '/workspaces/StarWars-ReactRouter-AleDayekh/src/styles/navbar.css';
import { FavouriteDropdown } from "./FavouriteDropdown";
export const NavbarStar = () => {
	return (
		<Navbar expand="lg" className="Navbar" bg="dark" data-bs-theme="dark">
        <Container>
            <Link to={"/"}><Navbar.Brand><Image className="StarLogo" src={StarLogo}/></Navbar.Brand></Link>
          <Navbar.Toggle className="nav-icon" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link className="Link-nav my-sm-2" to={"/films"}><Nav.Link className="text-light px-5" href="#films"><h4>FILMS</h4></Nav.Link></Link>
            <Link className="Link-nav my-sm-2" to={"/chracters"}><Nav.Link className="text-light px-5"  href="#features"><h4>CHARACTERS</h4></Nav.Link></Link>
            <Link  className="Link-nav my-sm-2" to={"/planets"}><Nav.Link className="text-light px-5"  href="#pricing"><h4>PLANETS</h4></Nav.Link></Link>
            <Link className="Link-nav my-sm-2" to={"/vehicles"}><Nav.Link className="text-light px-5" href="#vehicles"><h4>VEHICLES</h4></Nav.Link></Link>
            <FavouriteDropdown className="dropdown"></FavouriteDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
	);
};
