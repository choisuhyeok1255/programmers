function solution(answers) {
  var answer = [];
  // const person = [
  //   [1, 2, 3, 4, 5],
  //   [2, 1, 2, 3, 2, 4, 2, 5],
  //   [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  // ];
  const person = [
    [],
    [],
    []
  ];

  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let z = 0; z < answers.length; z++) {
    person[0].push(...pattern1);
    person[1].push(...pattern2);
    person[2].push(...pattern3);
  }

  const personCount = [0, 0, 0];

  for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === person[i][j]) personCount[i] += 1;
    }
  }

  // console.log(personCount);

  let maxNum = 0;

  personCount.forEach(num => {
    if (num > maxNum) maxNum = num;
  });

  personCount.forEach((num, i) => {
    if (num === maxNum) answer.push(i + 1);
  });

  return answer;
}