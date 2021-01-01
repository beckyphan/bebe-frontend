import React from 'react';
import BebeDays from './BebeDays'

class BebeData extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="show-bebe">

        <h1>{this.props.bebe.attributes.name}</h1>
        <img src={this.props.bebe.attributes.img} alt="baby pic" className="headshot"/><br/><br/>
        <button className="edit">Edit Info</button>
        <p className="align-left">
          Kind: {this.props.bebe.attributes.kind} <br/>
          Birthdate: {this.props.bebe.attributes.birthdate} <br/>
          Bio: {this.props.bebe.attributes.bio} <br/>
        </p>

        <BebeDays />

      </div>
    )
  }
}

export default BebeData
