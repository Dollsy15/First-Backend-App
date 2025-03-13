// including express module and initialising an app
const express = require('express');
const app = express();

// variable that stores the port number
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    console.log("Get request receive hui hai");
})

// request -> get/ put/ post/ delete
// path -> /, /about, /articles, /blog

// start your app or server
app.listen(port, () =>{
    console.log("Application start ho chuki hai")
})