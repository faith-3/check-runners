let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let runnerAge;
const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

line.question('Enter the runner age: ', (age) => {
  runnerAge = age;

if(runnerAge>18 && isEarly){
  console.log(`Runner ${raceNumber+1000}, Your racing time is 9:30am.`)
}
else if(runnerAge<18){
  console.log(`Runner ${raceNumber}, Your racing time is 12:30am.`)
}
else{
  console.log(`Runner ${raceNumber}, To know your racing time you need to see the registration desk.`)
}

 line.close();
});
