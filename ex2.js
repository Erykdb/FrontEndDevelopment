var Todo = /** @class */ (function () {
    function Todo() {
        this.myTodos = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTodos.push(task); // adding a input from "task" to an array myTasks[]
        console.log("task: " + task + " added to the array.");
        return this.myTodos.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.myTodos.length; i++) {
            console.log(this.myTodos[i] + " is in my Tasks list."); //listing all my tasks
        }
    };
    Todo.prototype.deleteTasks = function (task) {
        var index = this.myTodos.indexOf(task); //find out an index of a word in an array to delete it first
        if (index != -1) {
            this.myTodos.splice(index, 1); //and then delete the word from an index
            console.log("task: " + task + " deleted from the array");
        }
        else //added if-else statement, in case of someone trying to delete something that isnt there
         {
            console.log(task + " was not found in my Task list");
        }
        return this.myTodos.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Eat");
myTodo.addTask("Drink");
myTodo.listAllTasks();
myTodo.deleteTasks("Eat");
myTodo.deleteTasks("Sleep");
myTodo.listAllTasks();
