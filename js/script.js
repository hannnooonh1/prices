var allproducts = document.querySelectorAll("h2")
var div = document.querySelector("#content2")
var button = document.querySelectorAll("#btn")
var total = document.querySelector("#totalprice")
 var totalprice =0

allproducts.forEach(function(item){
    item.onclick = function(){
        div.innerHTML += item.textContent + "/"
        totalprice +=   +(item.getAttribute("price"))
        
        if(div.innerHTML !=""){
            btn.style.display ="block";
        }
    }
})
btn.onclick= function(){
   
     total.innerHTML =  totalprice
}