'use strict' ; 
 
let firstUl = document.getElementById("all-numbers") ;   
let secondUl = document.getElementById("even-numbers") ; 
let numbers= [100, 456, 98, 45, 73]; 

for (let i = 0; i < numbers.length; i++) { 
    {firstUl.innerHTML += '<li>${numbers[i]} </li>' ;  }
}  

for (let i = 0; i < numbers.length; i++) {  
    if (numbers[i] % 2 === 0)
    {secondUl.innerHTML += '<li>${numbers[i]} </li>' ; 
} 
} 

