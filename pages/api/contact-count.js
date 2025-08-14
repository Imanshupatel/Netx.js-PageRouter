import fs from "fs";
import path from "path";

export default function handler(req, res) {
    try {
        const filePath = path.join(process.cwd(), "data", "contacts.json");
        const contacts = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const newCount = contacts.filter(c => c.status === "new").length;
        res.status(200).json({ newCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to read contacts" });
    }
}
