/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal={};
animal.species="duck";
animal['name']="ducka1";
animal.noises=[];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises=[];
noises[0]="quack";
noises.push("why you no quack");
noises.unshift("roar");
noises[noises.length]="more quack";
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises']=noises;
animal.noises.push('sooManyQuacks');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot notation, .propterites
 * bracket notation [''].
 * 2. What are the different ways of accessing elements on arrays?
 *index notation with bracket.
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals=[];
animals.push(animal);
console.log(animals);
var duck={ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var goose1={ species: 'goose', name: 'Yoma', noises: ['whoosh', 'whoooosh', 'whooshy', 'whoops'] };
var deer1={ species: 'deer', name: 'Bob', noises: ['doooo', 'deedee', 'buckkk', 'booo'] };
animals.push(goose1);
animals.push(deer1);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
   //array list of friends
// var friends=[];
// var randomFriends=function(ran){
// var random=Math.floor((Math.random() * ran.length));
//  return ran[random].name;
// }; 
// animals[0].friends=randomFriends(animals);
// animals[1].friends=randomFriends(animals);
// animals[2].friends=randomFriends(animals);
// animals[3].friends=randomFriends(animals);
// console.log(friends);


//testing more friends
var friends=[];
var randomFriends=function(ran){
var random=Math.floor((Math.random() * ran.length));
 return ran[random].name;
 
}; friends.push(randomFriends(animals));
console.log(friends);
animals[0].friends=friends;
animals[1].friends=friends;
animals[2].friends=friends;
animals[3].friends=friends;

console.log(friends);






/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
