
//use browser developer options to test with console or run node.


//function declaration-can hoist-try not to use for that reason
/*
function highlightWord() {
    console.log('hello world')
}
*/



//function expression-can't hoist
/*const speak = function(name,time) {
  console.log(`good day! ${time} ${name}`);
};
speak('john', 'morning');*/



/*const speak = function(name,time) {
    console.log(`good day! ${time} ${name}`);
};
speak('john', 'morning');*/




/*const speak = function(name = 'joe',time = 'night') {
    console.log(`good ${time} ${name}`);
};
speak();
speak('sarah', 'afternoon');//this over writes the original values
speak('linda');//this only over wrights the name value*/



/*const calcArea = function (radius) {
    let area = 3.14 * radius**2;
    return area;
}

const area = calcArea(5);
console.log(area);*/


/*const calcArea = function (radius) {
    return 3.14 * radius**2;
}
const area = calcArea(5);
console.log(area);*/

//arrow function
/*const calcArea = (radius) => {
    return 3.14 * radius**2;
};
const area = calcArea(5);
console.log('area is:', area);*/

/*const calcArea = radius => 3.14 * radius**2;
const area = calcArea(5);
console.log('area is:', area);*/





