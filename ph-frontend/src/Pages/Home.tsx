import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import "./styles/theme.css";
export default function Home() {
    const navigate = useNavigate();

    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <div className="home-container">
                <div className="home-card">
                    <h1>Bun venit!</h1>
                    <p>Aceasta este pagina principală, accesibilă tuturor utilizatorilor.</p>

                    <div className="home-buttons">
                        <button onClick={() => navigate("/login")}>Autentificare</button>
                        <button onClick={() => navigate("/register")}>Creare cont</button>
                    </div>
                </div>
            </div>
        </>
    );
}
