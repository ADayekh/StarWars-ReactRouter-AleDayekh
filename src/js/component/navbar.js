import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image, NavbarToggle} from "react-bootstrap";
import StarLogo from "/workspaces/StarWars-ReactRouter-AleDayekh/src/img/pngimg.com - star_wars_logo_PNG34.png"
import '/workspaces/StarWars-ReactRouter-AleDayekh/src/styles/navbar.css';
import { FavouriteDropdown } from "./FavouriteDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const NavbarStar = () => {
	return (
		<Navbar expand="lg" className="Navbar" bg="dark" data-bs-theme="dark">
        <Container>
            <Link to={"/"}><Navbar.Brand><Image className="StarLogo" src={StarLogo}/></Navbar.Brand></Link>
            <Navbar.Toggle><FontAwesomeIcon size="xl "icon={faBars} style={{color: "#FFD43B",}} className="nav-icon" aria-controls="basic-navbar-nav"/></Navbar.Toggle>
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
