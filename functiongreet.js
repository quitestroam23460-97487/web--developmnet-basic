//function greet(name) {
  // console.log("Hello", name);
//}            

//greet("Buddy");

//const multiply = function(x,y){
  //  return x*y;
//}       
//console.log("The result of multiplication is:", multiply(5,6));



// function call
//function greet(name,callback) {
  //  console.log("Hello", name);
    //callback();
//}   

//function sayGoodbye() {
  //  console.log("Goodbye!");
//}
//greet("Buddy", sayGoodbye);



// function order food
//function orderFood(food, callback) {
  //  setTimeout(() => {
    //    console.log("Your order is placed for", food);
      //  callback();
    //}, 2000);
    //}

    //orderFood("Veg meal", function() {
      //  console.log("Veg meal is ready!");
    //});

    //console.log("Hotel tasty Welcomes you !");


    // function to check if person is applicable for job or not having age more than 18 and less than 60

function checkEligibility(age) {
    if (age > 18 && age < 60) {
        console.log("You are eligible for the job.");
    } else {
        console.log("You are not eligible for the job.");
    }                                   
}

checkEligibility(25);
checkEligibility(17);
checkEligibility(60);

  