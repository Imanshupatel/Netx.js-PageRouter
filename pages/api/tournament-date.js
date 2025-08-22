import fs from "fs";
import path from "path";
import teams from "../../data/tournaments.json"; // all user registrations

const filePath = path.join(process.cwd(), "data", "matches.json");

/**
 * ✅ Normalize game names
 * Example: "PUBG PC" → "pubg_pc"
 */
function normalize(str) {
    return str.toLowerCase().trim().replace(/\s+/g, "_");
}

/**
 * Generate matches for a specific game
 */
function generateMatches(teamList) {
    const matches = [];
    const shuffled = [...teamList].sort(() => 0.5 - Math.random());

    while (shuffled.length >= 2) {
        matches.push({
            team1: shuffled.shift(),
            team2: shuffled.shift(),
        });
    }

    // If odd number of teams → last one gets pending/bye
    if (shuffled.length === 1) {
        matches.push({
            team1: shuffled.shift(),
            team2: null, // bye
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
        const { date, game } = req.body;

        if (!date || !game) {
            return res.status(400).json({
                success: false,
                error: "Date and game are required",
            });
        }

        try {
            let existing = [];
            if (fs.existsSync(filePath)) {
                existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
            }

            // 🔹 Case 1: Generate for a single game
            if (normalize(game) !== "all") {
                const existingTournament = existing.find(
                    (t) =>
                        t.tournamentDate === date &&
                        normalize(t.game) === normalize(game)
                );
                if (existingTournament) {
                    return res.status(200).json({
                        success: true,
                        data: existingTournament,
                        message:
                            "Tournament already scheduled for this game on this date.",
                    });
                }

                const gameTeams = teams.filter(
                    (team) => normalize(team.game) === normalize(game)
                );

                if (gameTeams.length < 2) {
                    return res.status(400).json({
                        success: false,
                        error: `Not enough teams registered for ${game}.`,
                    });
                }

                const matches = generateMatches(gameTeams);

                const newTournament = {
                    tournamentDate: date,
                    game,
                    matches,
                };

                existing.push(newTournament);
                fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

                return res.status(200).json({ success: true, data: newTournament });
            }

            // 🔹 Case 2: Generate for ALL games
            const games = [
                ...new Set(teams.map((t) => normalize(t.game))),
            ]; // unique normalized games
            const tournaments = [];

            for (const g of games) {
                const gameTeams = teams.filter(
                    (team) => normalize(team.game) === g
                );

                if (gameTeams.length >= 2) {
                    const matches = generateMatches(gameTeams);

                    const newTournament = {
                        tournamentDate: date,
                        game: g, // already normalized
                        matches,
                    };

                    tournaments.push(newTournament);
                    existing.push(newTournament);
                }
            }

            fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

            res.status(200).json({
                success: true,
                data: tournaments,
                message: "Tournaments generated for all games",
            });
        } catch (err) {
            res.status(500).json({ success: false, error: err.message });
        }
    }

    else {
        res.status(405).json({ success: false, error: "Method not allowed" });
    }
}
