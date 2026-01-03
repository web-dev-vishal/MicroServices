import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Auth Micro service working" })
})

app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`))