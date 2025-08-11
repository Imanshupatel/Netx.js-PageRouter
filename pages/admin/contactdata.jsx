import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

export default function AdminContacts() {
    const { user } = useContext(AuthContext);
    const [contacts, setContacts] = useState([]);

    const router = useRouter();

    useEffect(() => {
        fetch("/api/contact")
            .then((res) => res.json())
            .then((data) => setContacts(data));
    }, []);

    if (!user || user.role !== "admin") {
        return <p className="p-10 min-w-[93vw] text-center pt-100 text-3xl text-red-500">Access Denied. Admins only.</p>;
    }

    return (
        <div style={{ padding: "20px", paddingTop: "100px" }}>
            <h1 className="font-bold text-2xl mb-15 text-center text-green-500">Admin - Contact Submissions</h1>
            {contacts.length === 0 ? (
                <p>No contacts yet.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", borderColor: "#fff" }}>
                    <thead className="bg-gray-800 text-white border-2 ">
                        <tr className="text-center text-lg font-semibold">
                            <th className="border-2">Name</th>
                            <th className="border-2">Email</th>
                            <th className="border-2">Message</th>
                            <th className="border-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((c, index) => (
                            <tr key={index}>
                                <td className="border-2 p-1 text-1xl text-center">{c.name}</td>
                                <td className="border-2 p-1 text-1xl text-center">{c.email}</td>
                                <td className="border-2 p-1 text-1xl pl-3">{c.message}</td>
                                <td className="border-2 p-1 text-1xl text-center">{new Date(c.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button
                onClick={() => router.back()}
                className="mt-5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
                Back to Home
            </button>

        </div>
    );
}
