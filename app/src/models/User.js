"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);
      if (user) {
        if (user.id === client.id && user.psword === client.psword) {
          return { succes: true };
        }
        return { succes: false, msg: "비밀번호가 일치하지 않습니다." };
      }
      return { succes: false, msg: "아이디가 존재하지 않습니다." };
    } catch (err) {
      return { succes: false, msg: err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { succes: false, msg: err };
    }
  }
}

module.exports = User;
