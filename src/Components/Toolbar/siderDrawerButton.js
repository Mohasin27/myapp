import React from 'react';
import { HiOutlineMenuAlt1 } from "react-icons/hi";


const drawerTogglebutton = props => (
    <>
        <button className="tool-button" onClick={props.click}>
            <HiOutlineMenuAlt1  />
        </button>
    </>
);

export default drawerTogglebutton;