function solution(arr) {

  let answer = [];
  let min = 0;

  if(arr.length === 1) return [-1];

  min = Math.min(...arr);

  answer = arr.filter(num => num !== min);

  return answer;
}

solution([4,3,2,1]);