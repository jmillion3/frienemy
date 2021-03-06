import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import List from '../List/List';
import './Profile.css'


const Profile = () => {
    // const [user, setUser] = useState([]);
    const [friendsList, setFriends] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/profile/main').then((res) => {
            // console.log(res.data)
            setFriends(res.data)
        })
    }, [])
    // console.log(friendsList)
    return (
        <div className="profile">
          {friendsList.map((user) => {
              console.log(user)
            return (
                  <li key={user.username} className="friends">
                    <div>
                      {/* <p>{`${user.username}`}</p> */}
                    <Link to="/friend/score">
                      <img src={user.profile_pic} alt="userImg"/>
                    </Link>
                      <h3>{`${user.first_name} ${user.last_name}`}</h3>
                    </div>
                  </li>
            )
          })}
          
        </div>
      )
}

export default Profile;
