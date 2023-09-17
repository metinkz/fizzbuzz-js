let inputNumber = parseInt(prompt("Please enter a finishing number: "))

for(let i = 1; i <= inputNumber; i++) {
  if(i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i)
  }
}