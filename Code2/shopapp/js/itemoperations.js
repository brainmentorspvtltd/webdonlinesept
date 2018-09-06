// add to cart, server talk, search, sort
const itemOperations = {
    items:[], 
    prepareTheData(){
        var item = new Item(10,"Apple",72000,"https://rukminim1.flixcart.com/image/312/312/j9d3bm80/mobile/g/g/q/apple-iphone-x-mqa52hn-a-original-imaeyzyfbgcwyhwg.jpeg?q=70","Apple IPhone X");
         this.items.push(item);   
          item = new Item(11,"Samsung",62000,"https://rukminim1.flixcart.com/image/312/312/jklgxow0/mobile/u/z/v/samsung-galaxy-note-9-sm-n960fzkdins-original-imaf7xa3u4uc3ztm.jpeg?q=70","Samsung s9 ");
           this.items.push(item); 
           return this.items;
    }
}
