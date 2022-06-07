const calculAlcPace = (amountA, amountB, timeLast) => {
  let totalSec = timeLast * 3600;
  let totalJanA = amountA * 7;
  let totalJanB = amountB * 7;
  let janPerSecA = parseInt(totalSec / totalJanA);
  let janPerSecB = parseInt(totalSec / totalJanB);
  console.log(janPerSecA, janPerSecB);
};

calculAlcPace(2, 3, 1);
