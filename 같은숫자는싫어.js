function solution(arr) {
  const answer = [];

  answer.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === undefined) break;

    if (answer[answer.length - 1] !== arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }
  return answer;
}