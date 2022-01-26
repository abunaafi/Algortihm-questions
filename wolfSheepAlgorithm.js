const warnTheSheep = (queue) => {
    let wolfPos = queue.indexOf('wolf');
    let str = '';
  
    if (wolfPos === queue.length - 1) {
      str = 'Pls go away and stop eating my sheep';
    } else {
      str = `Oi! Sheep number ${Math.abs(
        queue.length - 1 - wolfPos
      )}! You are about to be eaten by a wolf!`;
    }
    console.log(queue.length - 1);
    return str;
  };