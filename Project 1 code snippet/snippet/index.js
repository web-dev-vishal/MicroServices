import express from "express";

import snippetRouter from "./router/snippet.route.js"

const app = express();
const PORT = 8000;

app.use("/api/v1/snippet", snippetRouter);

app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:8000`)
});