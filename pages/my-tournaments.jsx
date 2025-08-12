import { useContext, useMemo } from "react";
import { AuthContext } from "@/context/AuthContext";

const tournaments = [
    {
        id: 1, name: "Imanshu", email: "imanshupatel@gmail.com", phone: "7524139832", game: "bgmi", team: "MADX", registeredAt: "8/8/2025, 1:37:51 pm"
    },
    {
        id: 2, name: "Jenish", email: "jenish21@gmail.com", phone: "6512458236", game: "pubg pc", team: "Kong", registeredAt: "8/8/2025, 1:38:26 pm"
    },
    {
        id: 3, name: "Tejas", email: "tejasginoya@gamil.com", phone: "9635234865", game: "PUBG Mobile", team: "Global", registeredAt: "8/8/2025, 1:38:51 pm"
    },
    {
        id: 4, name: "Imanshu", email: "imanshupatel@gmail.com", phone: "7524139832", game: "pubg mobile", team: "MADX", registeredAt: "8/8/2025, 3:14:44 pm"
    },
    {
        id: 5, name: "Jenish", email: "jenish21@gmail.com", phone: "6512458236", game: "bgmi", team: "Kong", registeredAt: "8/8/2025, 3:18:59 pm"
    },
    {
        id: 6, name: "Karan", email: "karanrana@gmail.com", phone: "5598463156", game: "pubg pc", team: "anime", registeredAt: "8/8/2025, 3:21:30 pm"
    },
    {
        id: 7, name: "Karan", email: "karanrana@gmail.com", phone: "5598463156", game: "bgmi", team: "anime", registeredAt: "8/8/2025, 3:22:17 pm"
    },
    {
        id: 8, name: "Jonathan", email: "jonathan25@gmail.com", phone: "4657931852", game: "bgmi", team: "GodLike", registeredAt: "8/8/2025, 3:25:02 pm"
    },
    {
        id: 9, name: "Tanmay", email: "tanmay001@gmail.com", phone: "2200013626", game: "bgmi", team: "Scout", registeredAt: "8/8/2025, 3:26:06 pm"
    },
    {
        id: 10, name: "Mayur", email: "mayur56@gmail.com", phone: "8986523742", game: "bgmi", team: "MayurGaming", registeredAt: "8/8/2025, 3:28:42 pm"
    }
];

export default function MyTournaments() {
    const { user } = useContext(AuthContext);

    const myTournaments = useMemo(() => {
        if (!user) return [];
        return tournaments.filter(
            (t) => t.email.toLowerCase() === user.email.toLowerCase()
        );
    }, [user]);

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <p className="text-lg">Please log in to see your tournaments.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <h1 className="text-3xl font-bold text-white mt-15 text-center mb-6">🎮 My Tournaments</h1>
            {myTournaments.length === 0 ? (
                <p className="text-gray-400">You have not registered for any tournaments yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myTournaments.map((tournament) => (
                        <div
                            key={tournament.id}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
                        >
                            <h2 className="text-xl font-semibold text-orange-400">{tournament.game.toUpperCase()}</h2>
                            <p className="text-gray-300 mt-1">Team: <span className="font-medium">{tournament.team}</span></p>
                            <p className="text-gray-400 text-sm mt-2">📅 {tournament.registeredAt}</p>
                            <div className="mt-4 border-t border-gray-700 pt-4">
                                <p className="text-gray-200 font-medium">{tournament.name}</p>
                                <p className="text-gray-400 text-sm">{tournament.email}</p>
                                <p className="text-gray-400 text-sm">📞 {tournament.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
