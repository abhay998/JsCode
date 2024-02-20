class Product{
    constructor(price, quantity){
            this.itemPrice = price;
            this.itemQuantity = quantity;
    }
    printItem(){
        console.log("itemPrice", this.itemPrice)
    }
}
// let newProduct = new Product(130, 7)
// newProduct.printItem();
class AnotherProduct extends Product{
    constructor(price, quantity){
        super(price, quantity)
        super.printItem();
        this.newPrice = price;
        this.newQuantity = quantity;
    }
   printAgainItem(){
       console.log("newPrice", this.newQuantity);
   }
}
let anotherObject = new AnotherProduct(130, 6);
anotherObject.printAgainItem();
// anotherObject.printItem();
