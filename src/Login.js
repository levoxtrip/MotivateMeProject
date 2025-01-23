import { useState } from "react";
import { Dashboard } from "./Dashboard";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (email === "moin@moin.de" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("Falsche Email oder Passwort");
    }

    if (isLoggedIn) {
      return <Dashboard />;
    }
    // Add your login logic here
    // For example: loginUser(email, password);
  };

  return (
    <div>
      <form submit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Passwort</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
