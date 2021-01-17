import React from 'react';
import { addHours, format } from 'date-fns'
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
        this.setState({
          ...this.state,
          trackingData: this.state.trackingData.concat(tracking.data)
        })
      }
    })
  }

  resetForm = () => {
    this.setState({
      ...this.state,
      start_time: "",
      end_time: "",
      info_type: "food",
      amount: 0,
      amount_unit: "",
      note: ""
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (event.target[0].attributes[0].nodeValue === "delete") {
      return null
    } else {
      this.createTracking()
      this.resetForm()
    }
  }

  deleteTracking = (event) => {
    fetch('http://localhost:3000/api/v1/users/' + this.props.user.id + '/bebes/' + this.props.bebes.bebe.id + '/days/' + this.props.dayId + '/trackings/' + event.target.id , {
      method: "DELETE"
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
        <td>{data.attributes.start_time === null ? null: format(addHours(new Date(data.attributes.start_time), 8), 'p')} {data.attributes.end_time === null ? null:<> - </>}{data.attributes.end_time === null ? null: format(addHours(new Date(data.attributes.end_time), 8), 'p')}</td>
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
                <th>Start/End Time</th>
                <th>Data*</th>
                <th>Amount*</th>
                <th>Amount Unit*</th>
                <th>Note</th>
                <th></th>
              </tr>

            {this.state.trackingData.length > 0 ? this.state.trackingData.map((data) => this.createDataRow(data)) : null}

            <tr>
              <td><label>Start:</label><input type="time" name="start_time" onChange={this.handleChange} value={this.state.start_time}></input> <label>End:</label><input type="time" name="end_time" onChange={this.handleChange} value={this.state.end_time}></input></td>
              <td><select name="info_type" onChange={this.handleChange} value={this.state.info_type}>
                <option value="food">food</option>
                <option value="water">water</option>
                <option value="pee">pee</option>
                <option value="poop">poop</option>
                <option value="exercise">exercise</option>
                <option value="sleep">sleep</option>
            </select></td>
          <td><input required type="number" name="amount" placeholder="amount" onChange={this.handleChange} value={this.state.amount}/></td>
              <td><input required type="text" name="amount_unit" placeholder="unit" onChange={this.handleChange} value={this.state.amount_unit}/></td>
              <td><input type="text" name="note" placeholder="note" onChange={this.handleChange} value={this.state.note}/></td>
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

    let falseShow = <button onClick={this.handleClick} className={this.state.showData+'Show'}>
      {format(addHours(new Date(this.props.date), 8), "'  - 'yyyy' -  '")}<br/>{format(addHours(new Date(this.props.date), 8), "eee',' MM/dd")}
    </button>;

    let trueShow = <button onClick={this.handleClick} className={this.state.showData+'Show'}>
      {format(addHours(new Date(this.props.date), 8), "eee',' MM/dd/yyyy")}
    </button>;


    if (this.state.showData === false) {
      return (
        <>
        {falseShow}
        {body}
        </>
      )
    } else {
      return (
        <>
        {trueShow}
        {body}
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(BebeDay)
