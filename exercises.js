/*Hey Prepstars!!!  By now, you should have a good understanding of the basics of Javascript. 

The following exercises will be a good review of the materials we covered in class. Run node in your terminal to test your code.

Don't forget to commit and push your work after each completed exercise.

Now, unleash your coding beast!

/*1.  Variables with a String as their value.
Declare variables named yourName, neighborName, teacherName.  Console log each variable.*/

let yourName = 'Lewis Nozaki';
let neighborName = 'Luke Fiorio';
let teacherName = 'Vic Lee';

console.log("Your Name: " + yourName);
console.log("Neighbor's Name: " + neighborName);
console.log("Teacher's Name: " + teacherName);

/*2. Variable with a Number as their value.
Declare variables named numberOfFloorsBurjKhalifa, TokyoOlympicsYear. Please assign the actual data for each variable.
Console log each variable.*/

let numberOfFloorsBurjKhalifa = 163;
let TokyoOlympicsYear = 2020;

console.log("The Burj Khalida has " + numberOfFloorsBurjKhalifa + " floors.");
console.log("The Tokyo Summer Olympics will be held in the year " + TokyoOlympicsYear);

/*3. Variables with Boolean values
Declare variables named lovesPrepClass, eatsDonuts, drinksGin.  Console log each variable.*/

let lovesPrepClass = true;
let eatsDonuts = true;
let drinksGin = false;

console.log("Loves Prep Class = " + lovesPrepClass);
console.log("Eats donuts = " + eatsDonuts);
console.log("Drinks Gin = " + drinksGin);

/*4. Variable with Null values
Declare variables named completedCodingChallenge, traveledToSpace.  Console log each variable*/

let completedCodingChallenge = null;
let traveledToSpace = null;

console.log("Completed Coding Challenge = " + completedCodingChallenge);
console.log("Traveled to Space = " + traveledToSpace);

/*5.  Variables with Array for its value.
Declare a variable named japanPrefectures and assign the value of any 5 prefectures in Japan.
Console log the variable 
Console log the value at index 1.
Console log the value at index 3.*/

let japanPrefectures = ['tokyo' , 'Osaka' , 'Kyoto' , 'Nara' , 'Hokkaido'];

console.log("Here are a few Prefectures in Japan: " + japanPrefectures);
console.log(japanPrefectures[1]);
console.log(japanPrefectures[3]);

/*6.  Variable with Array for its value.
Declare a variable named planets and assign the value of each planet in our solar system, in the order of distance from the sun.  
Console log the variable
Console log "Earth" using the index position
Console log "Uranus" using the index position*/

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
console.log('Here are the planets in our Solar System: ' + planets);
console.log(planets[2]);
console.log(planets[6]);

/*7. Variables with Array for its value.
Declare a variable named india and assign the value of 3 popular tourist attractions.  
Console log the variable.*/

let india = ['Taj Mahal', 'Amber Palace', 'Hawa Mahal'];
console.log('3 popular tourist attractions in India are: ' + india);

/*8. Adding new elements to an array.
Add another popular tourist attraction to the india variable from position 1 of the index.
(hint, it is not the push() method). Console log the variable.*/

india.splice(1, 0, 'Agra Fort');
console.log(india);

/*9. Removing the last element from an array.
Using the same india variable, remove the last element from the array. Console log the variable. */

india.pop();
console.log(india);

/*10. Removing an element from an array into a new array. 
Remove the first two elements in the snacks array and return a new array.
Console log the new variable. */

var snacks = ["peanut butter cup oreo", "birthday cake oreo", "banana split oreo", "watermelon oreo", "cookie dough oreo", "creamsicle oreo"];

let newArr = [];

newArr.push(snacks[0], snacks[1]);
console.log(newArr);

/*11. Declare two variables with names of your choosing and use the triple comparison operator (===) to compare:
a) two strings "Racecar" and "racecar"
b) a string and a number "three" and 3

console log each variable*/

let same = 'Racecar';
console.log(same === 'racecar');

let sameTwo = 'three';
console.log(sameTwo === 3);

/*12.  Declare a literal object named "hotel" with properties and values set to:

    name    => "Hilton"
    rooms   => 200
    pool    => true
    checkIn => null

 console log the object*/

let hotel = {
   name: 'Hilton',
   rooms: 200,
   pool: true,
   checkIn: null,
}

console.log(hotel);

/*13.  Declare a literal object named "car" with properties and values set to:

    make  => "BMW"
    model => "X5"
    year  => 2015
    doors => 4

 console log the object*/

let car = {
   make: 'BMW',
   model: 'X5',
   year: 2015,
   doors: 4, 
}

console.log(car);

/*14.  Declare a literal object named bigBox and set its value to be an empty object.

Add a property named size and set it to a random number value between 0 and 50 (hint, use Math.something...)
Add a property named color and set it to any color.
Add a property named contents and set it to be an empty array

console log the object*/

let bigBox = {};

