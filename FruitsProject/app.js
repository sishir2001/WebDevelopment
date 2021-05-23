const mongoose = require('mongoose');
// ! connecting to mongod server
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser:true});
// ! creating a schema for fruitsDB
const fruitsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Check the data entry , no Name Specified !"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review:String
});

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    favouriteFruit:fruitsSchema
});

// ! creating a collection .
const Fruit = mongoose.model("Fruit",fruitsSchema);
const Person = mongoose.model("Person",personSchema);


const watermelon = new Fruit({
    name:"Watermelon",
    rating:7,
    review:"Watery"
});
watermelon.save();

// const Amy = new Person({
//     name:"Amy",
//     age:21,
//     email:"amyadams@amy,in",
//     favouriteFruit:pineapple
// });
// Amy.save();
Person.updateOne({_id:"60a75f8daed3b1088d0ad915"},{favouriteFruit:watermelon},(err)=>{
    if(err) console.log(err);
    else console.log("Successfuly updated favourite fruit");
}); 


// const person = new Person({
//     name:"Jaladi Saai Sishir",
//     age:15,
//     email:"jaladianeesh@96gmail.com"
// });
// person.save();

// const apple  = new Fruit({
//     // name:"Apple",
//     rating:9,
//     review:"One of my favourite fruit"
// });
// apple.save();
// const person = new Person({
//     name:"Jaladi Saai Sishir",
//     age:19,
//     email:"jaladisishir96@gmail.com"
// });

// const person1 = new Person({
//     name:"Jaladi Saai Aneesh",
//     age:15
// });
// !fruit.save();
// !person1.save(()=> console.log("Saved Person to the db"));

// const orange = new Fruit({
//     name:"orange",
//     rating:8,
//     review:"Like to eat it sometimes"
// });

// const banana = new Fruit({
//     name:"banana",
//     rating:7,
//     review:"Like to eat it sometimes for energy"
// });

// ? to save multiple fruits at a time .
// Fruit.insertMany([orange,banana],(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully saved the list ");
//     }
// });
// ! Updating Person collection.
// Person.updateOne({_id:"60a760b44b8b5e08a9a5c88a"},{age:16},(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully updated people collection !");
//     }
// });
// Person.deleteOne({_id:"60a760b44b8b5e08a9a5c88a"},{age:16},(err)=>{
//     if(err) console.log(err);
//     else console.log("Succesfully Deleted age attribute in People Collection.");
// });



// ! reading from the database 
// Fruit.find((err,fruits)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         // ! closing the mongoose connection
//         mongoose.connection.close();
//         fruits.forEach((element)=>{
//             console.log(element._id + " : " + element.name);
//         });
//     }
// });

// // ! deleting from a entry from database 
// Person.deleteOne({_id:"60a7887f899d960cd958ba40"},(err)=>{
//     if(err) console.log(err);
//     else console.log("Successfully deleted an entry in fruitsDB.people ");
// }); 

// Person.find((err,person)=>{
//     mongoose.connection.close();
//     if(err){
//         console.log(err);
//     }
//     else{
//         person.forEach((element)=>{
//             console.log(element.name + " " + element.email + " "+ element.age);
//         })
//     }
// });

// !deleting many 
// Fruit.deleteMany({name:"orange"},(err)=>{
//     if(err) console.log(err);
//     else console.log("Successfully deleted entries with name: 'orange' ");
// });
