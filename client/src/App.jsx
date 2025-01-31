import "./App.Styles.scss";
import { React, useEffect, useState } from "react";

export default function App() {
  const [backendData, setBackendData] = useState([{}]);
  const SERVER_URL = "/api";

  useEffect(() => {
    fetch(SERVER_URL)
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return <div></div>;
}

/**
 * 
 *         backendData.users.map((users, key) => {
          <div key={key}>
            {users}
            <p style={{ color: "white" }}>something</p>
          </div>;
        })
 * 
 * 
 * 
 */
