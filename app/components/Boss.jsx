import React  from 'react' ;
import { connect } from 'react-redux';
const actions   = require('../actions/actions.jsx');

class Boss extends React.Component{
  constructor(props){
  super(props); 
  this.state = {class : this.props.classProperty};
  }
  
  componentWillMount(){
    var self = this;
    function positionBoss(){
      var possiblePositions = [672,673,674,675,676,677,722,723,724,725,726,727]
      var position = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
      if   (self.props.boardState[position]!==0){console.log("Not here"); positionElements() }
      else {self.props.dispatch(actions.initialize(position, "boss"));
            self.setState({index:position})
            console.log(position)  }
    }
    positionBoss();

}
    
  render(){
    return(
      <div style = {{top:parseInt(this.state.index/50)*12 + 6.667+ "px", left:(this.state.index%50)*12 + 6.667 + "px"}} className="square boss" >
      </div>
    )
  }
  
}

module.exports = connect(
  (state)=>{
    return{
      boardState  :state.boardState //now boardState is available as this.props.boardState
    };
  }
)(Boss);