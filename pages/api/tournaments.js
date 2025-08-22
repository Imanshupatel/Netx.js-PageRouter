import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const dataFile = path.join(process.cwd(), "data/tournaments.json");

    // Utility: read file
    const readData = () =>
        fs.existsSync(dataFile) ? JSON.parse(fs.readFileSync(dataFile, "utf-8")) : [];

    // Utility: write file
    const writeData = (data) =>
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

    // POST: register new tournament
    if (req.method === "POST") {
        try {
            const fields = req.body;
            let data = readData();

            const newEntry = {
                id: data.length > 0 ? Math.max(...data.map((d) => d.id)) + 1 : 1,
                ...fields,
                status: "Pending", // default
                registeredAt: new Date().toLocaleString(),
            };

            data.push(newEntry);
            writeData(data);

            return res
                .status(200)
                .json({ message: "Registration successful!", newEntry });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Error saving registration" });
        }
    }

    // GET: all tournaments
    if (req.method === "GET") {
        const data = readData();
        return res.status(200).json(data);
    }

    // PUT: update a tournament
    if (req.method === "PUT") {
        try {
            const updated = req.body;
            let data = readData();

            let found = false;
            data = data.map((r) => {
                if (r.id === updated.id) {
                    found = true;
                    return { ...r, ...updated };
                }
                return r;
            });

            if (!found) {
                return res.status(404).json({ error: "Tournament not found" });
            }

            writeData(data);
            return res.status(200).json(updated);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Error updating tournament" });
        }
    }

    // DELETE: remove a tournament
    if (req.method === "DELETE") {
        try {
            const id = parseInt(req.query.id);
            let data = readData();

            const exists = data.some((r) => r.id === id);
            if (!exists) {
                return res.status(404).json({ error: "Tournament not found" });
            }

            data = data.filter((r) => r.id !== id);
            writeData(data);

            return res.status(200).json({ message: "Tournament deleted successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Error deleting tournament" });
        }
    }

    // Method not allowed
    return res.status(405).json({ error: "Method not allowed" });
}