bigBox.size = Math.floor(Math.random() * 10);
bigBox.color = 'Cornflower Blue';
bigBox.contents = [];

console.log(bigBox);

/*15.  Declare a literal object named "colorMeBadd" with properties and values set to:

   iro        => [literal object]

                  akai      => 'red'
                  aoi       => 'blue'
                  midori    => 'green'
                  shiroi    => 'white'
                  pinku     => 'pink'
                  murasaki  => 'purple'

   isJapanese => true              

console log the object */ 

let colorMeBadd = {
   akai: 'red',
   aoi: 'blue',
   midori: 'green',
   shiroi: 'white',
   pinku: 'pink',
   murasaki: 'purple',
}

console.log(colorMeBadd);

/*16. As the general manager for the DevLeague Prep Beer Pong Team, your job is to select the starting players from the roster array. Create two variables, Ateam and Bteam and assign each an empty array. You will then assigned players that have an even number index position to the Ateam and odd number index position to the Bteam. Let the games begin! Console log the results.*/

var roster = ["Alex", "Laura", "Sami", "Jasmine", "Adam", "Dakota", "Jonathon", "Luther", "Kevin", "Vic"];

let Ateam = [];

let Bteam = [];

for(i=0;i<roster.length;i++){
   if (i%2 === 0){
      Ateam.push(roster[i])
   }else{
      Bteam.push(roster[i])
   }
};

console.log(Ateam);
console.log(Bteam);

/*17. Using the japanPrefectures array you created in exercise 5, create a for loop that iterates through this array and console logs the following message:

"The location at i is:  ."  and append the value of i and the value stored within the Array at that index to this string.

i.e. "The locaton at 0 is Tokyo."*/

for(i=0;i<japanPrefectures.length;i++){
   console.log('The location at ' + i + ' is ' + japanPrefectures[i]);
}

/*18. Declare a function named addUp.
This function will take a number parameter and add up all the numbers from 1 to that number.
The parameter will be any number from 1 to 88.*/

function addUp(num){
 let sum = 0;
 for(i=0;i<=num;i++){
    sum += i;
 }
return sum;
}

console.log(addUp(88));

/*19. Declare a variable named oddNumbers and assign it to an empty array
Use a for loop to add only odd numbers to an Array.  Add 30 odd numbers to the oddNumbers variable starting with the value of 1.*/

let oddNumbers = [];

for(i=0;i<=60;i++){
   if(i%2 === 1){
      oddNumbers.push(i);
   }
}

console.log(oddNumbers);

/*20.  Declare a function named oldEnough.
This function takes in a number parameter age and returns a Boolean value true or false if the age is lower than the minimum legal drinking age in the Antigua. Invoke this function by passing in a number value.  Google search Antigua's minimum drinking age to confirm the number value.  Store the return value to a variable named drinkinAlready and console log this variable*/

function oldEnough(age){
   if(age <= 16){
      return true;
   }
}

let drinkinAlready = oldEnough(16);
console.log(drinkinAlready);

/*21. Declare a function named contentFiller which takes in a single parameter which will be an object.  Write a for loop that will put 5 random numbers between the values of 0 to 20 in the contents array in the bigBox object you created in exercise 14.  Console log the result.*/

function contentFiller(obj){
   for(i=0;i<=5;i++){
   obj['contents'].push(Math.floor(Math.random()* 20));
   }
   return obj
}

console.log(contentFiller(bigBox));

/*22.  Declare a function named firstReverse which takes a single parameter str.  This function will take a string parameter being passed in and return the string in reverse order.*/

let how = "how now brown cow";

function firstReverse(str){
   let step1 = str.split(' ');
   let step2 = step1.reverse();
   let step3 = step2.join(' ');
   return step3;
}

console.log(firstReverse(how));

/*23. Declare a function named letterCap which takes a single parameter str. This function will capitalize the first letter of the string you pass in to invoke the function. 
*/

let sentenceOne = "success will be yours";

function letterCap(str){
   let step1 = str.charAt(0);
   let step2 = step1.toUpperCase();
   let step3 = str.slice(1);
   let step4 = step2 + step3;
   return step4;
}

console.log(letterCap(sentenceOne));

/*24. Declare a function named longestWord which takes a single parameter str. This function will return the longest word in the string when you invoke this function.*/ 

// function longestWord(str){
//    let x = str.split(' ');
//    let n = 0;
//    for(i=0;i<x.length;i++){
//       if(x[i].length>n){
//          n += x[i].length
//       }
//    }
//    return n;
// }
// console.log(longestWord(sentence));

let string = 'The longest word in this sentence is Onomatopeoia';

function longestWord(str){
   let arrayOne = str.split(' ');
   let num = 0;
   let word;
   for (i=0; i<arrayOne.length;i++){
      if(arrayOne[i].length > num){
         num = arrayOne[i].length;
         if(num === arrayOne[i].length)
         word = arrayOne[i];
      }
   }
   return word;
}
console.log(longestWord(string));