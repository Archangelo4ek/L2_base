function ipv4Parser(ip, subnet) 
{
  const ipParts = ip.split('.').map(Number);
  const maskParts = subnet.split('.').map(Number);
  const netParts = [];
  const hostParts = [];
  for (let i = 0; i < 4; i++) 
    {
    netParts.push(ipParts[i] & maskParts[i]);
    hostParts.push(ipParts[i] & (~maskParts[i] & 255));
  }

  return [netParts.join('.'), hostParts.join('.')];
}