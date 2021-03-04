function solution(s) {
  var answer = false;

  if(s.length === 4 || s.length === 6){
    answer = true;
    if(answer){
      for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])) return answer = false;
      }
    }
  }



  return answer;
}

solution("9010.1");
// solution("1234");