function solution(s) {
  let answer = '';
  let index = 0;
  let temp = [];
  let string = '';

  temp = s.split('');

  for (let i = 0; i < temp.length; i++) {
    if(temp[i] === ' ') index = -1;

    if (index % 2 === 0) {
      temp[i] = temp[i].toUpperCase();
    } else {
      temp[i] = temp[i].toLowerCase();
    }
    index++;
  }
  
  answer = temp.join('');
  return answer;
}

solution("try hello world");