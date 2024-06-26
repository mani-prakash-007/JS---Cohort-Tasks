let inventory = []

class Book{
    constructor(id,title,author,price,qty){
        this.ID = id,
        this.TITLE = title,
        this.AUTHOR = author,
        this.PRICE = price,
        this.QTY = qty
    }
}

function addBook(id,title,author,price,qty){
    let newBook = new Book(id,title,author,price,qty);
    inventory.push(newBook)
}

function updateBook(id , newTitle, newAuthor ,newPrice , newQty){
    let update = inventory.find(item => item.ID == id)
    if(update){
        update.TITLE = newTitle,
        update.AUTHOR = newAuthor,
        update.PRICE = newPrice,
        update.QTY = newQty
        console.log("Book Updated...!!")
    }else{
        console.log("ID not Exist...!!!");
    }
}

function removeBook(id){
    let initLen = inventory.length
    inventory = inventory.filter(item => item.ID !== id)
    if(initLen > inventory.length){
        console.log("Book Removed....!!!");
    }else{
        console.log("ID not Exist...!!");
    }
}

function displayBook() {
    inventory.forEach(item => {
        console.log(`Book ID : ${item.ID}`);
        console.log(`Book Title : ${item.TITLE}`);
        console.log(`Book Author : ${item.AUTHOR}`);
        console.log(`Book Price : ${item.PRICE}`);
        console.log(`Book Quantity : ${item.QTY}`);
    })
}

addBook(101 , "ZZZ" , "AAAA" , 899 , 200)
addBook(102 , "YYY" , "BBB" , 1099 , 300)
displayBook()
removeBook(102)
displayBook()
updateBook(101, "YYY" , "BBB" , 1099 , 300)
displayBook()