import Express from "express";
import axios from "axios";
const app= Express();
const port=3000;
app.use(Express.static("publc"));

app.get("/",async(req,res)=>{
    try{
    res.render("index.ejs");
    }
    catch(error){
        res.render("index.ejs", { content: JSON.stringify(error.response) });
    }
});

app.post("/submit",async(req,res)=>{
    try{
    const result=await axios.get(" https://v2.jokeapi.dev/joke/Any");
   

     res.render("data.ejs",{jokeqn:result.data.setup,jokeans:result.data.delivery});
    }
    catch(error){
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
});

app.listen(port,(req,res)=>{
    console.log(`hey ${port}`);
})