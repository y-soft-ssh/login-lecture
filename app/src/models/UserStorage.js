"use strict"

class UserStorage{
    static #users = {
        id: ["lifecraft3", "lifecraft"],
        psword: ["1234", "1234"],
        name: ["대장님", "부대장님"],
    };
    
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;