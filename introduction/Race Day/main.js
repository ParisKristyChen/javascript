let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 18;
raceNumber >=18 && registeredEarly ? console.log("false"): console.log("true"); 
if ( runnersAge>=18 && registeredEarly)  {
  raceNumber += 1000;
  console.log("they will race at 9:30 am.");
} else if(runnersAge >=18 || registeredEarly){
  console.log("Late adults run at 11:00 am")
} else if (runnersAge < 18) {
  console.log("Youth registrants run at 12:30 pm")
};