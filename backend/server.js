const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const fs = require("fs")
const jwt = require('jsonwebtoken');
const cors = require("cors");




app.use(express.json());
app.use(cors());


const checkAuth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
        const checkedToken = jwt.verify(token, "123456")
        if (checkedToken) {
            req.user = checkedToken.user;
            next();
        }
        else {
            res.status(400).json({ msg: "Please login" })
        }
    }
    else {
        res.status(400).json({ msg: "Please login" })
    }

}

//SignUp
app.post("/sign-up", (req, res) => {
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = {
        name,
        email,
        password: hash,
    };

    fs.readFile("database.json", "utf8", (err, data) => {
        if (err) res.status(400).json({ msg: err })
        if (data) {
            let userss = JSON.parse(data);
            const found = userss.findIndex((e)=>e.email == email);
            let userDB = userss;
            userDB.push(user);

            if(found == -1){
                fs.writeFile("database.json", JSON.stringify(userDB), (err)=>{
                    if(err) {res.status(400).json({msg:err})}
                    else{
                        res.json({user})
                    }
                })
            } else res.status(400).json({msg:"This email is exist"})
        }
        
    })
})




//Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    fs.readFile("database.json", "utf-8", (err, data) => {
        if (err) res.status(400).json({ msg: err })
        if (data) {
            const users = JSON.parse(data);
            const found = users.findIndex((e) => e.email == email);
            if (found == -1) {
                res.status(400).json({ msg: "invalid email" })
            } else {
                const check = bcrypt.compareSync(password, users[found].password);
                if (check) {
                    const token = jwt.sign({ user: users[found] }, "123456");
                    res.json({ token })
                } else res.status(400).json({ msg: "invalid password" })
            }
        }
    })
})



//Profile
app.get("/profile", checkAuth, (req, res) => {
    res.status(200).json({ user: req.user })
})


app.listen(3000, () => console.log("Server is running ...."));












// //SignUp
// app.post("/sign-up", (req, res) => {
//     const { name, email, password } = req.body;
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);
//     const user = {
//         name,
//         email,
//         password: hash,
//     };

//     const users = [];
//     users.push(user);

//     fs.writeFile("database.json", JSON.stringify(users), (err) => {
//         if (err) { res.status(400).json({ msg: err }) }
//         else {
//             res.json({ users })
//         }
//     })
// })
