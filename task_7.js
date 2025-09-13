function wave(str) 
{
  const result = [];
  for (let i = 0; i < str.length; i++) 
    {
    if (str[i] === ' ') continue;
    const chars = str.split('');
    chars[i] = chars[i].toUpperCase();
    result.push(chars.join(''));
  }
  return result;
}