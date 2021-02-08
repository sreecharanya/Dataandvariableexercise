
//A.Declare and assign variables
let shuttleName='Destination';
let shuttleSpeed=17500;
let distanceToMars = 225000000;
let distanceToMoon=384400;
let milesPerKilometer=0.621;

//B.Print out the type of each variable
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);


//C.Calculate a space mission!
let milesToMars= distanceToMars*milesPerKilometer;
let hoursToMars=milesToMars/shuttleSpeed;
let daysToMars=hoursToMars/24;

//D.Print out the results of your calculations
console.log(shuttleName + ", will take " + daysToMars + " days to reach Mars.");

//E.Now calculate a trip to the Moon

let milesToMoon = distanceToMoon *milesPerKilometer;
let hoursToMoon = milesToMoon/shuttleSpeed;
let daysToMoon =hoursToMoon/24;

console.log(shuttleName + ", will take " + daysToMoon + " days to reach Moon.");