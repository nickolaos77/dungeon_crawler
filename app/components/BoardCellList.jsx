import React            from 'react' ;
import { connect }      from 'react-redux'; 
import Square           from './Square.jsx';
import Hero             from './Hero.jsx';
import BoardArray             from '../reducers/BoardArray.js';
const actions = require('../actions/actions.jsx');

class BoardCellList extends React.Component{
  constructor(props){
    super(props)
  this.squareCreator = this.squareCreator.bind(this);
  }
  

  //change to es5 function to make it testable
  squareCreator = (numOfSquares,className) => {
    console.log('Inside square creator')
    
    function positionElements(element){
      var position = Math.floor(Math.random() * 1500);
      if   (BoardArray[position]!==0){console.log("Not here" + element); positionElements(element) }
      else {BoardArray[position] = element; console.log(position)}
    }
    
   function positionBoss(){
      var possiblePositions = [672,673,674,675,676,677,722,723,724,725,726,727]
      var position = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
      if   (BoardArray[position]!==0){console.log("Not here"); positionBoss() }
      else {BoardArray[position] = "boss";
            console.log("boss" + position) }
    }
    
    //place at random positions 7 health potions
    for (var i=0; i<7; i++){
      positionElements("Potion")
    }
    //place at random positions 5 weak enemies
    for (var i=0; i<5; i++){
      positionElements("weakEnemy")
    }
    //place at random positions 2 strong enemies
    for (var i=0; i<2; i++){
      positionElements("strongEnemy")
    }
    //place at random positions the Excalibur
    positionElements("excalibur")
    positionBoss();
    
    return BoardArray.map((elem,i)=>{ 
      if (elem===1){return (<Square key={i} id={i} classProperty= 'square wall'/>)}
      else if(elem==="Potion"){return (<Square key={i} id={i} classProperty= 'square magicPotion'/>)}
      else if(elem==="weakEnemy"){return (<Square key={i} id={i} classProperty= 'square weakEnemy'/>)}
      else if(elem==="strongEnemy"){return (<Square key={i} id={i} classProperty= 'square strongEnemy'/>)}
      else if(elem==="excalibur"){return (<Square key={i} id={i} classProperty= 'square excalibur'/>)}
      else if(elem==="boss"){return (<Square key={i} id={i} classProperty= 'square boss'/>)}
      else { return (<Square key={i} id={i} classProperty="square"/>)}     
    })
  }
  
    render(){
      return(        
      <div id="boardSmall">
        {this.squareCreator(1500, "square")}
      </div>
        )
    }
}

export default BoardCellList;