var mydata = JSON.parse(data);
document.getElementById("product_name").innerHTML=mydata.name + "<br>";
document.getElementById("product_price").innerHTML=mydata.price + "<br>";
document.getElementById("product_description").innerHTML=mydata.desc + "<br>";
document.getElementById("product_rating").innerHTML=mydata.rating + "<br>";
document.getElementById("product_image").innerHTML=mydata.image + "<br>";




