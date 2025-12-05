import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/register.css";
import "./styles/theme.css";
import * as React from "react";

export default function Register() {
    const navigate = useNavigate();

    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    const [role, setRole] = useState("user");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register with role:", role);
        // Here you handle registration
    };

    return (
        <div className="login-container">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            <div className="login-card">
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Parola" required />

                    {/* DROPDOWN ROLE */}
                    <select
                        className="dropdown"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>

                    <button type="submit">Înregistrare</button>
                </form>

                <p style={{ marginTop: "10px" }}>
                    Ai deja cont?{" "}
                    <span
                        className="link"
                        onClick={() => navigate("/login")}
                        style={{ cursor: "pointer", color: "var(--button-bg)" }}
                    >
            Autentifică-te
          </span>
                </p>
            </div>
        </div>
    );
}
