import React from 'react'
import Friend from '../Friend/Friend'

const List = (props) => {
  return (
    <div>
      {props.friends.map((friend, index) => {
        return <Friend friend={friend} key={index} />
      })}
    </div>
  )
}
export default List

