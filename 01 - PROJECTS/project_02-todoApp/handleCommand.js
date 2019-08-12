const handleData = require('./handleData');

const handleCommand = ({add, remove, list}) => {
    console.log(add, remove, list);

    if(add){
        if(typeof add !== "string"){
            return console.log("Add name of the task - only STRING !!!".red);
        } else if(add.length < 7){
            return console.log("Task name must must be at least 6 characters long !!!".orange);
        }
        console.log("I will add something :)");
        handleData(1, add);
    } else if(remove){
        if(typeof remove !== "string" || remove.length < 7){
            console.log("Enter the name of the sited task. It must be text and must be longer than 6 characters.".red);
        }
        handleData(2, remove);
        console.log("I will remove something :)");
    } else if(list || list === ""){
        handleData(3, null);
        console.log("I will show list :)");
    } else {
        console.log(`I don't understand :(. Please use: --add="task name", ---remove="task name" or --list`.yellow);
    }
}

module.exports = handleCommand;