function primeFactors(n) 
{
  const result = [];
  let divisor = 2;
  while (n > 1) 
    {
    let count = 0;
    while (n % divisor === 0) 
        {
      n /= divisor;
      count++;
    }
    if (count > 0) 
        {
      result.push(count === 1 ? `(${divisor})` : `(${divisor}**${count})`);
    }
    divisor++;
  }
  return result.join('');
}