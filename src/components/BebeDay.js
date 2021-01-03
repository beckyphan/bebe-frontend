import React from 'react';

class BebeDay extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showData: false
    }
  }

  handleClick = () => {
    this.setState({
      showData: !this.state.showData
    })
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
