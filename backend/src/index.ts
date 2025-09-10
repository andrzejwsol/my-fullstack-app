import express from "express";
import usersRouter from "./users";

const app = express();
const PORT = 3000;

app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the API 🚀");
});

// Users routes
app.use("/users", usersRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
