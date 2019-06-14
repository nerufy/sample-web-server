const express = require('express');
const app = express();
app.use(express.static('web'));
app.get('/api/v1/list',(req,res) => {
    const todolist = [
        {title: 'Javascriptを勉強する', done: true },
        {title: 'Node.jsを勉強する', done: false },
        {title: 'Web APIを作る',done: false}
    ];
    res.json(todolist);
});
app.get('/',(req,res) => res.send('Hello'));
app.listen(3000, () => console.log('Listening on port 3000'));
