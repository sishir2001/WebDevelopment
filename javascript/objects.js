console.log("Hello World");

var myObject = {
	type : "Person",
	name : "Sishir",
	age : 19,
	getAge : ()=>{
		console.log("My age : "+this.age);
	}
};



myObject.getAge();
