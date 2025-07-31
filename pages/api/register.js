import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const filePath = path.join(process.cwd(), "data", "user.json");
        const fileData = fs.readFileSync(filePath, "utf-8");
        const users = JSON.parse(fileData);

        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return res.status(400).json({ message: "User already exists." });
        }

        const newUser = {
            id: users.length + 1,
            name,
            email,
            password,
        };

        users.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

        return res.status(201).json({ message: "User registered successfully." });
    }

    return res.status(405).json({ message: "Method not allowed." });
}