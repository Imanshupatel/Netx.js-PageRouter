import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "data", "tournaments.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const tournamentUser = JSON.parse(fileData);

    res.status(200).json(tournamentUser);
}