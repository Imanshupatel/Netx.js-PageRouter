import fs from "fs";
import path from "path";
import teams from "../../data/tournaments.json";

const filePath = path.join(process.cwd(), "data", "matches.json");

function generateMatches(teamList) {
    const matches = [];
    const shuffled = [...teamList].sort(() => 0.5 - Math.random());

    // Take only the first 8 teams (for 4 matches)
    const selectedTeams = shuffled.slice(0, 8);

    // Pair them so no team repeats in this tournament
    while (selectedTeams.length >= 2) {
        matches.push({
            team1: selectedTeams.shift(),
            team2: selectedTeams.shift()
        });
    }

    return matches;
}

export default function handler(req, res) {
    if (req.method === "GET") {
        try {
            const jsonData = fs.existsSync(filePath)
                ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
                : [];
            res.status(200).json(jsonData);
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    }

    else if (req.method === "POST") {
        const { date } = req.body;
        if (!date) {
            return res.status(400).json({ success: false, error: "Date is required" });
        }

        try {
            let existing = [];
            if (fs.existsSync(filePath)) {
                existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            }

            // ✅ Check if tournament for this date already exists
            const existingTournament = existing.find(t => t.tournamentDate === date);
            if (existingTournament) {
                return res.status(200).json({
                    success: true,
                    data: existingTournament,
                    message: "Tournament already scheduled for this date."
                });
            }

            // Generate new tournament if date not found
            const matches = generateMatches(teams);
            const newTournament = {
                tournamentDate: date,
                matches,
            };

            existing.push(newTournament);
            fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

            res.status(200).json({ success: true, data: newTournament });
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    }

    else {
        res.status(405).json({ success: false, error: "Method not allowed" });
    }
}
