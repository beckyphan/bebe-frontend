import React from 'react';

const DisplayBebeInfo = (props) => {
  return (
    <p className="align-left">
      Kind: {props.kind} <br/>
      Birthdate: {props.birthdate} <br/>
      Bio: {props.bio} <br/>
    </p>
  )
}

export default DisplayBebeInfo
