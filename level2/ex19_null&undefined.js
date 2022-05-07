// null = 비어 있는. 존재하지 않는. 즉, 값 자체가 없는 것. 空 빌 공. 공허한 것
// undefined = 아무 값도 할당받지 않은. 아무 값도 할당 받지 않았다는 사실 자체가 값으로 박혀 있는 것. null에 아무것도 없다는 의미로 임의의 '아무것도 없는 것을 의미하는' undefined를 넣는다고 생각하면 편하다.

let value = null;
console.log(value); // null
console.log(typeof value); // 자바스크립트 기존 이슈로 인해 object로 나온다고 한다. null도 원시형 자료라고 하네?
let isUndefined;
console.log(isUndefined); // undefined
console.log(typeof isUndefined); // undefined