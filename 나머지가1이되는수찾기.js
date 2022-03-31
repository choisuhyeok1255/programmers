function solution(n) {
  let i = 2;

  while (n % i !== 1) {
    i++;
  }
  console.log(i);
  return i;
}

solution(4);
