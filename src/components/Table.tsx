import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface EmissionData {
  source: String;
  co2Emission: number;
  isCountry: boolean;
}

const initialData: EmissionData[] = [
  { source: "USA", co2Emission: 100.05, isCountry: true },
  { source: "Germany", co2Emission: 200.05, isCountry: true },
  { source: "Starbucks", co2Emission: 3213.05, isCountry: false },
  { source: "Italy", co2Emission: 312305, isCountry: true },
  { source: "Henkel", co2Emission: 103123205, isCountry: false },
  { source: "USA", co2Emission: 100.05, isCountry: true },
  { source: "Germany", co2Emission: 200.05, isCountry: true },
  { source: "Starbucks", co2Emission: 3213.05, isCountry: false },
  { source: "Italy", co2Emission: 312305, isCountry: true },
  { source: "Henkel", co2Emission: 103123205, isCountry: false },
  { source: "USA", co2Emission: 100.05, isCountry: true },
  { source: "Germany", co2Emission: 200.05, isCountry: true },
  { source: "Starbucks", co2Emission: 3213.05, isCountry: false },
  { source: "Italy", co2Emission: 312305, isCountry: true },
];

const Table: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(initialData);
  const [filterCountry, setFilterCountry] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCountry(event.target.value);
  };

  const sortEmissions = () => {
    const sortedData = [...data].sort((a, b) => b.co2Emission - a.co2Emission);
    setData(sortedData);
  };

  return (
    <section className="bg-mint-green dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 mb-[50px]">
        <div className="bg-green dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <button
              onClick={sortEmissions}
              className="bg-dark-green text-white font-bold py-2 px-4 rounded"
            >
              {t("table.sort")}
            </button>

            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <select
                  onChange={handleFilterChange}
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none text-dark-green bg-mint-green rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <option
                    className="text-white"
                    value=""
                  >
                    {t("table.select.all")}
                  </option>
                  <option
                    className="text-white"
                    value="true"
                  >
                    {t("table.select.countries")}
                  </option>
                  <option
                    className="text-white"
                    value="false"
                  >
                    {t("table.select.companies")}
                  </option>

                  <svg
                    className="-ml-1 mr-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-dark-green dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-mint-green"
                  >
                    {t("table.sources")}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-mint-green
                    "
                  >
                    {t("table.emissions")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter(
                    (row) =>
                      filterCountry === "" ||
                      (filterCountry === "true"
                        ? row.isCountry
                        : !row.isCountry)
                  )
                  .map((row, index) => (
                    <tr
                      className="border-mint-green"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-bold text-gray-900 whitespace-nowrap text-white"
                      >
                        {row.source}
                      </th>
                      <td className="px-4 py-3 text-white">
                        {row.co2Emission}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
