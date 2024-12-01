import express from "express";

const app= express();


app.use(compresion({
    brotti:{
        enabled:true,
        zlib:{}
    }
}))

app.get("/",(req,res)=>{

})

