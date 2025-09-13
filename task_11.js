function domainName(url) 
{
  url = url.replace(/^https?:\/\//, '').replace(/^www\./, '');
  return url.split('.')[0];
}