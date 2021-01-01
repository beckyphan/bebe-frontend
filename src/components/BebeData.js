import React from 'react';
import BebeDays from './BebeDays'

const BebeData = (props) => {

  return (
    <div className="show-bebe">

      <h1>{props.bebe.attributes.name}</h1>
      <img src={props.bebe.attributes.img} alt="baby pic" className="headshot"/><br/><br/>
      <button className="edit">Edit Info</button>
      <p className="align-left">
        Kind: {props.bebe.attributes.kind} <br/>
        Birthdate: {props.bebe.attributes.birthdate} <br/>
        Bio: {props.bebe.attributes.bio} <br/>
      </p>

      <BebeDays />

    </div>
  )
}

export default BebeData
