
//create angular app
const FoodApp = angular.module('FoodApp', []);

//create controller
FoodApp.controller('FoodController', function(){
    console.log('in controller');

    let fm = this;

    fm.foodArr = [];

    fm.addFood = function(){
        console.log('in addFood', fm.foodStuffIn);
        fm.foodArr.push(fm.foodStuffIn);
    }//end addFood

});//end controller