import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Table from "./components/Table";

import { useState } from "react";
import i18n, { supportedLngs } from "./i18n/config";

function App() {
  const [filterLanugage, setLanguage] = useState("");
  const handleChangeFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <body className="h-screen bg-mint-green">
      {" "}
      <select
        value={i18n.resolvedLanguage}
        onChange={handleChangeFilterChange}
      >
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option
            value={code}
            key={code}
          >
            {name}
          </option>
        ))}
      </select>
      <Navbar /> <Table />
      <Footer />
    </body>
  );
}

export default App;
