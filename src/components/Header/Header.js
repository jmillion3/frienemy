import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {logoutUser} from '../../redux/userReducer'
import './Header.css';

const Header = (props) => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const {username} = props.user
        axios.get(`http://localhost:4000/profile/${username}`).then((res) => {
            // console.log(res.data)
            setUserInfo(res.data)
        })
    }, [props.user]);

    const logout = () => {
        axios.post('/auth/logout');
    }

    return (
    <div className="header">
        {props.isLoggedIn 
        ?
        <div>
            {userInfo.map((user) => {
            return (
                <div>
                    <img src={user.profile_pic} alt="profile pic" className="picture"/>
                    <Link to="/profile/main">
                        <h1>{`Hey, ${user.first_name}`}</h1>
                    </Link>
                    <Link to="/">
                        <button onClick={logout}>Logout</button>
                    </Link>
                </div>
            )
        })};
        </div>
        :
        <div>
            <Link to="/">
                <h1 className="risk">Welcome Friends</h1>
            </Link>
        </div>
        }   
    </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Header);