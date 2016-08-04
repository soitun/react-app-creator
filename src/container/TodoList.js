import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

  
class TodoList extends Component {
  renderTodos(){
    const { todossss } = this.props
    const Todos = todossss.map((todo, index)=>{
      return (<div style={style.todo} key={index}>{todo.text}</div>)
    })
    
    return Todos
  }
  
  render() {
    const Todos = this.renderTodos()
    console.log('render TodoLists.js')
    return (
      <div>
        {Todos}
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
  },
  todo:{
    fontSize: '5em'
  }
}

TodoList.propTypes = {
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
    todossss: state.todos
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(TodoList)