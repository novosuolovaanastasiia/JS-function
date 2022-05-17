// Створи функцію, яка буде виводити кількість переданих їй аргументів.
console.log((function (a, b) { }).length)



/* Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */
let a = prompt("Enter some number")
let b = prompt("Enter some other number")
function returnNumber(a, b) {
  if (a < b) {
    alert(-1)
  } else if (a > b) {
    alert(1)
  } else if (a == b) {
    alert(0)
  } else {
    alert("Enter positive number")
  }
}
returnNumber(a, b)



// Напиши функцію, яка обчислює факторіал переданого їй числа.let n = prompt(`Enter some number`)
let n = prompt("Enter some number")
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
alert(`Factorial of your number is ${factorial(n)}`)



/* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149. */
function oneNumber() {
  let firstNumber = prompt("Enter some number")
  let secondNumber = prompt("Enter some other number")
  let thirdNmber = prompt("Enter one more number")

  if (firstNumber < 1, secondNumber < 1, thirdNmber < 1) {
    alert("Enter some positive number")
  } else {
    alert(`${firstNumber}${secondNumber}${thirdNmber}`)
  }
}
oneNumber()


/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */
function rectangleArea(a, b) {
  b = typeof
    b != 'undefined' ? b : a
  return a * b
}

console.log('rectangleArea(5, 10) =', rectangleArea(5, 10));
console.log('rectangleArea(5) =', rectangleArea(5));



/* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників. */
function perfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return num === sum;
}

console.log('perfectNumber(6)', perfectNumber(6));
console.log('perfectNumber(10)', perfectNumber(10));





// ? Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function calculatePerfectNumbers(minNum, maxNum, fn) {
  let perfectNumbers = [];
  for (let i = minNum; i < maxNum + 1; i++) {
    let perfectNum = fn(i);
    if (perfectNum) {
      perfectNumbers.push(i);
    }
  }

  return perfectNumbers;
}

console.log('calculatePerfectNumbers(1, 1000, perfectNumber)', calculatePerfectNumbers(1, 1000, perfectNumber));

