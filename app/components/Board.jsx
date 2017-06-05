import React            from 'react' ;
import BoardCellList    from './BoardCellList.jsx'; 
import Hero             from './Hero.jsx';
import Boss             from './Boss.jsx';
import BlackIconsList   from './BlackIconsList.jsx';

class Board extends React.Component{
  constructor(props){
    super(props)  
  }
 
  render()
  {   
     
  return(
    <div id="boardAndLivingCellsContainer">
      <BoardCellList/>
      <Hero/> 
      <BlackIconsList/>
    </div>
  );
  }
}

export default Board;