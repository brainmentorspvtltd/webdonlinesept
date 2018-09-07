// add to cart, server talk, search, sort
const itemOperations = {
    items:[], 
    prepareTheData(){
        var item = new Item(10,"Apple",72000,"https://rukminim1.flixcart.com/image/312/312/j9d3bm80/mobile/g/g/q/apple-iphone-x-mqa52hn-a-original-imaeyzyfbgcwyhwg.jpeg?q=70","Apple IPhone X");
         this.items.push(item);   
          item = new Item(11,"Samsung",62000,"https://rukminim1.flixcart.com/image/312/312/jklgxow0/mobile/u/z/v/samsung-galaxy-note-9-sm-n960fzkdins-original-imaf7xa3u4uc3ztm.jpeg?q=70","Samsung s9 ");
           this.items.push(item); 
           return this.items;
    },
    countItemsInCart(){
        return this.items.filter(currentObject=>currentObject.isAdded).length;
        //  var counter =0;   
        // for(let i = 0; i<this.items.length; i++){
        //     if(this.items[i].isAdded == true){
        //         counter++;
        //     }
        // }
        // return counter;
    }, 
    sort(signal){
        if(signal==1){
        return this.items.sort((first,second)=>first.price-second.price);
        }
    else{
        return this.items.sort((first,second)=>second.price-first.price);
    }
    },   
    addedInCart(id){
        var currentObject  = this.items.find(currentObject=>currentObject.id==id);
        if(currentObject){
            currentObject.toggle();
            //currentObject.isAdded = !currentObject.isAdded ;
        }
       return (currentObject && currentObject.isAdded)?"Item in Cart":"Add to Cart";
        // var currentObject = null;
        // for(let i = 0; i<this.items.length; i++){
        //     if(this.items[i].id==id){
        //         currentObject = this.items[i];
        //     }
        // }
    //     if(currentObject!=null){
    //     currentObject.isAdded = !currentObject.isAdded ;
    //     return currentObject.isAdded == true?"Item in Cart":"Add to Cart";    
    // }
    }    
}
