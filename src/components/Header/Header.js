import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUser, logoutUser} from '../../redux/userReducer';
import Search from '../Search/Search';
// import {logoutUser} from '../../redux/userReducer'
import './Header.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: true
        };
        this.search = this.search.bind( this )
    }

    componentDidMount(){
        this.props.getUser();
    }

    logout = () => {
        axios.post('/auth/logout')
        .then(() => {
            this.props.logoutUser()
            this.props.history.push('/')
        });
    }

    search( str ) {
        let filter = ''
        if(str !== ''){
          filter = `profile/main}`
        }
        axios.get(`http://localhost:4000/${ filter }`).then(results => {
          this.setState({ users: results.data })
        })
      }

    render(){
    return <div>
        {this.props.isLoggedIn ? 
        <div className="header">
            <Link to="/profile/main">
                <div className="user">
                    <img alt="user" src={this.props.user.profilePic}/>
                    <h1 className="welcome">Welcome, {this.props.user.username} </h1>
                </div>
            </Link>
            <div className="headerBtns">
                {/* <Link to="/">Change Account</Link> */}
                <Search search={ this.props.search } />
                <button onClick={this.logout}>Logout</button>
            </div>
        </div>
        :
        <Link to="/">
            <h1>Please Login</h1>
        </Link>
        }
    </div>
    }
}

const mapStateToProps = state => state.user;

export default withRouter(connect(mapStateToProps, {getUser, logoutUser})(Header));

// const Header = (props) => {
//     // const [userInfo, setUserInfo] = useState([]);

//     // useEffect(() => {
//     //     const {username} = props.user
//     //     axios.get(`http://localhost:4000/profile/${username}`).then((res) => {
//     //         // console.log(res.data)
//     //         setUserInfo(res.data)
//     //     })
//     // }, [props.user]);

//     // const {}

//     const logout = () => {
//         axios.post('/auth/logout');
//     }

//     return (
//     <div className="header">
//         {props.isLoggedIn 
//         ?
//         <div>
//             {/* {userInfo.map((user) => { */}
//             return (
//                 <div>
//                     <img src={props.profile_pic} alt="profile pic" className="picture"/>
//                     <Link to="/profile/main">
//                         <h1>{`Hey, ${props.first_name}`}</h1>
//                     </Link>
//                     <Link to="/auth/logout">
//                         <button onClick={logout}>Logout</button>
//                     </Link>
//                 </div>
//             )
//         {/* }) */}
//         </div>
//         :
//         <div>
//             <Link to="/">
//                 <h1 className="risk">Welcome Friends</h1>
//             </Link>
//         </div>
//         }   
//     </div>
//     )
// }

// const mapStateToProps = state => state;

// export default connect(mapStateToProps)(Header);