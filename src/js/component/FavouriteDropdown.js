import {useContext} from 'react';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/appContext";

function FavouriteDropdown() {
    const {store , actions} = useContext(Context);

    const deleteItem = (index) => {
      store.favouriteItems.pop(index)
    }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Favourite {store.favouriteItems.length}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {store.favouriteItems.map((SingleItem, index) => {
        <Dropdown.Item key={index}>{SingleItem}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export {FavouriteDropdown}; 