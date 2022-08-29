/**
 * Тимофей решил купить несколько домов на знаменитом среди разработчиков Алгосском архипелаге.
 * Он нашёл n объявлений о продаже, где указана стоимость каждого дома в алгосских франках.
 * А у Тимофея есть k франков. Помогите ему определить, какое наибольшее количество домов на Алгосах он сможет приобрести за эти деньги.

 Формат ввода
 В первой строке через пробел записаны натуральные числа n и k.

 n — количество домов, которые рассматривает Тимофей, оно не превосходит 100000;

 k — общий бюджет, не превосходит 100000;

 В следующей строке через пробел записано n стоимостей домов. Каждое из чисел не превосходит 100000. Все стоимости — натуральные числа.

 Формат вывода
 Выведите одно число —– наибольшее количество домов, которое может купить Тимофей.
 * */
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    let money = input[0].split(' ')[1];
    const costs = input[1].split(' ').sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < costs.length; i++) {
      if (money - costs[i] >= 0) {
        count++;
        money = money - costs[i];
      } else {
        break;
      }
    }
    console.log(count);
    rl.close();
  }
});
