import React, { Component } from 'react';
import logo from './components/img/logo.png';
import './components/css/App.css';

import InputJunta from './components/boxes/InputJunta.js';
import InputFirma from './components/boxes/InputFirma.js';
import AsistenteBox from './components/boxes/AsistenteBox.js';
import AsistenteList from './components/boxes/AsistenteList.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      asistenteItems: []
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    let todoListValue = this.refs.todobox.getInputValue();
    let newTodoItemsValue = this.state.asistenteItems.concat(todoListValue)
    this.setState({ asistenteItems: newTodoItemsValue})
  }

  render() {
    console.log(this.state.asistenteItems);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <section className="Container">
          <section className="content">
            <InputJunta/>
          </section>

          <section className="middle">
            <label>Nombre del asistente</label>
            <AsistenteBox  ref="todobox" onSubmit={this.onSubmit}/>
            <AsistenteList ref="todolist" items={this.state.asistenteItems}/>
          </section>

          <div className="signature-pad">
            <section className="sidebar"><InputFirma/></section>
          </div>
        </section>

        <footer>
          <center>
            <div className="hr"></div><br/>
          <p>Lic. José Benitez 2211, Piso 4, Of. 43, Colonia Deportivo Obispado, Monterrey, Nuevo León, C.P. 64060</p>
          </center>
        </footer>
      </div>
    );
  }
}

export default App;
