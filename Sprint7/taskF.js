/**
 * Алла хочет доказать, что она умеет прыгать вверх по лестнице быстрее всех.
 * На этот раз соревнования будут проходить на специальной прыгательной лестнице.
 * С каждой её ступеньки можно прыгнуть вверх на любое расстояние от 1 до k.
 * Число k придумывает Алла.
 *
 * Гоша не хочет проиграть,
 * поэтому просит вас посчитать количество способов допрыгать от первой ступеньки до n-й.
 * Изначально все стоят на первой ступеньке.
 *
 * Формат ввода
 * В единственной строке даны два числа — n и k (1 ≤ n ≤ 1000, 1 ≤ k ≤ n).
 *
 * Формат вывода
 * Выведите количество способов по модулю 10^9 + 7.
 * */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', line => {
    const [n, k] = line.split(" ").map((el) => Number(el));
    const dp = new Array(n + 1).fill(0);
    const mod = 10**9 + 7;
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        for (let j = 1; j < k + 1; j++) {
            if (i - j >= 0) {
                dp[i] = (dp[i] + dp[i - j]) % mod;
            }
        }
    }
    console.log(dp[n])
    rl.close();

});