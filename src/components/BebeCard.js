import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBebe } from '../actions/deleteBebe'
import { fetchBebeDays } from '../actions/fetchBebeDays'

const BebeCard = (props) => {

  return (
      <div className="card">
        <div className="button-parent"><button className="delete" id={props.bebe.id} onClick={(event) => props.deleteBebe(event.target.id, props.user.id)}>X</button></div><br/>
        <NavLink to={`/bebes/${props.bebe.id}`} className="href" key={props.bebe.id} onClick={() => props.fetchBebeDays(props.bebe.id, props.user.id)}>
        <img src={props.bebe.attributes.img} alt="baby pic" className="headshot"/>
        <h3>{props.bebe.attributes.name}</h3>
        </NavLink>
      </div>
  )

}

export default connect(null, { deleteBebe, fetchBebeDays })(BebeCard)
