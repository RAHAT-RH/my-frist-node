const express = require ('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hey It's worked over smart");
})

const users = [
    {id: 1, name: "Rahat", email: "rahat@gmail.com", phone: +8801725241254},
    {id: 2, name: "Biplob", email: "biplob@gmail.com", phone: +88017251520},
    {id: 3, name: "sagor", email: "sagor@gmail.com", phone: +8801702254441},
    {id: 4, name: "Rayhan", email: "Rayhan@gmail.com", phone: +8801725154122},
    {id: 5, name: "Dipu", email: "Dipu@gmail.com", phone: +8801725646422},
    {id: 6, name: "Sajal", email: "Sajal@gmail.com", phone: +880172504124},
    {id: 7, name: "Niloy", email: "Niloy@gmail.com", phone: +88017254551150}
]

app.get("/users", (req, res) => {
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(u => u.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else{
        res.send(users)
    }
    res.send(users)
})

app.post('/user',(req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);

    res.send(user)
})

app.get('/users', (req, res) => {
    res.send({id: 1, name: "Abdul Halim", job:"servent"})
})

app.listen(port, () => {
    console.log(`Listen to ${port}`)
})