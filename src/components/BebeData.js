import React from 'react';
import BebeDays from './BebeDays'

const BebeData = (props) => {
  console.log("in BebeData")
  console.log(props)

  return (
    <div className="show-bebe">

      <h1>{props.bebe.attributes.name}</h1>
      <img src={props.bebe.attributes.img} alt="baby pic" className="headshot"/>
      <p className="align-left">
        Kind: {props.bebe.attributes.kind} <br/>
        Birthdate: {props.bebe.attributes.birthdate} <br/>
        Bio: {props.bebe.attributes.bio}
      </p>

      <BebeDays />

    </div>
  )
}

export default BebeData
