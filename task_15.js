function howManyTimes(time1, time2) 
{
  const start = new Date(time1);
  const end = new Date(time2);
  let count = 0;
  for (let t = new Date(start); t < end; t.setSeconds(t.getSeconds() + 1)) {
    const h = t.getHours() % 12 || 12;
    const m = t.getMinutes();
    const s = t.getSeconds();
    if (m === 0 && s < h) count++;
    if (m === 30 && s === 0) count++;
  }
  return count;
}