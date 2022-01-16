// recreating logical statements 

// object for some men 
let men = {
    "Aristotle":true,
    "Socrates":true,
    "Alexander":true,
    "Democratis":true
};

// object for some mortals in earth
let mortal = {
    "men":true,
    "women":true,
    "animals":true,
    "nature":true
};

if("men" in mortal){
    console.log("All men are mortal");
    if("Socrates" in men){
        console.log("Socrates is a man ");
        console.log("Therefore Socrated is a mortal");
    }
    else{
        console.log("Socrates is not a man");
        console.log("Socrates is immortal");
    }
}
else{
    console.log("All men are immortal");
    if("Socrates" in men){
        console.log("Socrates is a man ");
        console.log("Therefore Socrated is a immortal");
    }
    else{
        console.log("Socrates is not a man");
        console.log("Socrates is immortal");
    }
}


// Extra credit .....
let cake = {
    "flavour":"vanilla",
    "size":"medium"
};

if(cake.flavour === "chocolate" || "vanilla"){
    console.log("This cake is either chocolate or vanilla");
    if(cake.flavour !== "chocolate"){
        console.log("This cake is not chocolate ");
        console.log("Therefore,this cake is vanilla");
    }
    else{
        console.log("This cake is not vanilla");
        console.log("Therefore, this cake is chocolate");
    }
}
else{
    console.log("This cake is neither chocolate or vanilla ");
}