// 1. 
// console.log(hello);                                   
// var hello = 'world'; 

// rewrite:

// var hello;
// console.log(hello);
// hello = 'world';

//2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.function call from-rainbow">log(needle);
// } this gives us an error for call

// function test(){
//     var needle = 'magnet';
//     console.function call from-rainbow">log(needle);
// }
// var needle = 'haystack';
// test();

//3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// var brendan;
// brendan = 'super cool';
// console.log(brendan);

//4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// var food;
// food = 'chicken';
// console.log(food);
// eat();

//5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food); // gives error mean is not a function

// var mean;
// mean();
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);

//6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); //undefined rock r&b disco

//rewrite

// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);

//7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo); // san jose undefined seattle burbank san jose

//rewrite

// function learn() {
//     var dojo;
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//8. bonus
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// } throws error with dojo = "closed for now"; can fix by putting double equals

//rewrite

// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
