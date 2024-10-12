import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image} from "react-bootstrap";
import StarLogo from "/workspaces/StarWars-ReactRouter-AleDayekh/src/img/pngimg.com - star_wars_logo_PNG34.png"
import '/workspaces/StarWars-ReactRouter-AleDayekh/src/styles/navbar.css';
import { FavouriteDropdown } from "./FavouriteDropdown";
export const NavbarStar = () => {
	return (
		<Navbar className="Navbar" bg="dark" data-bs-theme="dark">
        <Container>
            <Link to={"/"}><Navbar.Brand><Image className="StarLogo" src={StarLogo}/></Navbar.Brand></Link>
          <Nav className="mx-auto">
            <Link className="Link-nav" to={"/films"}><Nav.Link className="text-light px-5" href="#films"><h4>FILMS</h4></Nav.Link></Link>
            <Link className="Link-nav" to={"/chracters"}><Nav.Link className="text-light px-5"  href="#features"><h4>CHARACTERS</h4></Nav.Link></Link>
            <Link  className="Link-nav" to={"/planets"}><Nav.Link className="text-light px-5"  href="#pricing"><h4>PLANETS</h4></Nav.Link></Link>
            <Link className="Link-nav" to={"/vehicles"}><Nav.Link className="text-light px-5" href="#vehicles"><h4>VEHICLES</h4></Nav.Link></Link>
            <FavouriteDropdown className="dropdown"></FavouriteDropdown>
          </Nav>
        </Container>
      </Navbar>
	);
};
