import { useContext, useState } from "react";
import Head from "next/head";
import users from "../../data/user.json";
import { AuthContext } from "../../context/AuthContext.js";
import { useRouter } from "next/router";

export default function AdminPage() {
    const { user, logout } = useContext(AuthContext);
    const router = useRouter();

    const [update, setUpdate] = useState("");
    const [updatesList, setUpdatesList] = useState([]);

    const handleAddUpdate = () => {
        if (!update.trim()) return;
        setUpdatesList((prev) => [...prev, update]);
        setUpdate("");
    };

    if (!user || user.email !== "imanshupatel@gmail.com") {
        return <p className="p-10 text-red-500">Access Denied. Admins only.</p>;
    }

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <div className="min-h-screen bg-gray-900 text-white p-10">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl mt-7 min-w-[93vw] text-center font-bold">Admin Dashboard</h1>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl mb-3">Registered Users</h2>
                    <table className="w-full text-left border-collapse border border-gray-700">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="border border-gray-700 px-4 py-2">ID</th>
                                <th className="border border-gray-700 px-4 py-2">Name</th>
                                <th className="border border-gray-700 px-4 py-2">Email</th>
                                <th className="border border-gray-700 px-4 py-2">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u) => (
                                <tr key={u.id} className="border-t border-gray-700">
                                    <td className="px-4 py-2">{u.id}</td>
                                    <td className="px-4 py-2">{u.name}</td>
                                    <td className="px-4 py-2">{u.email}</td>
                                    <td className="px-4 py-2 capitalize">{u.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl mb-3">Game Update Announcements</h2>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            value={update}
                            onChange={(e) => setUpdate(e.target.value)}
                            className="text-white p-2 flex-grow"
                            placeholder="Enter new update..."
                        />
                        <button onClick={handleAddUpdate} className="ml-2 bg-green-500 px-4 py-2 rounded">
                            Add
                        </button>
                    </div>
                    <ul className="list-disc pl-5">
                        {updatesList.map((u, i) => (
                            <li key={i}>{u}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl mb-3">APK Download Stats</h2>
                    <p>Total Downloads: <strong>500M</strong> (mock data)</p>
                </section>
            </div>
        </>
    );
}