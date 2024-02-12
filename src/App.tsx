import "./App.css";

import { Footer } from "./components/Footer";
import Table from "./components/Table";

import { useState } from "react";
import i18n, { supportedLngs } from "./i18n/config";
import Navbar from "./components/Navbar";

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
      <div className="bg-dark-green">
        <select
          className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none text-dark-green bg-mint-green rounded-lg border hover:bg-gray-100focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          id="actionsDropdownButton"
          value={i18n.resolvedLanguage}
          onChange={handleChangeFilterChange}
        >
          {Object.entries(supportedLngs).map(([code, name]) => (
            <option
              className="text-white"
              value={code}
              key={code}
            >
              {name}
            </option>
          ))}
        </select>
      </div>
      <Navbar /> <Table />
      <Footer />
    </body>
  );
}

export default App;
