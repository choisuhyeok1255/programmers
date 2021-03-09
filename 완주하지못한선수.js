function solution(participant, completion) {
  let answer = '';
  const temp = [];
  const count = participant.length;
  const min = participant.length - completion.length;

  participant.sort();
  completion.sort();

  
  for(let i = 0; i < count; i++){
    if(min === temp.length) return answer;
    
    if (participant[0] === completion[0]) {
      participant.shift();
      completion.shift();
    } else {
      temp.push(participant[0]);
      participant.shift();
    }

  }

  answer = temp.join('');

  return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);