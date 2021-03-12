import axios from 'axios';

const initialState = {
    friend: {}
}

const GET_FRIENDS = "GET_FRIENDS"

// redux promise middleware allows us to use pending, fulfilled, rejected
export function getFriend(){
    const friend = axios.get('/profile/main').then(res => res.data)
    return {
        type: GET_FRIENDS,
        payload: friend
    }
}

export default function FriendReducer(state = initialState, action){
    switch(action.type){
        case GET_FRIENDS + "_PENDING":
            return state;
        case GET_FRIENDS + "_FULFILLED":
            return {...state, Friend: action.payload, isLoggedIn: true};
        case GET_FRIENDS + "_REJECTED":
            return initialState;
        default:
            return state
    }
}