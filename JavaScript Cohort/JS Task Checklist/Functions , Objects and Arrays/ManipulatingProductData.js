let products = []

class product {
    constructor(id,name,price,category){
        this.ID = id,
        this.NAME = name,
        this.PRICE = price,
        this.CATEGORY = category
    }
}

function addProduct(id,name,price,category){
    let newProduct = new product(id,name,price,category)
    products.push(newProduct)
    console.log("Product Added..");
}

const displayProducts = () => {
    products.forEach(item => {
        console.log(`${item.NAME} - ${item.PRICE}`);
    })
}

addProduct(101,"AAA", 799 , "Sports")
addProduct(102,"BBB", 2099 , "Electronics")
addProduct(103,"CCC", 99 , "Food")
addProduct(104,"DDD", 9 , "Other")
displayProducts()

function addedTax(item){
    let tax = item * (10/100)
    return item + tax
}

let productsWithTax = products.map(item =>{
    return {
        ...item,PRICE:addedTax(item.PRICE)
    }
})

console.log(productsWithTax)
console.log(products)

let foodProducts = products.filter(item => item.CATEGORY == "Food")
const displayFoodProducts = () => {
    console.log("Food Products");
    foodProducts.forEach(item =>{
        console.log(`${item.NAME} - ${item.PRICE}`);
    })
    console.log("----------------------");
}

let affordableProducts = products.filter(item => item.PRICE <= 10)

const displayaffordableProducts = () => {
    console.log("Products under $10");
    affordableProducts.forEach(item => {
        console.log(`${item.NAME} - ${item.PRICE}`);
    })
    console.log("----------------------");

}

const totalPrice = () =>{
    let sum = 0
    products.forEach(item => {
        sum += item.PRICE
    })
    console.log(`Total Price : ${sum}`)
}


displayFoodProducts()
displayaffordableProducts()
totalPrice()
