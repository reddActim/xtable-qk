import './App.css';
import { useState } from 'react';

const tableData =
  [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

  ];

function App() {

  const [filterData, setFilterData] = useState(tableData);

  const filterByDate = () => {
    let dataCopy = JSON.parse(JSON.stringify(tableData));
    setFilterData(dataCopy.sort((a, b) => new Date(a.date) - new Date(b.date)));
  }

  const filterByView = () => {
    let dataCopy = JSON.parse(JSON.stringify(tableData));
    setFilterData(dataCopy.sort((a, b) => b.views - a.views));
  }

  return (
    <div style={{padding:15}}>
      <h1>Date and Views Table</h1>
      <button onClick={filterByDate}>Sort by Date</button>
      <button onClick={filterByView}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map(obj => (
            <tr>
              <td>{obj.date}</td>
              <td>{obj.views}</td>
              <td>{obj.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
