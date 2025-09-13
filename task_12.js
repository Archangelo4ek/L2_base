function longest(arr, n) 
{
  return [...arr]
    .map((str, i) => ({ str, len: str.length, index: i }))
    .sort((a, b) => b.len - a.len || a.index - b.index)
    [n - 1].str;
}