let obj = {};
for (let i = 0; i < 4; i++) {
    obj["key" + i] = i;
}

console.log(obj);

let profile = "chloe:30";
let person = {
    [profile] : true,
    [profile.split(":")[0]] : profile.split(":")[1]
};

console.log(person)

// 다시 정리를 해보자. ES6 이후 추가된 단축속성명(shorthand property names) / 계산된속성명(computed property names)

// 단축 속성명
const name = "mike";
const obj2 = {
    age : 21,
    name, // 단축 속성명
    getName() {return this.name}
}

console.log(obj2.name + "    " + obj2.getName());

const age = 21;

console.log({name, age});


// 계산된 속성명

// 계산된 속성명 미사용. 기존코드
function  makeObject1(key, value) {
    const obj = {};
    obj[key] = value;
    return obj;
}

const obj3 = makeObject1(1, "ONE");
console.log(obj3);
console.log(obj3[1]);

// 계산된 속성명 사용
function makeObject2(key, value) {
    return {[key] : value};
}