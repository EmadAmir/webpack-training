const util = require("./util");



const cart = [];


function addToCart(item){
    cart.push(item);
    util.log("added item : "+ item);
}

function removeFromCart(idx){
    cart.splice(idx,1); //slice method creates a copy of the cart idx => start 1 => end
    util.log("removed: "+ idx)
}

addToCart("waterproof boots");