import React from 'react';

class BebeDay extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showData: false
    }
  }

  handleClick = () => {
    if (this.state.showData) {
      this.setState({
        showData: false
      })
    } else {
      this.setState({
        showData: true
      })
    }
  }

  render() {
    let body;

    if (this.state.showData) {
      body = <div>SHOW DATA HERE</div>
    } else {
      body = null;
    }

    return (
      <div className="day">
        <button onClick={this.handleClick}>{this.props.date}</button>
        {body}
      </div>
    )
  }
}

export default BebeDay
