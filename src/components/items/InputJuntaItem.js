import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/InputJuntaItem.css';

class InputJuntaItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }


  getValue(){
    return this.state.value;
  }


  render() {
    return(
      <div className="InputJuntaItem">
        <label className="FormRow-label">{ this.props.labelText }</label><br/>
        <input
          className="input"
          type={ this.props.inputType }
          value={ this.state.value }
          onChange={ this.onChange }/><br/>
      </div>
    );
  }
}
InputJuntaItem.propTypes = {
  inputType: PropTypes.any
}
export default InputJuntaItem;
