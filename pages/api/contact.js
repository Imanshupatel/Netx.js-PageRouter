import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "data", "contacts.json");

    if (req.method === "POST") {
        let contacts = [];
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf8");
            contacts = JSON.parse(fileData);
        }

        // Add status: "new" by default
        const newContact = {
            ...req.body,
            date: new Date().toISOString(),
            status: "new"
        };

        contacts.push(newContact);

        fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

        res.status(200).json({ message: "Contact saved successfully!" });

    } else if (req.method === "GET") {
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf8");
            res.status(200).json(JSON.parse(fileData));
        } else {
            res.status(200).json([]);
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
