import fs from "fs";
import path from "path";

const userFile = path.join(process.cwd(), "data/tournaments.json"); // user registrations
const adminFile = path.join(process.cwd(), "data/tournament-date.json"); // admin matches

export default function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { email } = req.query; // logged-in user email

            if (!email) {
                return res
                    .status(400)
                    .json({ success: false, message: "Email is required" });
            }

            // Load user registrations
            const users = fs.existsSync(userFile)
                ? JSON.parse(fs.readFileSync(userFile, "utf-8"))
                : [];

            // Find user by email
            const user = users.find(
                (u) => u.email?.toLowerCase() === email.toLowerCase()
            );

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not registered in any team",
                });
            }

            // Load tournaments (matches created by admin)
            const tournaments = fs.existsSync(adminFile)
                ? JSON.parse(fs.readFileSync(adminFile, "utf-8"))
                : [];

            // Collect matches for this user's team
            const myMatches = [];
            tournaments.forEach((tournament) => {
                tournament.matches.forEach((match) => {
                    if (
                        match.team1?.team?.toLowerCase() === user.team.toLowerCase() ||
                        match.team2?.team?.toLowerCase() === user.team.toLowerCase()
                    ) {
                        myMatches.push({
                            tournamentDate: tournament.tournamentDate,
                            matchTime: tournament.matchTime || "TBD",
                            team1: match.team1,
                            team2: match.team2,
                        });
                    }
                });
            });

            return res.status(200).json({ success: true, matches: myMatches });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, error: "Server error" });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
