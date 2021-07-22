function solution(participant, completion) {
  let answer = "";
  let temp = participant;

  for (let i = 0; i < completion.length; i++) {
    let participantIndex = temp.indexOf(completion[i], 0);

    temp.splice(participantIndex, 1);
  }

  answer = temp[0];

  return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
