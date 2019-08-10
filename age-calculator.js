const ageCalculator = function (name, yearOfBirth, currentYear) {
  if(currentYear < yearOfBirth) {
    return "Invalid year of birth"
  }
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));