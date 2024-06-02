var cartArr=JSON.parse(localStorage.getItem("cart")) || [] ;
var cont1=document.getElementById("container1");
function displayData(arr)
{
    arr.forEach((ele,i)=>{
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.img;
        let cat=document.createElement("h4");
        cat.textcontent=`Category: ${ele.category}`;
        let brand=document.createElement("h4");
        brand.textcontent=`Brand: ${ele.brand}`;
        let details=document.createElement("p");
        details.textcontent=`Details: ${ele.details}`;
        let price=document.createElement("h4");
        price.textcontent=`Price: ${ele.price}`;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute=("class","btn");
        btn.style.backgroundColor="red";
        btn.addEventListener("click",function(){
            removedata(ele,i);
        })
        function removedata(ele,i){
            alert(` Card is removed from the cart `);
            cartArr.splice(i,1);
            localStorage.setItem("cart",JSON.stringify(cartArr));
            displayData(cartArr);
           }
        box.append(image,cat,brand,details,price,btn);
        cont1.append(box);
    })

}

if (cartArr.length == 0) {
    card.innerText = "Cart is empty. Add products to cart.";
  } 
  else {
    displayData(cartArr);
  }