import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
const all_countries = gql`
  query {
    Country {
      _id
      name
      capital
      flag {
        svgFile
      }
      currencies{
        code
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(all_countries);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>something is wrong</p>;
  return (
    <ul className="countries">
      {
        data.Country.map(c => {
          return <li key={c._id} className="country">
            <div className="container">
              <div className="flag-container">
                <img className="flag" key={c._id} src={c.flag.svgFile} alt="flag" />
              </div>
              <div className="data-container">
                <p className="country">
                  <strong>Country : </strong> {c.name}
                </p>
                <p className="capital">
                  <strong>Capital : </strong> {c.name}
                </p>
                <p className="currency">
                  <strong>Currency : </strong> {c.currencies[0].code} ({c.currencies[0].name})
                </p>
              </div>
            </div>
          </li>;
        })
      }
    </ul>
  );
}

export default App;
