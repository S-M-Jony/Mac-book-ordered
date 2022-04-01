function getPrice(product,price){
    const memory = document.getElementById(product);
    memory.innerText = price;
    calc()
}
function calc(){
    const fixed = document.getElementById("fixed").innerText;
    const memories = document.getElementById("memories").innerText;
    const storages = document.getElementById("storages").innerText;
    const deliveries = document.getElementById("deliveries").innerText;
    const total= parseInt(fixed)+parseInt(memories)+parseInt(storages)+parseInt(deliveries)
    document.getElementById("total").innerText=total;
    document.getElementById("last-total").innerText=total;
}
const firstMemory = document.getElementById("memory-first").addEventListener("click", function () {
    getPrice("memories",0);
})
const secondMemory = document.getElementById("memory-second").addEventListener("click", function () {
    getPrice("memories",180);
})

const firstStorage = document.getElementById("storage-first").addEventListener("click", function () {
    getPrice("storages",0);
})
const secondStorage = document.getElementById("storage-second").addEventListener("click", function () {
    getPrice("storages",100);
})
const thirdStorage = document.getElementById("storage-third").addEventListener("click", function () {
    getPrice("storages",180);
})

const firstDelivery = document.getElementById("delivery-first").addEventListener("click", function () {
    getPrice("deliveries",0);
})
const secondDelivery = document.getElementById("delivery-second").addEventListener("click", function () {
    getPrice("deliveries",20);
})

document.getElementById("promo-btn").addEventListener("click" ,function(){
    const promoInput = document.getElementById("promo-Input");
    if(promoInput.value=="stevekaku"){
        const promoOutput=document.getElementById("last-total");
        const promoParcentage=promoOutput.innerText*20/100;
        promoOutput.innerText=promoOutput.innerText-promoParcentage;
    }
    document.getElementById("promo-btn").disabled=true;
    promoInput.value=""
})