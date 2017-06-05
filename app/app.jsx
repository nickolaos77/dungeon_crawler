import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactRedux from 'react-redux';
const redux = require('redux');
const actions = require('./actions/actions.jsx');
const store   = require('./store/configureStore.jsx').configure();
//const RecipeAPI    =   require('./api/RecipeAPI.jsx')
//
import Board from 'Board.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Board/>
  </Provider>,
  document.getElementById('app')
);

//subscribe to changes

//const unsubscribe = store.subscribe( ()=>{
//        let state = store.getState();
//        console.log("state", state);
//        
//    }
//);


//Dispatch the actions
//
//store.dispatch(actions.nextGenAG(undefined,50));

//var counter = 0
//setInterval( function(){
//  counter++;
//  store.dispatch(actions.nextGenAG(undefined,50));}, 10 )



