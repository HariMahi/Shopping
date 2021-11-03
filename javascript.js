const obj = JSON.parse(txt);
document.getElementById("product_name").innerHTML=obj.name + "<br>";
document.getElementById("product_price").innerHTML=obj.price + "<br>";
document.getElementById("product_description").innerHTML=obj.desc + "<br>";
document.getElementById("product_rating").innerHTML=obj.rating + "<br>";
document.getElementById("product_image").innerHTML=obj.image + "<br>";


