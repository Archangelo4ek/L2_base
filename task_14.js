function isCircleSorted(arr) 
{
  if (arr.length === 0) return true;
  let drops = 0;
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const next = arr[(i + 1) % arr.length];
    if (curr > next) drops++;
    if (drops > 1) return false;
  }
  return true;
}