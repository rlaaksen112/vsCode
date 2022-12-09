
const a = 11;
const b = 12;
let aa = 1;
const myname = "minjae";
console.log(aa);
console.log(b);
console.log(aa);
console.log(myname + "minjae");


// 배열의 화용법1
// player[0] = player.name
// player[1] = player.age
// player[2] = player.sex
const player = ["minjae", 27 , "male"];
console.log(player[0]); // == name

// 배열의 활용법2 (객체를 부르기에는 2번 방법이 더 편해 보임)
const player2 = {
  name : "minjae",
  age : 27,
  sex : "male"
};
console.log(player2.name); 
//const 는 바꿀수 없지만 오브젝트의 값을 바꾸는건 가능하다
player2.name = "세영";
console.log(player2);
// 배열 추가
player2.kg = 90;
console.log(player2);

// console 간편하게 사용할수있는 Function메서드 만들기
function con(say){
  console.log(say);
}
con("hi");

// function 에서 return 활용해서 결과값 얻기
function plus(a , b){
  return a * b;
}
con(plus(11,22));


