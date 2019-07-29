const users = [
    {id: 1, name: "Hand"},
    {id: 2, name: "Olaf"},
    {id: 3, name: "Haidy"},
];

module.exports = {
    showUsers(){
        const names = users.map(user => user.name);
        console.log('\nOur users: ');
        names.forEach(name => console.log(name));
    },
    showUserObj(id){
        console.log('\nThe user you are looking for: ');
        const user = users.find(user => id === user.id);
        console.log(user);
    },
    userListLength: users.length,
}

