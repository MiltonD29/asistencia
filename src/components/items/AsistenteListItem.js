import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {
  render(){
    return(
        <li className="list-group-item" onClick={this.props.onClickHandler}>
          { this.props.name }
        </li>
    );
  }
}

TodoListItem.propTypes = {
  name: PropTypes.string.isRequired
}

export default TodoListItem;
