function findMissing(arr) 
{
  const n = arr.length;
  const d1 = arr[1] - arr[0];
  const d2 = arr[2] - arr[1];
  const diff = Math.abs(d1) < Math.abs(d2) ? d1 : d2;
  for (let i = 1; i < n; i++)
    {
    if (arr[i] - arr[i - 1] !== diff) 
    {
      return arr[i - 1] + diff;
    }
  }
}