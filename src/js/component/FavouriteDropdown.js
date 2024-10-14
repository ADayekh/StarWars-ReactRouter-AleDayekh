import {useContext, useState} from 'react';
import React from 'react'
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, Dropdown } from 'react-bootstrap';

function FavouriteDropdown() {
    const {store , actions} = useContext(Context);
    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
      setShowModal(true); 
  };

    const closeModal = () => setShowModal(false)

    
  return (
  /* Modal también funciona, pero me gustó más el DropDown
    <>

          <Button type="button" onClick={() => openModal()} className="btn btn-warning">
          Favourite {store.favouriteItems.length} 
          </Button>

            <Modal show= {showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Favourite Item List</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
            {store.favouriteItems.length == 0 ? (
                  <p>"No favourites"</p>
                  ):( 
                    store.favouriteItems.map((FavouriteItem, index) => {
                    return(
                  <p key={index}>{FavouriteItem}<FontAwesomeIcon onClick={() => actions.deleteFavouriteItem(index)} icon={faTrash} style={{color: "#000000",}} /></p>
                  )}))
              }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
            </Modal.Footer>
            </Modal>
    </> */
    
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Favourite Items {store.favouriteItems.length} 
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {store.favouriteItems.length == 0 ? (
              <Dropdown.Item>"No favourites"</Dropdown.Item>
              ):( 
                store.favouriteItems.map((FavouriteItem, index) => {
                return (
              <Dropdown.Item key={index}>{FavouriteItem} <FontAwesomeIcon onClick={() => actions.deleteFavouriteItem(index)} icon={faTrash} style={{color: "#000000",}} /></Dropdown.Item>
               )}))
          }
        </Dropdown.Menu>
      </Dropdown> 
  );
}

export {FavouriteDropdown}; 