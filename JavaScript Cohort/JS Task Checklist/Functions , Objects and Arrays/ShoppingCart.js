//Shopping Cart 

let cart = [
    {
        Name : "xxxxx",
        Price : 1200,
        Quantity : 2
    },
    {
        Name : "yyyyy",
        Price : 1500,
        Quantity : 1
    },
    {
        Name : "zzzzz",
        Price : 2000,
        Quantity : 5
    },
    {
        Name : "aaaaa",
        Price : 1500,
        Quantity : 7
    },
    {
        Name : "bbbb",
        Price : 5000,
        Quantity : 4
    },
    {
        Name : "ccccc",
        Price : 10000,
        Quantity : 10
    },
    {
        Name : "ddddd",
        Price : 4500,
        Quantity : 3
    },
]

const calculateTotalPrice = (array) => {
    let totalprice = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        totalprice += array[i].Price * array[i].Quantity
    }

    return totalprice;
}

console.log("Total Price : " + calculateTotalPrice(cart));