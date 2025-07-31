import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";

const AnimatedAuth = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError("Please fill in all fields.");
            return;
        }
        if (!isFlipped) {
            // Login: redirect to home
            router.push("/");
        } else {
            // Register: show alert or handle registration
            alert("Registered!");
            setIsFlipped(false);
        }
    };

    return (
        <div className={styles.loginCnt}>
            <div className={styles.flipContainer}>
                <div
                    className={`${styles.flipper} ${isFlipped ? styles.flipped : ""}`}
                >
                    {/* Front - Login */}
                    <div className={`${styles.front}`}>
                        <div className={styles.glassCard}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <h2 className={styles.title}>Welcome Back!</h2>
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
                                <p
                                    onClick={() => setIsFlipped(true)}
                                    className={styles.linkText}
                                >
                                    Don't have an account? Register
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Back - Register */}
                    <div className={`${styles.back}`}>
                        <div className={styles.glassCard}>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <h2 className={styles.title}>Create Account</h2>
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
                                <p
                                    onClick={() => setIsFlipped(false)}
                                    className={styles.linkText}
                                >
                                    Already registered? Login
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