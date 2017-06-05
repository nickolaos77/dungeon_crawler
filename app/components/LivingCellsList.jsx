import React  from 'react' ;
import Square from './Square.jsx';
import { connect } from 'react-redux';
const actions   = require('../actions/actions.jsx');

class LivingCellsList extends React.Component{
  constructor(props){
  super(props);
    
  this.youngCells = this.youngCells.bind(this);  
  }

  //for the small board 50*30
  youngCells(){
    return this.props.boardState.map( function(elem,index){
      var dx = (index%50)*12 + 6.667 + "px";
      var dy = parseInt(index/50)*12 + 6.667+ "px";
      var style  = {top:dy, left:dx};
      if (elem==1){
        return (<Square key={"orange"+index} className={"square orangeCell"} style = {style}/>)
      }      
      if (elem==2){
        return (<Square key={"red"+index} className={"square redCell"} style = {style}/>)
      }
      
      
    })
  }
      
  render(){
    return(
      <div id="livingCellsContainer">
        {this.youngCells()}
      </div>
    )
  }
  
}

module.exports = connect(
  (state)=>{
    return{
      boardState  :state.boardState
      //now boardState is available as this.props.boardState
      
    };
  }
)(LivingCellsList);
