import React from 'react';
import { connect } from 'react-redux'
import { fetchTrackings } from '../actions/fetchTrackings'


class BebeDay extends React.Component {

  constructor(props) {
    super(props)
    this.props.fetchTrackings(this.props.dayId, this.props.user.id, this.props.bebes.bebe.id)

    this.state = {
      showData: false,
      trackingData: this.props.trackings.filter((data) => data.relationships.day.data.id === this.props.dayId)
    }
  }

  handleClick = () => {
    this.setState({
      showData: !this.state.showData,
    })
  }

  createDataRow = (data) => {
    return(
      <tr key={data.id}>
        <td>{data.attributes.start_time} / {data.attributes.end_time}</td>
        <td>{data.attributes.info_type}</td>
        <td>{data.attributes.amount}</td>
        <td>{data.attributes.amount_unit}</td>
        <td>{data.attributes.notes ? data.attributes.notes : "None"}</td>
      </tr>
    )
  }

  render() {
    let body;

    if (this.state.showData) {
      body = <div className="trackingsData">
        <table>
          <tbody>
            <tr>
              <th>Start Time/End Time</th>
              <th>Data</th>
              <th>Amount</th>
              <th>Amount Unit</th>
              <th>Notes</th>
            </tr>
          {this.state.trackingData.map((data) => this.createDataRow(data))}
          </tbody>
        </table>
      </div>
    } else {
      body = null;
    }

    return (
      <>
        <button onClick={this.handleClick}>{this.props.date}</button>
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

export default connect(mapStateToProps, { fetchTrackings })(BebeDay)
