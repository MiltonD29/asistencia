import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/AsistenteBox.css';

 class AsistenteBox extends Component {
   constructor(props){
     super(props);
     this.state = {
       asistenteBox: ''
     }
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(e) {
     this.setState({asistenteBox: e.target.value});
   }


   onSubmit(e){
     e.preventDefault();
     this.props.onSubmit(e);
     this.setState({asistenteBox: ''});
   }

   getInputValue(){
     return this.state.asistenteBox;
   }
   render(){
     return(
       <div className="AsistenteBox">
         <form onSubmit={this.onSubmit}>
           <input
                  className="input-asistente"
                  type="text"
                  value={this.state.asistenteBox}
                  onChange={this.onChange}

            />
           <input
              type="submit"
              value="Agregar"
              disabled={!this.state.asistenteBox}/>
         </form>
       </div>
     );
   }
 }

 AsistenteBox.propTypes = {
   onSubmit: PropTypes.func.isRequired
 }
 export default AsistenteBox;
