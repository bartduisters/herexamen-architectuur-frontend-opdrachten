const addTwoStrings = (a, b) => a + b;
const removeLastLetter = (a) => a.slice(0, -1);
const removeFirstLetter = (a) => a.slice(1);
const shout = (a) => a.toUpperCase() + "!!!";

const shoutTwoStrings = (a, b) => shout(addTwoStrings(a, b));

addTwoStrings('John', 'Duck'); // JohnDuck
removeLastLetter('Duck'); // Duc
removeFirstLetter('John'); // ohn
shout('John Duck'); // JOHN DUCK!!!
shoutTwoStrings('John', 'Duck'); // JOHNDUCK!!!
