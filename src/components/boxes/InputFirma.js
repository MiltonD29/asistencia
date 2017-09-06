import React, { Component } from 'react';
import SignaturePad from 'react-signature-pad';

class InputFirma extends Component {
  constructor(){
    super();
    this.state = {
      signatures: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    let signature = this.refs.signature;
    let array = this.state.signatures.concat(signature.toDataURL());
    this.setState({signatures: array});


  }

  render() {
    console.log(this.state.signatures);
    return(
        <div>
          <SignaturePad
              clearButton="true"
              ref="signature"
          />
          <br/>
          <button
            type="button"
            className="btn btn-success"
            onClick={this.onClick}
            disabled={!this.state.signatures}>Save</button>
        </div>
    );
  }
}

export default InputFirma;
