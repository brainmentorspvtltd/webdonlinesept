window.addEventListener("load",init);




function bindEvents(){
    document.querySelector("#sort").addEventListener("change",doSort);
}

function doSort(){
    var signal = document.querySelector("#sort").value;
    var items = itemOperations.sort(signal);
    print(items);
}

function init(){
    bindEvents();
    var items = itemOperations.prepareTheData();
    console.log("Items are ",items);
    print(items);
    document.querySelector("#cartcount").innerText = itemOperations.countItemsInCart();
}


function print(items){
    // Print the Array Data on Screen and Build (Item) Image Tag , Add to Cart Dynamically
    var productDiv = document.querySelector("#products");
    productDiv.innerHTML = "";
    for(let item of items){
       productDiv.appendChild(createDiv(item));
        
    }
}
function createDiv(item){
    var div = document.createElement("div");
    div.appendChild(createH3(item.name));
    div.appendChild( createImg(item.url) );
    div.appendChild(createAddToCart(item.id));
    div.appendChild((function(price){  // IIF 
        var p = document.createElement("p");
        p.innerText = price;
        return p;
    })(item.price));    
    return div;
}

function addToCart(){
    var currentId  = this.getAttribute("product-id");
    console.log("Add to Cart is Called...",currentId);
    var msg = itemOperations.addedInCart(currentId);
    this.innerText = msg;
    document.querySelector("#cartcount").innerText = itemOperations.countItemsInCart();
}
function createAddToCart(id){
    var button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.addEventListener("click",addToCart); // button.addToCart()
    button.setAttribute("product-id",id);
    return button;
}
function createImg(url){
    var img = document.createElement("img");
    img.src = url;
    img.className="size";
    return img;
}
function createH3(title){
    var h3 = document.createElement("h3");
    h3.innerText = title;
    return h3;
}