// 자바스크립트는 모든 숫자가 64bit 부동 소수점 (64-bit floating point) (정수, 소수 등 가리지 않는다)
// number형에는 Infinity, NaN도 포함된다.
console.log(Infinity); // Infinity
console.log(1 / Infinity); // 0
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN
console.log(0 / "나는 숫자가 아니지렁~"); // NaN

let isNumberA = 3;
let isNumberB = 3.14;

console.log(typeof isNumberA); // number
console.log(typeof isNumberB); // number

// console.log(isNumberA instanceof number); // 에러가 나네. 원시형이라 그런거겠지..?