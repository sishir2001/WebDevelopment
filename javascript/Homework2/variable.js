/* Homework 2  */
/* 

var : varibles declared using var are globally or functionally scoped . When the variable is declared ourside a funciton, then its globally scoped and when the varibale is decalred inside a fuction its functionally scoped.
     * var variables can be redeclared and updated in the same scope and there will be no errors
     * Since its not block scoped , we can still access the value of the variable even not in the block scope.

let : varibles declared using let are block scoped and it is introduced in ES6 .
     * A block is a chunk bounded by {} .
     * let variables can be updated but not re-declared inside the same block scope where its been initialized.
    
const :  varibles declared using const are block scoped and it is introduced in ES6 .
     * const variables canoot be updated and re-declared inside the same block scope where its been initialized
     * const variables must be initialized at the same time of declaration .
     * The behavior is somewhat different when it comes to objects , while the const objects cannot be updated but their properties can be updated.
     

Hoisting : It is a javascript behavior for moving all declarations to the top of the function scope.
     * the programming fundamental of many programming language is to declare a variable and then initialize it but Javascript works in a different way .
     * JS hoists the declaration of a variable up and allows it to be used . This way a variable can be declared after it is used .
     * variable hoisting in JS :
        x = 5;
        var x;

*/


// using var 

function usingVar(){
    var myName = "Sishir";
    var myName = "Jaladi"; // redeclaration of var is allowed
    if(true){
        var lastName = "Saai";
    }
    console.log(myName+" "+lastName); // can access the lastName variable (no block scope)
}
// using let 
function usingLet(){
    let myName = "Sishir";
    myName = "Jaladi"
    // redeclaration is not possible , throws error
    if(true){
        let lastName = "Saai";
        console.log(myName+" "+lastName);
    }
    //cannot access lastName out of the block scope -> throws a reference error
}

// using const
function usingConst(){
    const myName = "Sishir";
    const obj = {
        name:myName,
        age:19
    };
    console.log(obj);
    //cannot redeclare or update the variable . Throws error
    if(true){
        // updating the properties of obj, age value updated .
        obj.age = 20;
        const lastName = "Saai";
        console.log(myName+" "+lastName);
    }
    // same as let, lastName out of block scope cannot be accessed.
    console.log(obj);
}

usingVar();
usingLet();
usingConst();
