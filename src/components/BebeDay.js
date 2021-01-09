import React from 'react';
import { connect } from 'react-redux'
import { deleteTracking } from '../actions/deleteTracking'


class BebeDay extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showData: false,
      trackingData: []
    }
  }

  handleClick = () => {
    fetch('http://localhost:3000/api/v1/users/' + this.props.user.id + '/bebes/'  + this.props.bebes.bebe.id + '/days/' + this.props.dayId + '/trackings')
    .then(response => response.json())
    .then(trackings => {
      this.setState({
        showData: !this.state.showData,
        trackingData: trackings.data
      })
    })
  }

  deleteTracking = (event) => {
    fetch('http://localhost:3000/api/v1/users/' + this.props.user.id + '/bebes/' + this.props.bebes.bebe.id + '/days/' + this.props.dayId + '/trackings/' + event.target.id , {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(tracking => {
      this.setState((prevState) => ({
          ...this.state,
          trackingData: prevState.trackingData.filter(list => list.id !== tracking.data.id)
        })
      )
    })
  }

  createDataRow = (data) => {
    return(
      <tr key={data.id}>
        <td>{data.attributes.start_time} <br/> {data.attributes.end_time}</td>
        <td>{data.attributes.info_type}</td>
        <td>{data.attributes.amount}</td>
        <td>{data.attributes.amount_unit}</td>
        <td>{data.attributes.notes ? data.attributes.notes : "None"}</td>
        <td><button className="delete" id={data.id} onClick={this.deleteTracking}>X</button></td>
      </tr>
    )
  }

  render() {
    let body;

    if (this.state.showData) {
      body = <div className="trackingsData">
        <form>
          <table>
            <tbody>
              <tr>
                <th>Start Time/End Time</th>
                <th>Start Time <br/> End Time</th>
                <th>Data</th>
                <th>Amount</th>
                <th>Amount Unit</th>
                <th>Notes</th>
                <th></th>
              </tr>

            {this.state.trackingData.length > 0 ? this.state.trackingData.map((data) => this.createDataRow(data)) : null}

            <tr>
              <td><label>Start:</label><input type="time" name="start_time"></input> <label>End:</label><input type="time" name="end_time"></input></td>
              <td><select name="info_type">
                <option value="food">food</option>
                <option value="water">water</option>
                <option value="pee">pee</option>
                <option value="poop">poop</option>
                <option value="exercise">exercise</option>
                <option value="sleep">sleep</option>
            </select></td>
          <td><input type="number" name="amount" placeholder="amount"/></td>
              <td><input type="text" name="amount_unit" placeholder="unit"/></td>
              <td><input type="text" name="notes" placeholder="notes"/></td>
              <td><input type="submit" className="addSubmit" value="+"/></td>
            </tr>
            </tbody>
          </table>
        </form>
        <br/><br/>
      </div>
    } else {
      body = null;
    }

    return (
      <>
        <button onClick={this.handleClick} className={this.state.showData+'Show'}>{this.props.date}</button>
        {body}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { deleteTracking })(BebeDay)
