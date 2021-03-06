function solution(s) {
  let answer = '';
  const centerNumber = s.length / 2;

  const odd = (s) => {
    answer = answer + s[Math.round(centerNumber) - 1];

    return answer;
  }
  
  const even = (s) => {
    answer = answer + s[centerNumber - 1];
    answer = answer + s[centerNumber];
    
    return answer;
  };
  
  s.length % 2 ? odd(s) : even(s);

  return answer;
}


solution('abced');