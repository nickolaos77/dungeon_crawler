import React from 'react' ;
import { connect }      from 'react-redux';
const actions = require('../actions/actions.jsx');

class Square extends React.Component{
  constructor(props){
    super(props) 
    this.state = {class : this.props.classProperty};
  }
  
  render(){
  return (
      <div key={this.props.key} id={this.props.id} className={this.state.class}></div>
  );
    
  }
}
//this is how I make available in my component the this.props.dispatch without having to listen to the state changes
module.exports = connect()(Square);
