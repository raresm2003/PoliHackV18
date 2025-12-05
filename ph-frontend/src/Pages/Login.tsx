// typescript
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import "./styles/theme.css"

export default function Login() {
    const navigate = useNavigate();

    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((t) => (t === "light" ? "dark" : "light"));
    };

    return (
        <>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        <div className="login-container">

            <div className="login-card">
                <h2>Login</h2>

                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Parola" required />
                    <button type="submit">Autentificare</button>
                </form>

                <p style={{ marginTop: "10px" }}>
                    Nu ai cont?{" "}
                    <button
                        type="button"
                        className="link"
                        onClick={() => navigate("/register")}
                        style={{ cursor: "pointer", color: "var(--button-bg)", background: "none", border: "none", padding: 0 }}
                    >
                        Înregistrează-te
                    </button>
                </p>
            </div>
        </div>
        </>
    );
}
