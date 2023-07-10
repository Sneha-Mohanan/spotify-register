const express=require("express");
const app=express();


const AuthRoute=require("./routes/home");
const LoginRoute = require("./routes/login")
const RegisterRoute = require("./routes/register")
app.use(express.json());

app.use("/",AuthRoute);
app.use("/home",LoginRoute)
app.use("/home",RegisterRoute)



// router.get("/",(req,res)=>
// {
//     res.send("helloi");
// })
// router.post("/",(req,res)=>
// {
//     res.send("hyy");
   
// })

// module.exports=router;

app.listen(7000,()=>
{
    console.log("server listening at port 7000")
}
);
