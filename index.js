var slide=[

    "https://rukminim1.flixcart.com/flap/3376/560/image/c984b5508dd7784a.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/3376/560/image/869463be68567c24.jpg?q=50",
   "https://assets.ajio.com/cms/AJIO/WEB/11042023-UHP-D-Main-P4-LevisSpykar-Min40.jpg",
   "https://cdn.flipshope.com/blog/wp-content/uploads/2022/08/Big-Bachat-Dhamaal-Sale.jpg",
   "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Topbanner-5090-1024x1200.gif",
   "https://rukminim1.flixcart.com/flap/1688/280/image/56b20fa729139bde.jpg?q=50",
   "https://rukminim1.flixcart.com/flap/3376/560/image/c984b5508dd7784a.jpg?q=50",
   "https://rukminim1.flixcart.com/flap/3376/560/image/869463be68567c24.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1688/280/image/56b20fa729139bde.jpg?q=50"

]
let index=0;
let slidearr=document.getElementById("photo")
slidearr.src=slide[index]

setInterval(function(){
    index++;
    if(index>=slide.length){
        index=0;
    }
    slidearr.src=slide[index]
},2000)


// ,
// ,
// 
// ",
//    