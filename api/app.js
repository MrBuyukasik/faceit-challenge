const express = require("express")
const bodyParser=require("body-parser")
const posts = require("./posts.json")
const users = require("./users.json")

const app = express()

const paginate = (array, page_size, page_number) =>  {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
   }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/posts",(req,res,next)=>{
    res.status(200).json(posts)  
})
app.get('/posts/:pageSize/:page', (req, res) => {
    const page = req.params.page;
    const pageSize = req.params.pageSize;
    res.send(paginate(posts, pageSize, page));
 });
app.get("/users/:id",(req,res,next)=>{
    const response = users.find((user)=>user.id === req.params.id)
    res.status(200).json(response)  
})
app.listen("4000",(error,result)=>{
    if(!error)
    {
        console.log("Local API Alive")
    }
})