var images=["https://a10.gaanacdn.com/gn_img/showcase/koMWQ4B3qL/koMWQQBWqL/size_l_1647516021.webp",
"https://a10.gaanacdn.com/gn_img/showcase/XYybzrb2gz/Yybzzoob2g/size_l_1658125695.webp",
"https://a10.gaanacdn.com/gn_img/showcase/81l3Me3rMx/1l3MZnPWrM/size_l_1651060182.webp",
"https://a10.gaanacdn.com/gn_img/showcase/jBr3gLyWR1/Br3gm5QbR1/size_l_1662536030.webp",
"https://a10.gaanacdn.com/gn_img/showcase/XzVWRLKdqR/zVWRJ71Wdq/size_l_1658294455.webp",
"https://a10.gaanacdn.com/gn_img/showcase/81l3Me3rMx/1l3MZnPWrM/size_l_1651060182.webp",
"https://a10.gaanacdn.com/gn_img/showcase/0wrb4qNKLg/wrb4AeMKLg/size_l_1661517717.webp"
]
"https://a10.gaanacdn.com/gn_img/song/0wrb4qNKLg/rb48Br9VbL/size_m_1613976995.webp"
let sliderIndex=0;
let sliderImage=document.querySelector(".sliderImage");
sliderImage.src=images[sliderIndex];

function increaseSlide(){
    sliderIndex=(++sliderIndex)%(images.length);
sliderImage.src=images[sliderIndex];
console.log(sliderIndex);
}

setInterval(()=>{
    increaseSlide()
},2000)

function decreaseSlide(){
sliderIndex--;
if(sliderIndex<0){
    sliderIndex=images.length-1;
}
sliderImage.src=images[sliderIndex];
console.log(sliderIndex);
}

function showHide(){
 var x = document.querySelector(".sidebar-parent");
    if (x.style.display !== "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


