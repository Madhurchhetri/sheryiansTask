// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// solve : 

// let age = prompt("enter your age");
//  if(age === null){
//     console.log(`you clicked cancel`);
    
// }else if(age.trim() ===""){
//     console.log('age bata de number me bsdk bakchodi karra');
    
// }else{
//     let Age = Number(age)
//     if(isNaN(Age)){
//         console.log("Number mein likh bsdk, text kyun daal raha?");
        
//     }
//     else if(Age >= 18){
//         console.log(`you are eligible and you can vote because your age is  ${Age}`);
        
//     }else{
//         console.log(` you are not eligible for vote `);
        
//     }
    
// }

// Q : 8. Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10.
// solve : 

// let num = 5;
// for(let i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
    
// }

// Q : 9  Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally. 
// solve :

// let count = 0;
// for(let i=1; i<=15; i++){
//     if(i>8){
//         count++
//         console.log(i);
        
//     }
// }
// console.log(count);

// Q : 10. Ask user for password and print access status Hardcoded correct password. Compare with user input.
// solve :

// let pd = prompt("enter your password");
// let correctPassword = "madhur123";
// if(pd === correctPassword){
//     console.log(`access`);
    
// }else{
//     console.warn(`denied you enter the wrong password`);
    
// }

// Q : 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// solve : 

//  let attempt = 3;
//  let correctPassword = "madhur123";
 

//  for(let i=1; i<=attempt; i++){
//     let pd = prompt(`enter your password (Attempt ${i}/${attempt}):`);
//     if(pd==null){
//         console.log(`you cancelled it`);
//         break;
//     }
    
//     if(pd===correctPassword){
//         console.log(`access granted`);
//         break;
        
//     }else if(i===attempt){
//         alert(`too many wrong attempt now your card is blocked`);
        
//     }else{
//         console.warn(`wrong password ! Attempt left : ${attempt-i}`);
        
//     }
    
//  }
 

// Q : 12. Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".
 
// solve : 

// let count = 0;

// for(let i=1; i; i++){
//     let user = prompt("type yes and entered if you want to stop then cancel it", "yes" );
//     if(user === null){
//         console.log(`you stop after ${i} `);
//         count = i;
//         break;
//     }

   
// }
// console.log(count);

// Q : 13. Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.
// solve :

// for(let i= 1; i<=50; i++){
//     if(i%7 === 0){
//         console.log(i);
        
//     }
// }

// Q : 14. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

// solve : 

// let sum = 0;
// for(let i=1; i<=30; i++){
//     if(i%2 === 1){
//         // console.log(i);
//         sum = sum + i
//     }
// }
// console.log(sum);

// Q : 15. Keep asking number until user enters an even number Use while loop. Stop only if input is even.

// solve :



//  let num = +prompt("enter your number");
// while(num%2 !== 0 ){
   
//    num = +prompt("enter your number");
    
// }
// console.log(`this is an even number ${num}`);

// for(let i = 1; i; i++){
//     let num = +prompt('enter your number')
//     if(num%2 === 0){
//         console.log(`this is an even number ${num}`);
//         break;
//     }
// }

// Q : 16. Print numbers between two user inputs Input start and end using prompt() → print all between.

// solve : 

// let num1 = +prompt('enter your number');
// let num2 = +prompt('enter your second number');

// if(isNaN(num1,num2)){
//     console.log("please number daal ");
    
// }else{
//     for(let i = num1; i<=num2; i++){
//         console.log(i);
        
//     }
// }

// Q : 17. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

// solve :

// let count = 0;
// for(let i = 1; i<=20; i++){
//     if(i%2 === 1){
//         count++
//         console.log(i);
        
        
//     }
//     if(count === 3 ){
//         break;
//     }
// }
// console.log(count);

// Q: 18. Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

// solve :

// let count = 0;
// for(let i=1; i<=5; i++){
//     let num = +prompt("enter the number");

//     if(num >=0){
//     count++;
//     console.log(num);
//     }
//     if(num<0){
//         console.log(num);
        
//     }
    
// }
// console.log(`${count} are psitive numbers`);

// Q : 19. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct Else → print “Insufficient balance”

// let attempt = 3;
// let balance = 5000;

// for(let i=1; i<=attempt; i++){
//     let amt = +prompt(`enter your amount Note : you have 3 attempt limits ${i} / ${attempt} : `)
//     if(isNaN(amt)){
//         console.log(`you entered wrong key please enter the number `);
//         break;
        
//     }else if(amt === null){
//         console.log(`you cancelled it`);
//         break;
        
//     }else if(amt>=0 && amt<1000){
//         console.log(`enter the amount start with 1000rs`);
//         break;
        
//     }else if(amt<=balance && amt>=1000){
//         console.log(`please collect your amount ${amt}rs.`);
//         break;
        
//     }else{
//         console.log(`you have Insufficient balance`);
//     }

// }