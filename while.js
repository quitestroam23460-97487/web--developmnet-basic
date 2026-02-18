i=1;
 while (i<=10){
    console.log(i)
    i++;
 }

 do{
    console.log(i)
    i++;
 }while(i<=20);



 // even numbers
 let j=2;
    while (j<=20){
        console.log(j)
        j+=2;
    }

  
  // reverse a number
    let num=12345;
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    console.log("reverse",rev);
  
