import React from 'react';
import SideDrawerButton from '../Toolbar/siderDrawerButton';

const toolbar = props => (
    <>
        <div className="toolbar">
            <nav className="toolbar_navigation">
                <SideDrawerButton click={props.drawerClickHandler} />
            </nav>
        </div>
    </>
);

export default toolbar;