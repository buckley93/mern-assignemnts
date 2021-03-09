// 1. 
// console.log(hello);                                   
// var hello = 'world'; 

//rewrite:
// console.log(hello);
// let hello = 'world';
// gives error

//2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.function call from-rainbow">log(needle);
// } this gives us an error for call

//rewrite
// function test(){
    //     let needle = 'magnet';
    //     console.function call from-rainbow">log(needle);
// }
// let needle = 'haystack';
// test(); // this gives us an error for call

//3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//rewrite
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// let brendan = 'super cool';
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

//rewrite

// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }
// let food = 'chicken';
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
// console.log(food);

//rewrite

// mean();
// console.log(food);
// const mean = function() {
//     food = "chicken";
//     console.log(food);
//     let food = "fish";
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
// console.log(genre);

//rewrite

// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     let genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// let genre = "disco";
// rewind();
// console.log(genre); // throws an error

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
//     console.log(dojo);
//     dojo = "seattle";
//     console.log(dojo);
//     let dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo); 