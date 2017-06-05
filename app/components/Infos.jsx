import React            from 'react' ;

class Infos extends React.Component{
  constructor(props){
    super(props)  
  }
 
  render()
  
  {console.log(this.props)     
  return(
    <div id="infos" >
      <h3>Weapon: {this.props.weapon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health: {this.props.health} </h3>
      <h3>Accumulated Experience:{this.props.experience}&nbsp;&nbsp;&nbsp;&nbsp; Warrior Status : {this.props.experienceLevel}</h3>
      <h3>Boss Health : {this.props.bossHealth}</h3>
    </div>
  );
  }
}

export default Infos;