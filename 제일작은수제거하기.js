function solution(arr) {

  let answer = [];
  let min = 0;

  if(arr.length === 1) return [-1];

  arr.forEach((_, index) => {
    if(index === arr.length - 1) return min;
    min = Math.min(arr[index], arr[index + 1]);
  });

  answer = arr.filter(num => num !== min);

  console.log(answer);

  // for(let i = 0; i < arr.length; i++){
  //   if(min > arr[i]) min = arr[i];
  // }

  // arr.forEach((num, index) => {
  //   if(min > num) minIndex = index;
  // });

  // arr.forEach((num) => {
  //   if(arr[minIndex] !== num) answer.push(num);
  // });

  // if(answer.length === 0) return [-1];



  return answer;
}

solution([4,3,2,1]);