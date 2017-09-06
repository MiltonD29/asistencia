import React, { Component } from 'react';
import '../css/InputTextAreaItem.css';

class InputTextAreaItem extends Component {
  constructor(){
    super();
    this.state = {
      InputMessage: "",
      value: ''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
    return(
      <div className="InputTextAreaItem">
        <label className="FormRow-label">{ this.props.labelText }</label><br/>
        <textarea
          className="text-area"
        value={ this.state.value }
        onChange={this.onChange}/>
      </div>

    );
  }
}

export default InputTextAreaItem
