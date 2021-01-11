import React from 'react';
import Time from 'react-time-format'
import { connect } from 'react-redux'


class BebeDay extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showData: false,
      trackingData: [],
      start_time: "",
      end_time: "",
      info_type: "food",
      amount: 0,
      amount_unit: "",
      note: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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

  createTracking = () => {
    fetch('http://localhost:3000/api/v1/users/' + this.props.user.id + '/bebes/'  + this.props.bebes.bebe.id + '/days/' + this.props.dayId + '/trackings', {
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(tracking => {
      if (tracking.error) {
        alert(tracking.error)
      } else {
        let trackingDataArray = this.state.trackingData.slice()
        trackingDataArray.push(tracking.data)
        this.setState({
          ...this.state,
          trackingData: trackingDataArray,
          start_time: "",
          end_time: "",
          info_type: "food",
          amount: 0,
          amount_unit: "",
          note: ""
        })
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.createTracking()
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
        <td><Time value={data.attributes.start_time} format="hh:mm"/> {data.attributes.end_time === null ? null:<> - </>} <Time value={data.attributes.end_time} format="hh:mm"/></td>
        <td>{data.attributes.info_type}</td>
        <td>{data.attributes.amount}</td>
        <td>{data.attributes.amount_unit}</td>
        <td>{data.attributes.note ? data.attributes.note : "None"}</td>
        <td><button className="delete" id={data.id} onClick={this.deleteTracking}>X</button></td>
      </tr>
    )
  }

  render() {
    let body;

    if (this.state.showData) {
      body = <div className="trackingsData">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>Start Time <br/> End Time</th>
                <th>Data</th>
                <th>Amount</th>
                <th>Amount Unit</th>
                <th>Note</th>
                <th></th>
              </tr>

            {this.state.trackingData.length > 0 ? this.state.trackingData.map((data) => this.createDataRow(data)) : null}

            <tr>
              <td><label>Start:</label><input type="time" name="start_time" onChange={this.handleChange}></input> <label>End:</label><input type="time" name="end_time" onChange={this.handleChange}></input></td>
              <td><select name="info_type" onChange={this.handleChange}>
                <option value="food">food</option>
                <option value="water">water</option>
                <option value="pee">pee</option>
                <option value="poop">poop</option>
                <option value="exercise">exercise</option>
                <option value="sleep">sleep</option>
            </select></td>
          <td><input type="number" name="amount" placeholder="amount" onChange={this.handleChange}/></td>
              <td><input type="text" name="amount_unit" placeholder="unit" onChange={this.handleChange}/></td>
              <td><input type="text" name="note" placeholder="note" onChange={this.handleChange}/></td>
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

export default connect(mapStateToProps)(BebeDay)
