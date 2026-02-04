var myTasks = [];
function addTask(task) {
    myTasks.push(task); // adding a input from "task" to an array myTasks[]
    console.log("task: " + task + " added to the array.");
    return myTasks.length;
}
function listAllTasks() {
    for (var i = 0; i < myTasks.length; i++) {
        console.log(myTasks[i] + " is in my Tasks list."); //listing all my tasks
    }
}
function deleteTask(task) {
    var index = myTasks.indexOf(task); //find out an index of a word in an array to delete it first
    if (index != -1) {
        myTasks.splice(index, 1); //and then delete the word from an index
        console.log("task: " + task + " deleted from the array");
    }
    else //added if-else statement, in case of someone trying to delete something that isnt there
     {
        console.log(task + " was not found in my Task list" + index);
    }
    return myTasks.length;
}
addTask("work"); //adding words to myTask[] array
addTask("sleep");
listAllTasks(); //check if the words are added
deleteTask("work"); //used to delete work from an array
deleteTask("shoe"); //check all conditions
listAllTasks(); //check if the word was deleted
