// 자바스크립트의 문자열은 charactor, String을 가리지 않는다. 그냥 다 문자열
// '' , "" , `` 전부 사용 가능

let stringA = '작은 따옴표';
let stringB = "큰 따옴표";
let stringC = `백틱`;

console.log(typeof stringA); // string
console.log(typeof stringB); // string
console.log(typeof stringC); // string

console.log(stringA instanceof String); // false. 자바스크립트는 문자열도 원시형이다!