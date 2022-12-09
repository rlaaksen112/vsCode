// let == > 변수 선언 값 재할당 가능 재선언 불가능
// const == > 상수 선언값 재할당 불가능 재선언 불가능
// var == > 재할당 가능 재선언 가능 (안쓰는것을 지향 해야함) 명확한 데이터 구분이 힘듬 
// 변수명을 정할때 동사는 피해주는것이 좋다 .

//String
// ""나 '' 로 감싸주는데 숫자,알파뱃,공백 모두 텍스트화가 가능함
//"내용안에 '따움표를 또 써야 할때' 이런식으로 사용 하기 위함임"
//console.log('a'+1) == > a1로 나오는데 이때 숫자형은 문자열로 바껴서 a1은 문자열이 된다.
//console.log('2'* 2) == > 4로 나오는데 숫자열

//Array
//배열 사용법
//let ranking["1","2","3","4","5"];
//요소들의 인덱스값은 왼쪽부터 0 1 2 3 4 이다
//ranking[0] = 1;
//ranking[1] = 2;
//ranking[2] = 3;
//ranking[3] = 4;
//ranking[4] = 5;
//배열을 메서드를 통해서 추가하고 싶을때 == > ranking.push("6");
//ranking[5] = 6;
//배열의 맨끝을 메서드를 통해서 삭제하고 싶을때 == > ranking.pop();
//console.log(ranking.length); == > 6
//Array.indexOf() == > 어레이값에서 인덱스의 값을 반환함 (배열안에 있는 값이 몇번 인덱스인지 볼수있음)

let = jasonDate = {
  name:Jason,
  age:14,
  gender:Male
};
Object.keys(jasonDate)   // 키값 알아보기 
console.log(Object.keys(jasonDate)) // == > (3)[name,age,gender]
let result = Object.keys(jasonDate);
console.log(result) // == > (3)[name,age,gender]

Object.values(jasonDate); //벨류값 알아보기
console.log.apply(Object.values(jasonDate)) // == > (3) [Jason,14,Male]
let result2 = Object.values(jasonDate);
console.log(result2); // == >  (3) [Jason,14,Male]

console.log(jasonDate.name); // == > Jason