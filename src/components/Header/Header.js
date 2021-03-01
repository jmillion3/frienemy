import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return <div>
        <Link to="/">Login/Signup</Link>
        <Link to="/main">Main</Link>
    </div>
}

export default Header;