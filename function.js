// function to find the square of a number 

 function square(num) {
    console.log(num*num);

 }  
  square(5);
  square(12);      


// function to find even or odd number

function evenodd(num) {
    if (num % 2 == 0) {
        console.log(num, "is an even number");
    }
    else {
        console.log(num, "is an odd number");
    }
}

evenodd(10);
evenodd(13);
evenodd(0);
evenodd(-4);

// function to find is prime or not 
  
let n = prompt("Enter a number: ");
n=parseInt(n);

function prime(a) {
    if (a <= 1)
        return false;

       for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0)
            return false;}
    return true;
}   
 isprime(n) ? console.log(n, "is a prime number") : console.log(n, "is not a prime number");   


 //greeting function and multiplication function using function expression  
 const greet= function(name){
    console.log("Hello", name);
 }

    greet("Madam ji");
    const multiply = function(x,y){
        return x*y;
    }
    console.log("The result of multiplication is:", multiply(5,6));