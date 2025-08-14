import fs from "fs";
import path from "path";

export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            const filePath = path.join(process.cwd(), "data", "contacts.json");
            let contacts = [];

            if (fs.existsSync(filePath)) {
                contacts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            }

            // Mark all "new" contacts as "read"
            contacts = contacts.map(contact => ({
                ...contact,
                status: "read"
            }));

            fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

            res.status(200).json({ success: true });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to mark contacts as read" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}
