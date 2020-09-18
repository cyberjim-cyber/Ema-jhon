import React, { useContext } from 'react';
import { userContext } from '../../App';

import logo from '../../images/logo.png'

import './Header.css';

const Header = () => {
    const [loggedInUser,setloggedInUser]=useContext(userContext)
    return (
        <div className="header">
            <img src={logo} alt=""/>

<nav>
<a href="/shop">shop</a>
<a href="/review">order review</a>
<a href="/inventory">manage overview</a>
<button onClick={()=>setloggedInUser({})}>sign out</button>


</nav>




        </div>
    );
};

export default Header;