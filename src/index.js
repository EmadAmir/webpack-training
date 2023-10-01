const cart = [];

function log(message){
    console.log(message +" "+ message);
}

function addToCart(item){
    cart.push(item);
    log("added item : "+ item);
}

function removeFromCart(idx){
    cart.splice(idx,1); //slice method creates a copy of the cart idx => start 1 => end
    log("removed: "+ idx)
}

addToCart("waterproof boots");