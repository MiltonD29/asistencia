import React, { Component } from 'react';
import AsistenteListItem from '../items/AsistenteListItem';
import PropTypes from 'prop-types';

 class AsistenteList extends Component {
   constructor(props){
     super(props);
     this.state = {
       items: this.props.items
     }
   }

   componentWillReceiveProps(nextProps){
     console.log(nextProps);
     if (nextProps.items.length !== this.state.items.length) {
       this.setState({ items: nextProps.items})
     }
   }

   removeItem(index){
     let array = this.state.items;
     array.splice(index, 1)
     this.setState({items: array});
   }

   render(){
     let items = this.state.items.map((currentValue, index, array)=>{
       return(
         <AsistenteListItem
                      onClickHandler={this.removeItem.bind(this, index)}
                      name={currentValue}
                      key={ index }/>
       );
     })
     return(
       <div className="AsistenteList">
         <ul className="list-group">
           { items }
         </ul>
       </div>
     );
   }
 }

 AsistenteList.propTypes = {
   items: PropTypes.array.isRequired
 }
 export default AsistenteList;
