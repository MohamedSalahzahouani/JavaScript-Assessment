//Task1:
const name = "Salah";
const age = 19;
const student = true;
if (student) {
  console.log("I'am a student");
} else {
  console.log("I'm not student");
}
let favoriteprogramminglanguages = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Boosrtap",
];
//Task2:
function greetUser(name) {
  console.log(`Hello ${name} ! Welcome to your Todo List App`);
}
greetUser("Salah");
function calculateAgeInDays(age) {
  const ageenjours = age * 365;
  return ageenjours;
}
console.log(calculateAgeInDays(19));
//Task3:
function checkEligibility(age) {
  if (age > 18) {
    console.log("you are eligible to vote ");
  } else {
    console.log("you aren't eligible to vote ");
  }
}
checkEligibility(19);
//Task4:
for (i = 0; i < 6; i++) {
  console.log(favoriteprogramminglanguages[i]);
}
