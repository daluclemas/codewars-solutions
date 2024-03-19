// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  //your code here

  let regexToReplace = /^(?:www\.)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}/gi;
  let regexToMatch = /^(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/gi;
  const urlArray = url.split("//");
  let newArr = urlArray.filter((item)=>{
    return item.match(regexToMatch)
  });

  let filteredArr = newArr[0].replace(regexToReplace, "$1");

  if(filteredArr.includes("/")) filteredArr = filteredArr.split('/')[0]

   if(filteredArr.includes(".")) filteredArr = filteredArr.split('.')[0]


  return filteredArr
}


// best solutions

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){  
  return url.replace(/.+\/\/|www.|\..+/g, '')
}