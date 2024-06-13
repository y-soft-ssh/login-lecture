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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const newUserInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return newUserInfo;
    }
}

module.exports = UserStorage;