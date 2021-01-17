import React from 'react';

const UserData = (props) => {

  return (
    <div className="profile">
      <p>Name: {props.name}</p>
      <p>Username: {props.username}</p>
      <br/>
      <p>Total Number of Bébés: {props.bebesNumber}</p>
      <ul>
        <li>Humans: {props.humansNum}</li>
        <li>Pets: {props.petsNum}</li>
        <li>Plants: {props.plantsNum}</li>
      </ul>

    </div>
  )

}

export default UserData
