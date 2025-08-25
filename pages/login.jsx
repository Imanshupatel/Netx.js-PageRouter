import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import users from "../data/user.json";
import styles from "../styles/login.module.css";

const AnimatedAuth = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
    const [error, setError] = useState("");
    const router = useRouter();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password || (isFlipped && !form.name)) {
            setError("Please fill in all fields.");
            return;
        }

        if (!isFlipped) {
            // LOGIN
            const matchedUser = users.find(
                (u) => u.email === form.email && u.password === form.password
            );
            if (matchedUser) {
                login(matchedUser);
                matchedUser.role === "admin" ? router.push("/admin") : router.push("/");
            } else {
                setError("Invalid email or password.");
            }
        } else {
            // REGISTER
            try {
                const res = await fetch("/api/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        password: form.password,
                        role: "user",
                    }),
                });
                const data = await res.json();
                if (res.ok) {
                    alert("Registered successfully!");
                    setIsFlipped(false);
                    setForm({ name: "", email: "", password: "", role: "" });
                } else {
                    setError(data.message || "Registration failed");
                }
            } catch {
                setError("Server error. Please try again.");
            }
        }
    };

    return (
        <div className={styles.loginCnt}>
            <div className={styles.flipContainer}>
                <div className={`${styles.flipper} ${isFlipped ? styles.flipped : ""}`}>

                    {/* Login Card */}
                    <div className={styles.front}>
                        <div className={styles.glassCard}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <h2 className={styles.title}>Welcome Back</h2>
                                <input
                                    className={styles.input}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                {error && <div className={styles.error}>{error}</div>}
                                <button type="submit" className={styles.button}>
                                    Login
                                </button>
                                <p onClick={() => setIsFlipped(true)} className={styles.linkText}>
                                    Don’t have an account? <span>Register</span>
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Register Card */}
                    <div className={styles.back}>
                        <div className={styles.glassCard}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <h2 className={styles.title}>Create Account</h2>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className={styles.input}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className={styles.input}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                {error && <div className={styles.error}>{error}</div>}
                                <button type="submit" className={styles.button}>
                                    Register
                                </button>
                                <p onClick={() => setIsFlipped(false)} className={styles.linkText}>
                                    Already registered? <span>Login</span>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AnimatedAuth;
