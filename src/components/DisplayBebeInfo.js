import React from 'react';

const DisplayBebeInfo = (props) => {
  return (
    <div className="align-center card">
      Kind: {props.kind} <br/>
      Birthdate: {props.birthdate} <br/>
      Bio: {props.bio} <br/>
    </div>
  )
}

export default DisplayBebeInfo
