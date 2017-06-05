import React       from 'react' ;
import { connect } from 'react-redux';
import Infos       from './Infos.jsx';
const actions      = require('../actions/actions.jsx');


class Hero extends React.Component{
  constructor(props){
  super(props); 
  this.state = {class : "square heroCell" , healthLevel:100, experienceLevel:"Zero",weapon:"knife", accumulatedExperience:0, bossHealth:130, enemies:{}, bossPosition:null };
  }
  
  componentWillMount(){
    var self = this;
    //search the board for enemies and place them to the enemies Array of the state
    this.props.boardState.forEach( (elem,index)=>{
        if (elem ==='weakEnemy'){
            let enemies = self.state.enemies;
            enemies['weakEnemy' + index]={index, health : 6}
            self.setState({enemies}, ()=>{console.log(self.state.enemies)})
        }
        if (elem ==='strongEnemy'){
            let enemies = self.state.enemies;
            enemies['strongEnemy' + index]={index, health : 14}
            self.setState({enemies}, ()=>{console.log(self.state.enemies)})
        }
        if (elem ==='boss'){
            let enemies = self.state.enemies;
            enemies['boss' + index]={index, health : 130}
            self.setState({enemies}, ()=>{console.log(self.state.enemies)})
        }
    } );
 
    
    function positionElements(element){
      var position = Math.floor(Math.random() * 1500);
      if   (self.props.boardState[position]!==0){console.log("Not here"); positionElements(element) }
      else {self.props.dispatch(actions.initialize(position, element));
            self.setState({index:position}, ()=>{
            document.getElementById(position-1).classList.remove('hidden');
            })
            console.log("hero"+position)  }
    }
    positionElements('Hero');

//    document.addEventListener("click", this._handleDocumentClick, false);
    document.addEventListener("keydown", function keyDown (event){
      
function fight(enemy,index){
  
    if (enemy === "weakEnemy"){
        //make to the hero a damage of 1-5 points
        let potentialDamage = [1,2,3,4,5];
        let damage = potentialDamage[Math.floor(Math.random() * potentialDamage.length)];
        self.setState({healthLevel: self.state.healthLevel-damage});
        
        //reduce the health of the weak enemy by 3 points if you have no experience and no "excalibur" or by 6 points if 
        //you have experience of "GranMaster or you have the "excalibur"
        //find the enemy
        
        let enemies    = self.state.enemies;
        if ( self.state.experienceLevel ==="GrandMaster" || self.state.weapon==="excalibur" ){
        enemies["weakEnemy" + index].health = enemies["weakEnemy" + index].health -6;
        }
        else{ 
          enemies["weakEnemy" + index].health = enemies["weakEnemy" + index].health -3}
          
        self.setState({enemies}, ()=>{console.log(self.state.enemies)});
        if (enemies["weakEnemy" + index].health <= 0){
          self.setState({accumulatedExperience: self.state.accumulatedExperience + 10}, ()=>{
            if (self.state.accumulatedExperience >=100 && self.state.experienceLevel != "GrandMaster"){ 
              self.setState({experienceLevel:"GrandMaster"})
              setTimeout( ()=>{alert("GrandMaster Level Achieved")}, 10 );
            }
          });    
        return "Enemy defeated"}
    }
    if (enemy === "strongEnemy"){
        //make to the hero a damage of 6-10 points
        let potentialDamage = [6,8,10];
        let damage = potentialDamage[Math.floor(Math.random() * potentialDamage.length)];
        self.setState({healthLevel: self.state.healthLevel-damage}, function(){
          console.log(self.state.healthLevel)
        })
    //reduce the health of the weak enemy by 5 points
    //find the enemy
        
        let enemies    = self.state.enemies;
        if ( self.state.experienceLevel ==="GrandMaster" && self.state.weapon==="excalibur" ){
        enemies["strongEnemy" + index].health = enemies["strongEnemy" + index].health -15;
        }
        if ( self.state.experienceLevel ==="GrandMaster" || self.state.weapon==="excalibur" ){
        enemies["strongEnemy" + index].health = enemies["strongEnemy" + index].health -7;
        }
        else {
        enemies["strongEnemy" + index].health = enemies["strongEnemy" + index].health -5;
        }
        self.setState({enemies}, ()=>{console.log(self.state.enemies)});
        if (enemies["strongEnemy" + index].health <= 0){
          self.setState({accumulatedExperience: self.state.accumulatedExperience + 50}, ()=>{
            if (self.state.accumulatedExperience >=100 && self.state.experienceLevel != "GrandMaster"  ){ 
              self.setState({experienceLevel:"GrandMaster"})
              setTimeout( ()=>{alert("GrandMaster Level Achieved")}, 10 );
            }
          });    
        return "Enemy defeated"} 
    } 
      if (enemy === "boss"){
        //make to the hero a damage of 15-40 points
        let potentialDamage = [15,25,35,45];
        let damage = potentialDamage[Math.floor(Math.random() * potentialDamage.length)];
        self.setState({healthLevel: self.state.healthLevel-damage}, function(){
          console.log(self.state.healthLevel)
        })
    //reduce the health of the boss by 5 points if you have nothing, by 10 if you have attained the skills of the GrandMaster or you have the Excalibur or by 25 points if you have both
    //find the enemy
       
        let enemies    = self.state.enemies;
        if ( self.state.experienceLevel ==="GrandMaster" && self.state.weapon==="excalibur" ){
        enemies["boss" + index].health = enemies["boss" + index].health -25
        var bossHealth = enemies["boss" + index].health
        self.setState({bossHealth})
        }
        if ( self.state.experienceLevel ==="GrandMaster" || self.state.weapon==="excalibur" ){
        enemies["boss" + index].health = enemies["boss" + index].health -10
        var bossHealth = enemies["boss" + index].health
        self.setState({bossHealth})
        }
        else {
        enemies["boss" + index].health = enemies["boss" + index].health -5
        var bossHealth = enemies["boss" + index].health
        self.setState({bossHealth})
        };
        self.setState({enemies}, ()=>{console.log(self.state.enemies)});
        if (enemies["boss" + index].health <= 0){   
        alert("You won");
        return "Enemy defeated"} 
    } 
  }   
    if (event.code==="ArrowUp"){ 
         
          if ( self.props.boardState[self.state.index - 50]===0 ){
              self.props.dispatch(actions.moveHeroUp( self.state.index - 50 ));
              self.setState({index:self.state.index - 50});
          }
          else if ( self.props.boardState[self.state.index - 50]==="Potion" ){
              self.props.dispatch(actions.moveHeroUp( self.state.index - 50 ));
              document.getElementById(""+self.state.index - 50+"").classList.remove('magicPotion');
              self.setState({index:self.state.index - 50, healthLevel: self.state.healthLevel + 10 }, function(){console.log(self.state.healthLevel)});
          }
          else if ( self.props.boardState[self.state.index - 50]==="excalibur" ){
              self.props.dispatch(actions.moveHeroUp( self.state.index - 50 ));
              document.getElementById(""+self.state.index - 50+"").classList.remove('excalibur');
              self.setState({index:self.state.index - 50 ,weapon:"excalibur"});
              setTimeout(function(){ alert("Excalibur is your new Weapon; If your fighting skills are that of a GrandMaster, go fight the Red BOSS")}, 10);
          }
          //else fight the enemies
          else if( self.props.boardState[self.state.index - 50]==="weakEnemy" && self.state.healthLevel>0 ){
              //start the fight 
              let stateOfEnemy = fight('weakEnemy' , self.state.index - 50 );
              if (stateOfEnemy==="Enemy defeated"){
                console.log('weak enemy defeated');
                document.getElementById(""+self.state.index - 50+"").classList.remove('weakEnemy');
              self.props.dispatch(actions.moveHeroUp( self.state.index - 50 ));
              
              self.setState({index:self.state.index - 50}, function(){console.log(self.state.healthLevel)});  
              }
          }
          else if( self.props.boardState[self.state.index - 50]==="strongEnemy" && self.state.healthLevel>0){
              //start the fight 
              let stateOfEnemy = fight('strongEnemy' , self.state.index - 50 );
              if (stateOfEnemy==="Enemy defeated"){  
                
              self.props.dispatch(actions.moveHeroUp( self.state.index - 50 ));
              document.getElementById(""+self.state.index - 50+"").classList.remove('strongEnemy');
              self.setState({index:self.state.index - 50}, function(){console.log(self.state.healthLevel)});  
              }
          }      
          else if( self.props.boardState[self.state.index - 50]==="boss" && self.state.healthLevel>0){
              //start the fight
             console.log("fighting the boss");
              let stateOfEnemy = fight('boss' , self.state.index - 50 );
              console.log(stateOfEnemy);
              if (stateOfEnemy==="Enemy defeated"){ 
              console.log("boss enemy is defeated");  
              self.props.dispatch(actions.moveHeroUp( self.state.index - 50 ));
              document.getElementById(""+self.state.index - 50+"").classList.remove('boss');
              self.setState({index:self.state.index - 50}, function(){console.log(self.state.healthLevel)});  
              }
          }      
          
    
    }
    else if (event.code==="ArrowDown"){
          console.log('Arrow Down pressed');
          if ( self.props.boardState[self.state.index + 50]===0 ){
              self.props.dispatch(actions.moveHeroDown( self.state.index + 50 ));
              self.setState({index:self.state.index + 50});
          }
          else if ( self.props.boardState[self.state.index + 50]==="Potion" ){
              self.props.dispatch(actions.moveHeroDown( self.state.index + 50 ));
              document.getElementById(""+parseInt(self.state.index + 50)+"").classList.remove('magicPotion');
              self.setState({index:self.state.index + 50, healthLevel: self.state.healthLevel + 10 }, function(){console.log(self.state.healthLevel)});
          }
          else if ( self.props.boardState[self.state.index + 50]==="excalibur" ){
              self.props.dispatch(actions.moveHeroDown( self.state.index + 50 ));
              document.getElementById(""+parseInt(self.state.index + 50)+"").classList.remove('excalibur');
              self.setState({index:self.state.index + 50 ,weapon:"excalibur"});
              setTimeout(function(){ alert("Excalibur is your new Weapon; If your fighting skills are that of a GrandMaster, go fight the Red BOSS")}, 10);
          }
          //else fight the enemies
          else if( self.props.boardState[self.state.index + 50]==="weakEnemy" && self.state.healthLevel>0 ){
              //start the fight 
              let stateOfEnemy = fight('weakEnemy' , self.state.index + 50 );
              if (stateOfEnemy==="Enemy defeated"){
              document.getElementById(""+ parseInt(self.state.index + 50)+"").classList.remove('weakEnemy');   
              self.props.dispatch(actions.moveHeroDown( self.state.index + 50 ));
             
              self.setState({index:self.state.index + 50}, function(){console.log(self.state.healthLevel)});  
              }
          }
          else if( self.props.boardState[self.state.index + 50]==="strongEnemy" && self.state.healthLevel>0){
              //start the fight 
              let stateOfEnemy = fight('strongEnemy' , self.state.index + 50 );
              if (stateOfEnemy==="Enemy defeated"){  
                
              self.props.dispatch(actions.moveHeroDown( self.state.index + 50 ));
              document.getElementById(""+parseInt(self.state.index + 50)+"").classList.remove('strongEnemy');
              self.setState({index:self.state.index + 50}, function(){console.log(self.state.healthLevel)});  
              }
          }      
          else if( self.props.boardState[self.state.index + 50]==="boss" && self.state.healthLevel>0){
              //start the fight
            
              let stateOfEnemy = fight('boss' , self.state.index + 50 );
              console.log(stateOfEnemy);
              if (stateOfEnemy==="Enemy defeated"){ 
             
              self.props.dispatch(actions.moveHeroDown( self.state.index + 50 ));
              document.getElementById(""+parseInt(self.state.index + 50)+"").classList.remove('boss');
              self.setState({index:self.state.index + 50}, function(){console.log(self.state.healthLevel)});  
              }
          }
      
      
      
    } 
    else if (event.code==="ArrowRight"){
      
      
       if ( self.props.boardState[self.state.index + 1]===0 ){
              self.props.dispatch(actions.moveHeroRight( self.state.index + 1 ));
              self.setState({index:self.state.index + 1});
          }
          else if ( self.props.boardState[self.state.index + 1]==="Potion" ){
              self.props.dispatch(actions.moveHeroRight( self.state.index +1 ));
              document.getElementById(""+parseInt(self.state.index + 1)+"").classList.remove('magicPotion');
              self.setState({index:self.state.index +1, healthLevel: self.state.healthLevel + 10 }, function(){console.log(self.state.healthLevel)});
          }
          else if ( self.props.boardState[self.state.index + 1]==="excalibur" ){
              self.props.dispatch(actions.moveHeroRight( self.state.index + 1 ));
              document.getElementById(""+parseInt(self.state.index + 1)+"").classList.remove('excalibur');
              self.setState({index:self.state.index + 1 ,weapon:"excalibur"});
              setTimeout(function(){ alert("Excalibur is your new Weapon; If your fighting skills are that of a GrandMaster, go fight the Red BOSS")}, 10);
          }
          //else fight the enemies
          else if( self.props.boardState[self.state.index + 1]==="weakEnemy" && self.state.healthLevel>0 ){
              //start the fight 
              let stateOfEnemy = fight('weakEnemy' , self.state.index + 1 );
              if (stateOfEnemy==="Enemy defeated"){
              document.getElementById(""+ parseInt(self.state.index + 1)+"").classList.remove('weakEnemy');   
              self.props.dispatch(actions.moveHeroRight( self.state.index + 1 ));
             
              self.setState({index:self.state.index + 1}, function(){console.log(self.state.healthLevel)});  
              }
          }
          else if( self.props.boardState[self.state.index + 1]==="strongEnemy" && self.state.healthLevel>0){
              //start the fight 
              let stateOfEnemy = fight('strongEnemy' , self.state.index + 1 );
              if (stateOfEnemy==="Enemy defeated"){  
                
              self.props.dispatch(actions.moveHeroRight( self.state.index + 1 ));
              document.getElementById(""+parseInt(self.state.index + 1)+"").classList.remove('strongEnemy');
              self.setState({index:self.state.index + 1}, function(){console.log(self.state.healthLevel)});  
              }
          }      
          else if( self.props.boardState[self.state.index + 1]==="boss" && self.state.healthLevel>0){
              //start the fight
            
              let stateOfEnemy = fight('boss' , self.state.index + 1 );
              console.log(stateOfEnemy);
              if (stateOfEnemy==="Enemy defeated"){ 
             
              self.props.dispatch(actions.moveHeroRight( self.state.index + 1 ));
              document.getElementById(""+parseInt(self.state.index +1)+"").classList.remove('boss');
              self.setState({index:self.state.index + 1}, function(){console.log(self.state.healthLevel)});  
              }
          }
      
      
      
    
      
      
    }  
    else if (event.code==="ArrowLeft"  ){
 if ( self.props.boardState[self.state.index - 1]===0 ){
              self.props.dispatch(actions.moveHeroLeft( self.state.index - 1 ));
              self.setState({index:self.state.index - 1});
          }
          else if ( self.props.boardState[self.state.index -1]==="Potion" ){
              self.props.dispatch(actions.moveHeroLeft( self.state.index - 1 ));
              document.getElementById(""+self.state.index - 1+"").classList.remove('magicPotion');
              self.setState({index:self.state.index - 1, healthLevel: self.state.healthLevel + 10 }, function(){console.log(self.state.healthLevel)});
          }
          else if ( self.props.boardState[self.state.index - 1]==="excalibur" ){
              self.props.dispatch(actions.moveHeroLeft( self.state.index - 1 ));
              document.getElementById(""+self.state.index - 1+"").classList.remove('excalibur');
              self.setState({index:self.state.index - 1 ,weapon:"excalibur"});
              setTimeout(function(){ alert("Excalibur is your new Weapon; If your fighting skills are that of a GrandMaster, go fight the Red BOSS")}, 10);
          }
          //else fight the enemies
          else if( self.props.boardState[self.state.index - 1]==="weakEnemy" && self.state.healthLevel>0 ){
              //start the fight 
              let stateOfEnemy = fight('weakEnemy' , self.state.index - 1 );
              if (stateOfEnemy==="Enemy defeated"){
                
                document.getElementById(""+self.state.index - 1+"").classList.remove('weakEnemy');
              self.props.dispatch(actions.moveHeroLeft( self.state.index - 1 ));
              
              self.setState({index:self.state.index - 1}, function(){console.log(self.state.healthLevel)});  
              }
          }
          else if( self.props.boardState[self.state.index - 1]==="strongEnemy" && self.state.healthLevel>0){
              //start the fight 
              let stateOfEnemy = fight('strongEnemy' , self.state.index - 1 );
              if (stateOfEnemy==="Enemy defeated"){  
                
              self.props.dispatch(actions.moveHeroLeft( self.state.index - 1 ));
              document.getElementById(""+self.state.index - 1+"").classList.remove('strongEnemy');
              self.setState({index:self.state.index - 1}, function(){console.log(self.state.healthLevel)});  
              }
          }      
          else if( self.props.boardState[self.state.index - 1]==="boss" && self.state.healthLevel>0){
              //start the fight
            
              let stateOfEnemy = fight('boss' , self.state.index -1 );
              console.log(stateOfEnemy);
              if (stateOfEnemy==="Enemy defeated"){ 
              console.log("boss enemy is defeated");  
              self.props.dispatch(actions.moveHeroLeft( self.state.index -1 ));
              document.getElementById(""+self.state.index - 50+"").classList.remove('boss');
              self.setState({index:self.state.index - 50}, function(){console.log(self.state.healthLevel)});  
              }
          }      
          
      
      
    }
    
    });
}
    
  render(){
    if (this.state.healthLevel<=0){
      return (<h1>GAME OVER! You lost!</h1>)  
    } else {
    return(
      <div>
      <div style = {{top:parseInt(this.state.index/50)*12 + 6.66666+ "px", left:(this.state.index%50)*12 + 6.66666 + "px"}} className={this.state.class} >
      </div>
      <Infos weapon={this.state.weapon} health={this.state.healthLevel} experienceLevel={this.state. experienceLevel} bossHealth={this.state.bossHealth} experience={this.state.accumulatedExperience} />
      </div>
    )
    }
  }
  
}

module.exports = connect(
  (state)=>{
    return{
      boardState  :state.boardState //now boardState is available as this.props.boardState
    };
  }
)(Hero);


