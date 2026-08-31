let Product = {
    pName: 'Tablet',
    price: 10000,
    getData: function(){
        console.log("Product Name: " + this.pName);
        console.log("Price       : " + this.price);
    }
}

console.log(Product.pName);

Product.getData();