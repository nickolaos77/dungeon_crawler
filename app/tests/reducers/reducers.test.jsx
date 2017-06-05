//var expect   = require('chai').expect;
//// test state immutability with deep freeze
//var df       = require('deep-freeze-strict');
//var reducers = require('../../reducers/reducers.jsx');
//
//describe('testing the reducers components', function(){
//    it('should pass this canary test', function(){
//        expect(true).to.eql(true);
//    });
//    
//});
//
//describe ('Reducers', ()=>{
////---- Starting CRUD Recucer Tests ------//     
//    describe ( 'CRUD Recipe Reducer', ()=>{  
//    it('should Add a Recipe', ()=>{
//        var action ={
//            type: 'ADD_RECIPE',
//            recipeName:"Spanakoryzo",
//            ingredients:["Spanaki", "Ryzi","Ladi"],
//            recipeIndex: 1
//        };
//        var addRecipeReducerResponse = reducers.crudRecReducer(df([]),df(action));
//
//        expect(addRecipeReducerResponse).to.eql([{ recipeName:"Spanakoryzo",
//                                                  ingredients:["Spanaki", "Ryzi","Ladi"],
//                                                  recipeIndex: 1 }])
//    });
//        
//    it('should Delete a Recipe', ()=>{
//        
//        var action ={
//            type: 'DEL_RECIPE',
//            recipeIndex: 1
//        };
//        
//        var state = [{ recipeName:"Spanakoryzo",
//                       ingredients:["Spanaki", "Ryzi","Ladi"],
//                       recipeIndex: 1 }];
//        
//        var addRecipeReducerResponse = reducers.crudRecReducer(df(state),df(action));
//        
//        expect(addRecipeReducerResponse).to.eql([]);        
//    });
//        
//it('should Edit a Recipe', ()=>{
//        
//        var action ={
//            type: 'EDIT_RECIPE',
//            recipeName:"Spanakoryzo",
//            ingredients:["Spanaki", "Ryzi","Ladi",'Salt'],
//            recipeIndex: 1
//        };
//        
//        var state = [{ recipeName:"Spanakoryzo",
//                       ingredients:["Spanaki", "Ryzi","Ladi"],
//                       recipeIndex: 1 }];
//        
//        var addRecipeReducerResponse = reducers.crudRecReducer(df(state),df(action));
//        
//        expect(addRecipeReducerResponse).to.eql([{recipeName:"Spanakoryzo", 
//                                                  ingredients:["Spanaki", "Ryzi","Ladi",'Salt'],
//                                                  recipeIndex: 1}]);        
//    });    
//});//----  Ending CRUD Reducer tests ----//
////---------------------------------------//
////---- Starting Panel Reducer Tests ------//     
//describe('Panel reducer', ()=>{
//    it('should Expand the Panel', ()=>{
//        var action = {
//            type        :'EXPAND_PANEL',
//            recipeIndex :1 
//        };
//        var panelReducerResponse = reducers.panelReducer(df([]),df(action));
//
//        expect(panelReducerResponse).to.eql([{expanded:true, recipeIndex:1}]);        
//    });    
//
//    it('should Contract the Panel', ()=>{
//        var action = {
//            type        :'CONTRACT_PANEL',
//            recipeIndex :1 
//        };
//        var panelReducerResponse = reducers.panelReducer( df ( [{expanded:true, recipeIndex:1}] ),df(action) );
//
//        expect(panelReducerResponse).to.eql([]);        
//    });  
//}); //----  Ending Panel Reducer tests ----//
////---------------------------------------//
////---- Starting Modal Reducer Tests ------//        
//    
//describe('Modal reducer', ()=>{
//    it('should Show the Modal', ()=>{
//        
//        var action = {
//            type        :'SHOW_MODAL', 
//        };
//        var modalOpenReducerResponse = reducers.modalOpenReducer(df('false'),df(action));
//
//        expect(modalOpenReducerResponse).to.eql('true');        
//    });    
//
//    it('should Hide the Modal', ()=>{
//        var action = {
//            type        :'HIDE_MODAL', 
//        };
//        var modalOpenReducerResponse = reducers.modalOpenReducer(df('true'),df(action));
//
//        expect(modalOpenReducerResponse).to.eql('false');        
//    });  
//  
//});    
//       
//});    