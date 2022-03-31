function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let temp = 0;
  for (let i = 0; i < a - 1; i++) {
    temp += month[i];
  }

  if (((temp + b) % 7) - 1 === -1) {
    return "THU";
  } else {
    return week[((temp + b) % 7) - 1];
  }
}

solution(1, 7);
