import fs from "fs";
import path from "path";
import teams from "../../data/tournaments.json"; // all user registrations

const filePath = path.join(process.cwd(),
"data",
"matches.json");

/**
 * Generate matches for a specific game
 */
function generateMatches(teamList) {
    const matches = [];
    const shuffled = [...teamList
    ].sort(() => 0.5 - Math.random());

    // Pair teams without repeating
    while (shuffled.length >= 2) {
        matches.push({
            team1: shuffled.shift(),
            team2: shuffled.shift(),
        });
    }

    return matches;
}

export default function handler(req, res) {
    if (req.method === "GET") {
        try {
            const jsonData = fs.existsSync(filePath)
                ? JSON.parse(fs.readFileSync(filePath,
            "utf-8"))
                : [];
            res.status(200).json(jsonData);
        } catch (err) {
            res.status(500).json({ success: false, error: err.message
            });
        }
    }

    else if (req.method === "POST") {
        const { date, game
        } = req.body;

        if (!date || !game) {
            return res.status(400).json({
                success: false,
                error: "Date and game are required",
            });
        }

        try {
            let existing = [];
            if (fs.existsSync(filePath)) {
                existing = JSON.parse(fs.readFileSync(filePath,
                "utf-8"));
            }
            // ✅ Check if tournament for this date & game already exists
            const existingTournament = existing.find(
                (t) => t.tournamentDate === date && t.game === game
            );
            if (existingTournament) {
                return res.status(200).json({
                    success: true,
                    data: existingTournament,
                    message: "Tournament already scheduled for this game on this date.",
                });
            }
            // 🔹 Filter teams by game
            const gameTeams = teams.filter(
                (team) => team.game.toLowerCase() === game.toLowerCase()
            );

            if (gameTeams.length < 2) {
                return res.status(400).json({
                    success: false,
                    error: "Not enough teams registered for this game.",
                });
            }
            // ✅ Generate matches
            const matches = generateMatches(gameTeams);

            const newTournament = {
                tournamentDate: date,
                game,
                matches,
            };

            existing.push(newTournament);
            fs.writeFileSync(filePath, JSON.stringify(existing,
            null,
            2));

            res.status(200).json({ success: true, data: newTournament
            });
        } catch (err) {
            res.status(500).json({ success: false, error: err.message
            });
        }
    }

    else {
        res.status(405).json({ success: false, error: "Method not allowed"
        });
    }
}