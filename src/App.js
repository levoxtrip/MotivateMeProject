import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export default function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "login":
        return <Login />;

      default:
        return <div>Page not found</div>;
    }
  };
  return <div>{renderView()}</div>;
}
