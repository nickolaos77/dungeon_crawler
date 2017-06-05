import BoardArray from './BoardArray.js'



//Next state reducer 
//--------------
export const nextBoardStateReducer = (state=BoardArray, action) => {
  switch (action.type){
      case 'INITIALIZE':
        var newState = [...state];
            newState[action.index] = action.element;
        return newState;   
      case 'MOVE_UP':
          console.log(BoardArray)
          var newState = [...state];
              newState[action.index+50] = 0; 
              
              newState[action.index]    ='Hero';
          return newState;
      return;
      case 'MOVE_DOWN':
          var newState = [...state];
              newState[action.index-50] = 0; 
              newState[action.index]    ='Hero';
           return newState;
      case 'MOVE_RIGHT':
          var newState = [...state];
              newState[action.index-1]  = 0; 
              newState[action.index]    ='Hero';
          return newState;
      case 'MOVE_LEFT':
          var newState = [...state];
              newState[action.index+1]  = 0; 
              newState[action.index]    ='Hero';
          return newState;
      case 'CLEAR_HERO':
          var indexOfHero = state.indexOf("Hero");
            var newState = [...state];
            newState[indexOfHero]=0;
          return newState;
      default:
          return state;   
}
};

 