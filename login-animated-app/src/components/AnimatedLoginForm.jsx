import React, { useState } from 'react';
import styles from './AnimationStyles.module.css';

const AnimatedLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }
        // Add further validation and submission logic here
        console.log('Form submitted:', { email, password });
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.animatedForm}>
                <h2 className={styles.title}>Login</h2>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
};

export default AnimatedLoginForm;