import { Router, Request, Response } from "express";

interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];

const router = Router();

// GET /users → list all users
router.get("/", (req: Request, res: Response) => {
    res.json(users);
});

// GET /users/:id → single user
router.get("/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
});

// POST /users → add new user
router.post("/", (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    const newUser: User = {
        id: users.length + 1,
        name,
        email,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

export default router;
