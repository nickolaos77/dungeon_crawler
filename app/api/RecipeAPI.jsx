module.exports={
  setRecipes: function (recipes){
    if (Array.isArray(recipes) ){
      localStorage.setItem('recipes',JSON.stringify(recipes));
      console.log("Inside RecipeAPI", recipes);
      return recipes;
    }
  },
  getRecipes: function (){
    var stringRecipes = localStorage.getItem('recipes');
    var recipes = [];
    try{
      recipes = JSON.parse(stringRecipes);
    } catch(e){
      console.log(e)
    }
    if(Array.isArray(recipes)){
      return recipes;
    } else {
      return [];
    }
  }
};