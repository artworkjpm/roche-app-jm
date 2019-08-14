let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
let max = 0;
let maxName = null;

function topSalary(salaries) {
  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return console.log(`${maxName}: ${max}`);
}

topSalary(salaries);

/* let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [x, y] of Object.entries(user)) {
  console.log(`${x}:${y}`); // name:John, then age:30
} */
