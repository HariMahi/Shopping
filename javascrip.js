const url = 'https://github.com/HariMahi/Shopping/blob/main/data.json' // or whatever your url is 
fetch(url) 
 .then(response => response.json()) 
 .then(data => console.log(data)); //or whatever you want to do with the resulting object 

