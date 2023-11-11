
var allProducts=document.querySelectorAll("#products .item ")

var content=document.querySelector("#show-names")
var btn=document.querySelector("#btn")
var allprice=0

allProducts.forEach(function(item){
    item.onclick=function(){
        var dataItem=item.querySelector(".dataItem")
        content.innerHTML += dataItem.textContent+" , "
        var price =item.querySelector("span")
        allprice += +(price.getAttribute("price1")) //price.priceلو كان priceدي Attributeمن اصل التاج بتاعى مش انا اللى ضايفة
        if(content.innerHTML !=""){
            btn.style.display="block"
        }
    }
})

btn.onclick=function(){
    content.innerHTML=allprice
}