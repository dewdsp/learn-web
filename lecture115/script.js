var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array);

delete array[0];

console.log(array);
array[0] = "Banana";
console.log(array);
array.shift();
console.log(array);
array.push("Kiwi");
console.log(array);
array.splice(0,1);
console.log(array);
console.log(array.sort());
console.log(array.reverse());


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);