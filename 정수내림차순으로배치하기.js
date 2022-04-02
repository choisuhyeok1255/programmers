function solution(n) {
  const temp = n + "";
  const tempArr = [];
  let answer = "";

  for (let i = 0; i < temp.length; i++) {
    tempArr[i] = temp[i];
  }

  tempArr.sort((a, b) => a - b).forEach((item) => (answer = item + answer));

  return +answer;
}

solution(118372);
