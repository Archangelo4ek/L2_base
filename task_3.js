function whatCentury(yearStr) 
{
  const year = parseInt(yearStr, 10);
  const century = Math.ceil(year / 100);
  const suffix =
    century % 100 >= 11 && century % 100 <= 13 ? 'th' :
    century % 10 === 1 ? 'st' :
    century % 10 === 2 ? 'nd' :
    century % 10 === 3 ? 'rd' : 'th';
  return `${century}${suffix}`;
}