const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];


function getPeople(userId) {
    const user = people.find(person => person.id === userId);
    const idFriends = user.friends;
    const userFriends = [];
    if (idFriends !== null) {
        idFriends.forEach((friendId) => {
            userFriends.push(people.find(somebody => somebody.id === friendId));
        });

        return userFriends;
    }
    return null;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
