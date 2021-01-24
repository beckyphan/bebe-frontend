import React from 'react';
import BebeCard from './BebeCard'

const Bebes = (props) => {

  return (
    <div className="dashboard">
      {props.bebes.length > 0 ? props.bebes.map(bebe => <BebeCard key={bebe.id} bebe={bebe} user={props.user}/>): <p>No Children Yet!</p>}
    </div>
  )
}

export default Bebes
