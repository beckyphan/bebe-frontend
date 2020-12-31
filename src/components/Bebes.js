import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBebe } from '../actions/deleteBebe'
import { fetchBebeDays } from '../actions/fetchBebeDays'

const Bebes = (props) => {

  function bebeCard(bebe) {
    return (
        <div key={bebe.id} className="card">
          <div className="button-parent"><button className="delete" id={bebe.id} onClick={(event) => props.deleteBebe(event.target.id, props.user.id)}>X</button></div><br/>
          <NavLink to={`/bebes/${bebe.id}`} className="href" key={bebe.id} onClick={() => props.fetchBebeDays(bebe.id, props.user.id)}>
          <img src={bebe.attributes.img} alt="baby pic" className="headshot"/>
          <h3>{bebe.attributes.name}</h3>
          <p className="align-left">
            Kind: {bebe.attributes.kind} <br/>
            Birthdate: {bebe.attributes.birthdate} <br/>
            Bio: {bebe.attributes.bio}</p>
          </NavLink>
        </div>

    )
  }

  return (
    <div className="dashboard">
      {props.bebes.length > 0 ? props.bebes.map(bebe => bebeCard(bebe)): <p>No Children Yet!</p>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { deleteBebe, fetchBebeDays })(Bebes)
