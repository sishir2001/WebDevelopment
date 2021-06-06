// Homework4 , creating fucntions for Homework3 logical arguments
// recreating logical statements 

const isManAndMortal = (name)=>{

    try{
        let menMortal = {
            "Aristotle":true,
            "Socrates":true,
            "Alexander":true,
            "Democratis":true
        };
        // the above obj contains men who are mortals
        // isManMortal verifies the name with the menMortal object 
        if(typeof(name) === "string"){
            if(name in menMortal){
                return true;
            }   
            else{
                return false;
            }
        }
        else{
           return false; 
        }
    }
    catch(err){
        console.log("An error has occured , and the error : ");
        console.log(err);
    }
};
// extra credit .....
const isChocolateVanilla = (cakeArr,isChocolate)=>{
    if(isChocolate){
        return cakeArr[1];
    }
    else{
        return cakeArr[0];
    }
};
// ......


console.log("Is Socrates mortal : "+isManAndMortal("Socrates"));
console.log("Is Sishir mortal : "+isManAndMortal("Sishir"));
console.log("Is Alexander mortal : "+isManAndMortal("Alexander"));
// extra credit ...
console.log("The Flavour of the cake : " + isChocolateVanilla(["Vanilla","Chocolate"],true));
console.log("The Flavour of the cake : " + isChocolateVanilla(["Vanilla","Chocolate"],false));
// .......