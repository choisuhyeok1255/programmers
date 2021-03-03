function solution(num) {
  var answer = '';
  
  // if(num % 2 === 0) {
  //     answer = 'Even';
  // } else {
  //     answer = 'Odd';
  // }

  num % 2 ? answer = 'Odd' : answer = 'Even';
  return answer;
}