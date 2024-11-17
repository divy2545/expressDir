const express= require("express");
const app= express();

// console.dir(app);

const port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})

// app.use((req,res)=>{
//     console.log("request recieved");
//     // console.log(req);
//     // res.send({
//     //     name:"apple",                //json response
//     //     color:"red",
//     // });

//     let code="<h1>fruits</h1><ul> <li>apple</li> <li>mango</li> </ul>";
//   res.send(code);
    
// });


// app.get("/",(req,res)=>{
//     res.send("you contacted root path....");
    
// });

// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
    
// });

// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// });

// app.get("*",(req,res)=>{
//     res.send("this path does not exist....");
// });

// app.post("/",(req,res)=>{
//     res.send("this is a post request");
// });



//======================================================

app.get("/",(req,res)=>{
    res.send("this is the root path");
});

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let {username,id}=req.params;

    res.send(`welcome to the page of apna`)
    
    
})