import {useContext} from 'react';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function FavouriteDropdown() {
    const {store , actions} = useContext(Context);

    
  return (
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Favourite Items {store.favouriteItems.length} 
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {store.favouriteItems.map((SingleItem, index) => {
        <Dropdown.Item key={index}>{SingleItem} <FontAwesomeIcon onClick={() => actions.deleteFavouriteItem(index)} icon={faTrash} style={{color: "#000000",}} /></Dropdown.Item>
        })}
        </Dropdown.Menu>
      </Dropdown>
  );
}

export {FavouriteDropdown}; 