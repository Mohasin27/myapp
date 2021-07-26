import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const sideDrawer = props => {

    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    
    return (
        <nav className={drawerClasses}>
            <ul>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName} onClick={drawerClasses} >
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        
                        );
                })};
            </ul>
        </nav>
    );
};


export default sideDrawer;