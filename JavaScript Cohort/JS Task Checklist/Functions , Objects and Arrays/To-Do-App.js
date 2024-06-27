let tasks = []

class Task{
    constructor(id , desc , dueDate , status ){
        this.ID = id,
        this.DESC = desc,
        this.DUE = dueDate,
        this.STATUS = status
    }
}

function addTask(id , desc , due , status){
    let newTask = new Task(id , desc , due , status)
    tasks.push(newTask)
}

function updateTask(id , newDesc , newDue , newStatus){
    let update = tasks.find(item => item.ID == id)
    if(update){
        update.DESC = newDesc,
        update.DUE = newDue,
        update.STATUS = newStatus
        console.log("Task Updated..!!"); 
    }else{
        console.log("ID not Exist..!!");
    }
}

function removeTask(id){
    let initLen = tasks.length
    tasks = tasks.filter(item => item.ID !== id)
    if(initLen > tasks.length){
        console.log("Task Removed..!!");
    }else{
        console.log("Id not Exist");
    }
}

function dispalyTasks(){
    tasks.forEach(item => {
        console.log(`${item.DESC} - ${item.DUE} (${item.STATUS})`);
    })
}

addTask(101 , "Reading", "10-June-2024" , "Not Completed")
addTask(201 , "Coding", "11-June-2024" , "Not Completed")
dispalyTasks()
removeTask(201)
dispalyTasks()
updateTask(101, "Coding", "11-June-2024" , "Not Completed")
dispalyTasks()