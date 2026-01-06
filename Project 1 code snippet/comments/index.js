import express from "express";

const app = express();
const PORT = 8001;

app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:{PORT}`)
});