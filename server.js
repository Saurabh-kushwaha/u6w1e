const express = require("express");
let users = require("./users.json");
const fs = require("fs");
const PORT = 8000;
const app = express();
app.use(express.json());

app.get("/api/addresses", (req, res) => {
    res.json(users);
})

app.post("/api/addresses", (req, res) => {
    users.push(req.body);
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
    res.json(req.body);
});

app.put("/api/addresses/:id", (req, res) => {
    const { id } = req.params;
    users = users.map((user) => {
        if (user.id === +id) {
            user = {...req.body}   
        }
        return user;
    })
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
    res.json(req.body);
});
app.patch("/api/addresses/:id", (req, res) => {
    const { id } = req.params;
    users = users.map((user) => {
        if (user.id === +id) {
            user = {...user, ...req.body}   
        }
        return user;
    })
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
    res.json(req.body);
});


app.delete("/api/addresses/:id", (req, res) => {
    const { id } = req.params;
    users = users.map((user) => {
        user.id !== +id;
    });
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
    res.json(req.body);
    res.end();
});

app.listen(PORT, () => {
    console.log(`PORT ADDRESS ${PORT}`); 
});