import "./App.Styles.scss";
import { React, useEffect, useState } from "react";

export default function App() {
  const [backendData, setBackendData] = useState([{}]);
  const SERVER_URL = "/api";

  const styles = {
    backgroundColor: "lightcoral",
    width: "70vw",
    height: "70vh",
    color: "black",
    border: "1px solid black",
  };

  const getRequest = () => {
    try {
      fetch(SERVER_URL)
        .then((res) => res.json())
        .then((data) => {
          setBackendData(data);
        });
    } catch (error) {
      console.log(`Error fetching data ${error}`);
    }
  };

  const postRequest = () => {};

  const putRequest = () => {};

  const deleteRequest = () => {};

  return (
    <div>
      <div>
        <button type="button" onClick={getRequest}>
          Click to get info from api
        </button>
      </div>
      <div style={styles}>
        {backendData.users &&
          backendData.users.map((users, key) => {
            return <p key={key}>{users}</p>;
          })}
      </div>
      <div>
        <button type="button" onClick={postRequest}>
          Click to post info to api
        </button>
        <button type="button" onClick={putRequest}>
          Click to update info to api
        </button>
        <button type="button" onClick={deleteRequest}>
          Click to delete info from api
        </button>
      </div>
    </div>
  );
}

/**
 *         {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((users, key) => {
            <p key={key}>{users}</p>;
          })
        )}
 * 
 */
