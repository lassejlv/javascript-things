/*
Du skal i denne opgave finde oplysninger om følgende array funktioner:


pop
push
shift
unshift
slice
forEach
Du skal oprette et kode eksempel for hver funktion og logge resultatet til din konsol, Og du skal beskrive hvad hver funktion gør, som en kommentar ved din kode,
*/

// pop
let popArray = [1, 2, 3, 4, 5];
popArray.pop();
console.log(popArray) // Her har vi fjernet 5 fra vores array

// push
let pushArray = [1, 2, 3, 4, 5];
pushArray.push(6);
console.log(pushArray) // Her har vi tilføjet 6 til vores array

// shift
let shiftArray = [1, 2, 3, 4, 5];
shiftArray.shift();
console.log(shiftArray) // Her har vi fjernet 1 fra vores array

// unshift
let unshiftArray = [1, 2, 3, 4, 5];
unshiftArray.unshift(0);
console.log(unshiftArray) // Her har vi tilføjet 0 til vores array

// slice
let sliceArray = [1, 2, 3, 4, 5];
let sliced = sliceArray.slice(2, 4);
console.log(sliced) // Her har vi lavet et nyt array med værdierne 3 og 4

// forEach
let forEachArray = [1, 2, 3, 4, 5];

forEachArray.forEach(function (value) {
    console.log(value) // Her gennemgår vi hvert element i vores array og logger det til konsollen
});