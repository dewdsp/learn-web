function checkDriverAge(age) {
    if (Number(age) < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(age) === 18) {
        return "Congratulations on your first year of driving, Enjoy the ride!";
    }
}

// console.log(checkDriverAge(18));

var list = ["tiger", "cat", "bear", "bird"];
// console.log(list);
var mixedList = ["apples",3,true]
// console.log(mixedList);
// console.log(list[0][2]);

var myList = ["cat", "bear", "elephant", "bee", "deer"];
console.log(myList);
var myNewList = myList.concat("monkey");
console.log(myNewList);