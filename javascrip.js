const url = 'https://github.com/HariMahi/Shopping/blob/main/data.json'
fetch(url) 
 .then(response => response.json()) 
 .then(data => console.log(data)); 

