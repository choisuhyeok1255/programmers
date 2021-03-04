function solution(phoneketmons) {
  let pickCount = 0;
  let phoneketmonType = 0; 
  const phoneketmonCount = [];

  pickCount = phoneketmons.length / 2;
  console.log(pickCount);

  phoneketmons.forEach((_, i) => {
    phoneketmonCount[i] = 0;
  });

  phoneketmons.forEach(phoneketmon => {
    if (isNaN(phoneketmonCount[phoneketmon])) {
      phoneketmonCount[phoneketmon ] = 1;
    } else {
      phoneketmonCount[phoneketmon ] += 1;
    }
  });

  phoneketmonCount.forEach(count => {
    if(count !== 0) {
      phoneketmonType += 1;
    }
  });

  if(phoneketmonType > pickCount){
    return pickCount;
  }else{
    return phoneketmonType;
  }
};

solution([3, 3, 3, 2, 2, 2]);