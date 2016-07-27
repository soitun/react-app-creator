import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

  
class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        APPAP
      </div>
    )
  }
}

const style = {
  screen: {
    left:'0px',
    right:'1px',
    top:'100px',
    bottom: '0px',
    border: '1px solid black',
    position: 'absolute',
  }
}

App.propTypes = {
//  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//    text: PropTypes.string.isRequired,
//    completed: PropTypes.bool.isRequired
//  }).isRequired).isRequired,
//  visibilityFilter: PropTypes.oneOf([
//    'SHOW_ALL',
//    'SHOW_COMPLETED',
//    'SHOW_ACTIVE'
//  ]).isRequired
}

function select(state) {
  return {
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)