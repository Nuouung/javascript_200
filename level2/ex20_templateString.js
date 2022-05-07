// template String은 ES6에 추가된 것

let cart = [
    {name: "옷"},
    {name: "가방"}
];

let numberOfItems1 = `카트에 ${cart.length}개의 물건이 있군요?`; // 이게 템플릿 문자열
let numberOfItems2 = "카트에 " + cart.length + "개의 물건이 있군요?";

console.log(typeof numberOfItems1); // string이라고 나옴
console.log(typeof numberOfItems2); // string
console.log(numberOfItems1 === numberOfItems2); // true가 나오네? (값도 같고 자료형도 같고..?)