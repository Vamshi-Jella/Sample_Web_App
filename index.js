let cont=document.getElementById("container");

async function getData()
{
    try {
        let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`);
        let data=await res.json();

        console.log(data);
        displayData(data);

    } catch (error) {
        console.log(error);
    }
}
getData();

function displayData(data)
{
    
    cont.innerHTML="";
     data.data.forEach((ele) => {
        let box=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.img;
        let cat=document.createElement("p");
        cat.innerText=`Category: ${ele.category}`;
        let brand=document.createElement("p");
        brand.innerText=`Brand: ${ele.brand}`;
        let details=document.createElement("p");
        details.innerText=`Details: ${ele.details}`;
        let price=document.createElement("p");
        price.innerText=`Price: ${ele.price}`;
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.setAttribute=("class","btn");
        btn.style.backgroundColor="red";
        btn.addEventListener("click",function(){
            addToCart(ele);
        });
        function addToCart(ele)
        {
          var cartArr=JSON.parse(localStorage.getItem("cart")) || [];
          alert(` card is added to cart `);
        cartArr.push(ele);
           localStorage.setItem("cart",JSON.stringify(cartArr));
        }
        box.append(image,cat,brand,details,price,btn);
        cont.append(box);
     })
    
    
}  

let sortdata=document.getElementById("sortdata");

sortdata.addEventListener("change",() => {
    sortingDatabyPrice();
});

async function sortingDatabyPrice()
{
    try {
        let sortvalue=sortdata.value
        let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?_sort=price&_order=${sortvalue}`);
        let data=await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

let filterdata=document.getElementById("filterdata");
filterdata.addEventListener("change",()=>{
    filteringdata();
    
})

async function filteringdata()
{
    try {
        let filtervalue=filterdata.value
        let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?category=${filtervalue}`);
        let data=await res.json();
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

let btns=document.getElementById("btns");

let primary_buttons=[
    {text:'First', 'data-id':1},
    {text:'2', 'data-id':2},
    {text:'last', 'data-id':3},
]

function getbtn(text, dataId){
    let btn=document.createElement("button");
    btn.setAttribute("data-id","dataId");
    btn.style.fontSize="20px";
    btn.style.height="50px";
    btn.style.height="30px";

    btn.innerText=text;
    btn.addEventListener("click",function(e){
        console.log(e.target.dataset.id);

    })
    return btn;

}

function renderbtn()
{
    primary_buttons.forEach((item) =>{
       btns.append(getbtn(item["text"],item["data-id"])); 
    } )
}

renderbtn();