let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;
if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true)
  {
    console.log('Adults that registered early will race at 9:30. The race number is: ' + raceNumber);
  }
else if (runnerAge > 18 && !registeredEarly === true)
  {
    console.log('Adults that did not register early will race at 11:00. The race number is: ' + raceNumber);
  }
else if (runnerAge <18)
  {
    console.log('Anyone under the age of 18, will race at 12:30pm. The race number is: ' + raceNumber);
  }
else 
	{
    console.log('If you are 18 years old, please visit the registration desk.');
  }
