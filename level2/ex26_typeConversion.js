let dataA = "4";

console.log(typeof dataA); // string

let dataB = dataA + 3;

console.log(typeof dataB); // string 웬걸
console.log(dataB); // 아 43이 되는구나.. 어떤 자료형이 우선하는지 판단하기가 쉽지 않은데...?

console.log(typeof dataA === typeof dataB); // true

// 좀 미친 언어 같다.
// 자동 형변환을 사용하지 말고 무조건 명시적 형 변환을 사용하자.

console.log(Number("3") + Number("7")); // 10
console.log(String(3) + String(4)); // 34

// 미친언어...