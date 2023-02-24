const express=require("express");//import express
const app=express();//create Express Application on App Variable - used to understand 
//the various function
app.use(express.json());//used the json File
//port environment variable
const port=5678;
app.listen(port,() =>console.log('listining on port '+ port));//to list the server onto the port
//give the data to the server
//step 1:reveal in file explorer
//2:edit and write cmd in path
//3. prompt opens write npm i express
//4 node class16.js
const customers=[
    
    {title: 'George',id:1},
    {title: 'Josh',id:2},
    {title: 'Tyler',id:3},
    {title: 'Alice',id:4},
    {title: 'Candice',id:5}
    
]
const Web=[
    {title: 'A',id:6},
    {title: 'A',id:7},
]
// API REQUEST has GET,POST,PUT,HEAD,DELETE,OPTION,PATCH
const seminar=[
    {title: 'A',id:8},
    {title: 'w',id:9},

]
//read request handelers
//display the message when the url consists of '/'
app.get('/welcome',(req,res) => {     //read the resource
    res.send('Welcome to my first Api Get request');

})
//display the list of customers when the URL request consists of api customer
app.get('/api/customer',(req,res) => {
    res.send(customers);
});
app.get('/web',(req,res) => {
    res.send(Web);
})
app.get('/seminar',(req,res) => {
    res.send(seminar);
});
