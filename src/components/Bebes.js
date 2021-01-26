import React from 'react';
import BebeCard from './BebeCard'

class Bebes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      bebesArray: [],
      toggle: false
    }
  }

  componentDidMount() {
    this.setState({
      bebesArray: this.props.bebes
    })
  }

  handleClick = () => {
    let sortedArray = this.props.bebes.slice()
    sortedArray.sort((a, b) => (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) ? 1 : -1)
    if (!this.state.toggle) {
        this.setState({
        bebesArray: sortedArray,
        toggle: true
      })
    } else {
      this.setState({
        bebesArray: this.props.bebes,
        toggle: false
      })
    }
  }

  render() {
    return (
      <>
        <span><button onClick={this.handleClick}>SORT</button></span>
        <div className="dashboard">
          {this.props.bebes.length > 0 ? this.state.bebesArray.map(bebe => <BebeCard key={bebe.id} bebe={bebe} user={this.props.user}/>) : <p>No Children Yet!</p>}
        </div>
      </>
    )
  }
}

export default Bebes
