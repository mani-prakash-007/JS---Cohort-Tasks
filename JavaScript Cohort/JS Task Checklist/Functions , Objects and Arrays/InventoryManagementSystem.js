// Inventory Management System

let Inventory = [];

class product{
    constructor(Id , Name, Price , Quantity , Rating){
        this.ID = Id,
        this.Name = Name,
        this.Price = Price,
        this.Quantity = Quantity,
        this.Rating = Rating
    }
}

function addProduct(Id , Name, Price , Quantity , Rating){
    let newProduct = new product(Id , Name, Price , Quantity , Rating);
    Inventory.push(newProduct);
}

function updateProduct(ID ,newName , newPrice, newQuantity , newRating ){
     let product = Inventory.find(item => item.ID == ID)
     if(product){
        product.Name = newName,
        product.Price = newPrice,
        product.Quantity = newQuantity,
        product.Rating = newRating
        console.log("Product Updated...!!!")
        console.log(`----------------------------`);

     }else{
        console.log("ID not Exist...!!!");
        console.log(`----------------------------`);

     }

}

function removeProduct(id) {
    let initialLength = Inventory.length;
    Inventory = Inventory.filter(item => item.ID !== id);
    if (Inventory.length < initialLength) {
        console.log("Product removed...!!!");
        console.log(`----------------------------`);

    } else {
        console.log("ID not found...!!!");
        console.log(`----------------------------`);

    }
}


function displayProducts(){
    Inventory.forEach(item => {
        console.log(`Product Id : ${item.ID}`);
        console.log(`Product Name : ${item.Name}`);
        console.log(`Product Price : $${item.Price}`);
        console.log(`Product Quantity : ${item.Quantity}`);
        console.log(`Product Rating : ${item.Rating}`);
        console.log(`----------------------------`);
    })
}

addProduct(101, "Pencil" , 2 , 300 , 4.5)
addProduct(102, "Pen" , 5 , 500 , 4.3)
addProduct(103, "NoteBook" , 10 , 100 , 4.8)
displayProducts();
updateProduct(102 , "Scale" , 1 , 100 , 4.1)
displayProducts();
removeProduct(102)
displayProducts();
