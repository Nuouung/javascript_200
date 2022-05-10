let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}

let {a, c} = obj;

console.log(a);
console.log(c);

let {a:newA = 10, b:newB, f:newF = 6} = obj; // undefined면 오른쪽에 있는 값을, 아니면 객체에 있는 값을

console.log(newA); // 1
console.log(newB); // 2
console.log(newF); // 6 


let arr = [1, 2, 3, 4, 5];

let [b, d, ...rest] = arr;

console.log(b); // 1
console.log(d); // 2
console.log(rest); // [3, 4, 5]

let [e = 10, g = 20] = [1]; // 마찬가지로 undefined면 오른쪽에 있는 값이 들어감

console.log(e); // 1
console.log(g); // 20

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}

[a, , , , , f] = getArr();

console.log(a);
console.log(f);