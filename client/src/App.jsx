import "./App.Styles.scss";
import { React, useState } from "react";

export default function App() {
  //const envVar = import.meta.env;
  const [mockUserData, setMockUserData] = useState([]);
  const SERVER_URL = "/api";
  const POST_URL = "http://localhost:5000/api";

  const getRequest = async () => {
    try {
      const response = await fetch(SERVER_URL);
      const result = await response.json();

      console.log(result);
      setMockUserData(result);
    } catch (error) {
      console.log(`Error fetching data ${error}`);
    }
  };

  const postRequest = () => {
    try {
      const newUser = {
        id: 4,
        name: "Dana Doe",
        age: 12,
      };

      const newUserRes = fetch(POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const newUserResJson = newUserRes.json();

      console.log(newUserResJson);
    } catch (error) {
      console.log(`Error posting data ${error}`);
    }
  };

  const putRequest = () => {};

  const deleteRequest = () => {};

  return (
    <div>
      <div>
        <button type="button" onClick={getRequest}>
          Click to get info from api
        </button>
      </div>
      <div className="info-div">
        {mockUserData &&
          mockUserData.map((user, key) => {
            return (
              <div key={key}>
                <div>{user.name}</div>
                <div>{user.age}</div>
              </div>
            );
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
