/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a,b) {
    this.sum = function () {
      return a + b;
    };
    this.subtraction = function () {
      return a - b;  
    };
    this.multiplication = function () {
        return a * b;
   };
    this.division = function () {
         return a/b;
    };
  }
  
  const calculator = new Calculator(15, 5);
  console.log('Sum is',  calculator.sum());
  console.log('Substraction is',  calculator.subtraction());
  console.log('Multiplication is',  calculator.multiplication());
  console.log('Division is',  calculator.division());