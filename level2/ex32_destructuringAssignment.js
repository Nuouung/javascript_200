// 비구조화 할당 - 배열이나 객체의 속성을 해체해 그 값을 변수에 담아 사용하는 자바스크립트 표현식

// es6 이전 (비구조화 할당 x)
const animalArray = ["CAT", "DOG", "TIGER"];

const cat = animalArray[0];
const dog = animalArray[1];
const tiger = animalArray[2];

console.log(cat);
console.log(dog);
console.log(tiger);

// 장점: 쉽다. 단점: 귀찮고 코드가 길어진다.

// es6 이후의 비구조화 할당
// 문법: [변수명1, 변수명2, 변수명3] = [값1, 값2, 값3]
const [anotherCat, anotherDog, anotherTiger] = ["CAT", "DOG", "TIGER"];

console.log(anotherCat);
console.log(anotherDog);
console.log(anotherTiger)

// 다른 방법. Spread Operator
// 객체나 배열의 값을 복제할 때 사용
let object = {
    a: 10,
    b: 20
};

let object2 = {...object};
console.log(object2) // {a: 10, b: 20}

let array = [1, 2, 3];
let array2 = [...array];
console.log(array2); // [1, 2, 3]

// 비구조화 할당의 예
const animalList = ["CAT", "DOG", "TIGER"];
const [cat2, ...restAnimalList2] = animalList;
// 앞의 요소 하나와 나머지 요소를 분리하고 싶을 때 위의 코드처럼 사용 가능함

console.log(cat2); // CAT
console.log(restAnimalList2); // ["DOG", "TIGER"]

// es6 이전의 객체
const animals = {
    cat: "CAT",
    dog: "DOG",
    tiger: "TIGER"
}

let cat3 = animals.cat;
let dog3 = animals.dog;
let tiger3 = animals.tiger;
