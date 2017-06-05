import React            from 'react' ;
import { connect }      from 'react-redux'; 

class BlackIconsList extends React.Component{
  constructor(props){
    super(props)
  }
    render(){
      
      //construct matrix of indexes
      var array1 = [];
      for (let g = 0; g<=9; g++){
        for (let h = 0; h<=9; h++){  
          for (let i = 0; i<=2; i++ ){
            for (let j=0; j<=4; j++){
              array1.push( j + 50*i +h*5 +150*g )
            }
          } 
        }
      }
      console.log (array1)
      var positionOfHero = this.props.boardState.indexOf("Hero");
      var heroUnderIcon  = parseInt((array1.indexOf(positionOfHero))/15);
      console.log("heroUnderIcon")
      console.log(heroUnderIcon)
      var BlackIcons = (function IIFE(iconToHide){  
      var BlackIcons = []
      var key = -1;
      for (let i=0; i<10; i++){
        for (let j=0; j<10; j++){
          key++
          var top    = i*36  + 6.67 + "px";
          var left   = j*60 + 6.67 + "px";
          //last rows
          if ( (heroUnderIcon +1) % 10 ===0 ){
            if (iconToHide!==key  && (iconToHide!==key+1) && iconToHide!==key-9 && iconToHide!==key-10  && iconToHide!==key+10 && iconToHide!==key+11  ){
          BlackIcons.push(<div className = "blackIcon" key = {key} id={key} style={{top:top,left:left}}></div> )}}
          else if ( (heroUnderIcon) % 10 ===0 ){
            if (iconToHide!==key  && (iconToHide!==key-1) && iconToHide!==key-11 && iconToHide!==key-10  && iconToHide!==key+10 && iconToHide!==key+9  ){
          BlackIcons.push(<div className = "blackIcon" key = {key} id={key} style={{top:top,left:left}}></div> )}}
          
          else if (iconToHide!==key && (iconToHide!==key-1) && (iconToHide!==key+1) && iconToHide!==key-9 && iconToHide!==key-10 && iconToHide!==key-11  && iconToHide!==key+10 && iconToHide!==key+11 && iconToHide!==key+9  ){
          BlackIcons.push(<div className = "blackIcon" key = {key} id={key} style={{top:top,left:left}}></div> )
          }
        }
      }
      return BlackIcons;
      })(heroUnderIcon);
      return(  
        <div>
          {BlackIcons}
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
)(BlackIconsList);






