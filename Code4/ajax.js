window.addEventListener("load",init);
function init(){
    document.querySelector("#searchbt").addEventListener("click",doSearch);
}
function printImages(images){
   var div =  document.querySelector("#result");
   div.innerHTML = "";
    for(let image of images){
        let img = document.createElement("img");
        img.src = image.images.original.url;
        img.className = "size";
        div.appendChild(img);
    }
}

function doSearch(){
    var searchValue = document.querySelector("#search").value;
    console.log("Search Value is ",searchValue);
    var url  = "http://api.giphy.com/v1/gifs/search?q="+searchValue+"&api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=5";
    fetch(url).then(response=>{
        response.json().then(jsonresponse=>{
                printImages(jsonresponse.data);
        }).catch(e=>console.log("Error in JSON ",e)).
        catch(error=>console.log("Server Side Issue ",error));
    }).catch()
    // var promise = fetch(url);
    // promise.then(response=>{
    //     var pr = response.json();
    //     pr.then(jsonresponse=>{
    //         console.log("Json data is ",jsonresponse);
    //         printImages(jsonresponse.data);
    //     }).catch(e=>{
    //         console.log("Invalid Json ",e);
    //     })
    // }).catch(err=>{
    //     console.log("Some Server Side Issue ",err);
    // });

}
