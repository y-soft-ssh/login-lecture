"use strict";

const users = {
    id: ["lifecraft3", "lifecraft"],
    psword: ["1234", "1234"],
};

const output = {
    home: (req, res) =>{
        res.render("home/index")
    },
    login: (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;
        
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === password){
                return res.json({
                    succes: true,
                });
            }
        }

        return res.json({
            succes: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

module.exports = {
    output,
    process,
}