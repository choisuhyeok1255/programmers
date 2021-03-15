function solution(arr) {
  let answer = 0;
  let temp = 0;

  arr.forEach(element => {
    temp += element;
  });

  answer = temp/arr.length;

  return answer;
}

solution([1,2,3,4]);