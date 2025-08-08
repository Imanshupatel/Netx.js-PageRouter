import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "data", "tournaments.json");

    if (req.method === "POST") {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        const newEntry = {
            id: data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1,
            ...req.body,
            registeredAt: new Date().toLocaleString(), // includes date + time
        };

        data.push(newEntry);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        return res.status(200).json({ message: "Registration saved successfully" });
    }

    if (req.method === "GET") {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        return res.status(200).json(data);
    }

    if (req.method === "DELETE") {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: "Missing tournament ID" });
        }

        let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const initialLength = data.length;
        data = data.filter(item => String(item.id) !== String(id));

        if (data.length === initialLength) {
            return res.status(404).json({ error: "Tournament not found" });
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return res.status(200).json({ message: "Tournament deleted successfully" });
    }

    res.status(405).json({ error: "Method not allowed" });
}
