import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputJuntaItem from '../items/InputJuntaItem.js';
import InputTextAreaItem from '../items/InputTextAreaItem';
import InputFirma from './InputFirma.js';
//import '../css/InputJunta.css';

class InputJunta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      label:""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  getValue(){
    return this.state.value;
  }

  onSubmit(e){
    e.preventDefault();

    let reunion = this.refs.reunion.getValue();
    let fecha = this.refs.fecha.getValue();
    let hora_inicial = this.refs.hora_inicial.getValue();
    let hora_final = this.refs.hora_final.getValue();
    let nombre_resp = this.refs.nombre_resp.getValue();
    let objetivo = this.refs.objetivo.getValue();

    this.props.onSubmit(e);
    this.setState({value: ''});
  }

  render() {
    return(
      <div className="Form">
        <form className="Form-form">
        <InputJuntaItem
          labelText="Reunión / Entrenamiento"
          inputType="text"
          ref="reunion"/><br/>

          <InputJuntaItem
            labelText="Fecha"
            inputType="date"
            ref="fecha"/><br/>

          <InputJuntaItem
            labelText="Hora inicial"
            inputType="time"
            ref="hora_final"/><br/>

          <InputJuntaItem
            labelText="Hora final"
            inputType="time"
            ref="hora_final"/><br/>

          <InputTextAreaItem
            labelText="Objetivo"
            ref="objetivo"/><br/>

          <InputJuntaItem
            inputType="text"
            labelText="Nombre del responsable"
            ref="nombre_resp"/><br/>


            <div className="signature-pad" style={{ backgroundColor: "#fff", marginBottom: '50%'}}>
              <InputFirma/>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onSubmit={this.props.onSubmit}>Aceptar
            </button>

        <label className="Form-label">{ this.state.label }</label>
        </form>
      </div>
    );
  }
}

InputJunta.propTypes = {
  onSubmit: PropTypes.func
}
export default InputJunta;
