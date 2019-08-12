const colors = require('colors');
const fs = require('fs');

const handleData = (type, title) => {
    // type - number (1 - add, 2 - remove, 3 - list)
    // title (string || null)

    const data = fs.readFileSync('data.json');

    // const data = fs.readFileSync('data.json', 'utf8');

    // or
    // let data = fs.readFileSync('data.json');
    // data = data.toString();

    // or
    let tasks = JSON.parse(data);
    console.log(tasks);

    if(type === 1 || type === 2){
        isExisted = tasks.find(task => task.title === title) ? true : false;
        if(type === 1 && isExisted){
            return console.log("The task exists :)".yellow)
        } else if (type === 2 && !isExisted){
            return console.log("I cannot delete a task that does not exist :(".red);
        }
    }

    let dataJSON = "";
    switch (type) {
        case 1:
            tasks = tasks.map((task, index) => ({id: index + 1, title: task.title}));
            const id = tasks.length  + 1;
            tasks.push({id, title});
            dataJSON = JSON.stringify(tasks);
            fs.writeFileSync('data.json', dataJSON);
            console.log(`add task: ${title}`.white.bgGreen);
            break;
            
        case 2:
            const index = tasks.findIndex(task => task.title === title);
            tasks.splice(index, 1);
            tasks = tasks.map((task, index) => ({id: index + 1, title: task.title}));
            console.log(tasks);
            dataJSON = JSON.stringify(tasks);
            fs.writeFile('data.json', dataJSON, 'utf8', (err) => {
            if(err) throw err;
            console.log(`The task ${title} was delete :)`.white.bgCyan);
            })
        break;

        case 3: 
        console.log(`The TO-DO list includes ${tasks.length}. You have to do: `);
        if(tasks.length)
            tasks.forEach((task, index) => {
                if(index % 2) return console.log(task.title.green);
                return console.log(task.title.yellow);
            })

        break;
    }

}

module.exports = handleData;