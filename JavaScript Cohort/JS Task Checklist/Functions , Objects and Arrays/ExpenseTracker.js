let expense = []

class Expense{
    constructor(id,name,amount,date,day){
        this.ID = id,
        this.NAME = name,
        this.AMOUNT = amount,
        this.DATE = date,
        this.DAY = day
    }
}

function addExpense(id,name,amount,date,day){
    let newExpense = new Expense(id,name,amount,date,day)
    expense.push(newExpense)
}

function updateExpense(id,newName,newAmount,newDate,newDay){
    let update = expense.find(item => item.ID == id)
    if(update){
        update.NAME = newName,
        update.AMOUNT = newAmount,
        update.DATE = newDate,
        update.DAY = newDay
        console.log("Expense Updated..!!");
    }else{
        console.log("ID not Exist..!!!");
    }
}

function removeExpense(id){
    let initLen = expense.length
    expense = expense.filter(item => item.ID !== id)
    if(initLen > expense.length){
        console.log("Expense Removed...!!")
    }else{
        console.log("ID not Found...!!")
    }
}

function displayExpense(){
    expense.forEach(item => {
        console.log(`Expense ID : ${item.ID}`);
        console.log(`Expense Name : ${item.NAME}`);
        console.log(`Expense Amount : ${item.AMOUNT}`);
        console.log(`Expense Date : ${item.DATE}`);
        console.log(`Expense Day : ${item.DATE}`);
    })
}

addExpense(102, "Movie" , 200 , "10-June-2024", "Monday")
addExpense(101, "KFC" , 1000 , "10-July-2024", "Friday")
displayExpense()
removeExpense(102)
displayExpense()
updateExpense(101 , "Dominos" , 2000, "12-Dec-2024", "Thrusday")
displayExpense()

