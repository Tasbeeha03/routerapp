import React from'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class " to='/'>
            About
            </NavLink>
            <NavLink exact activeClassName="active_class " to='/services'>
            Services
            </NavLink>
        <NavLink exact activeClassName="active_class " to='/contact'>
            Contact
            </NavLink>
        
       
       </div>
    </>
    );
}
export default Navbar;