function solution(numbers) {
  const answer = [];
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  temp.sort(function (a, b) {
    return a - b;
  });

  temp.forEach((v, i) => {
    if (temp[i] !== answer[answer.length - 1]) answer.push(temp[i]);
  });

  return answer;
}