import logo from "./logo.svg";
import "./App.css";
import React from "react";

const peopleList = [
  {
    _id: "8ca5fb67-91bc-47ee-8499-9f1c72060759",
    name: "John",
    street: "Evergreen 1",
    city: "New York",
    state: "New York",
    country: "United States of America",
    telephone: "+222 222 222 222",
    birthday: "28/05/1954",
  },
  {
    _id: "e6be4188-de26-4ccc-a4a7-cb3c5fa96c2d",
    name: "猪",
    street: "N/A",
    city: "北京",
    state: "北京",
    country: "中国",
    telephone: "+86 86 86 86 86",
    birthday: "06/23/1999",
  },
  {
    _id: "8352e489-b88b-43b5-a61d-6cff534b993e",
    name: "Richard",
    street: "The end of the world",
    city: "London",
    state: "England",
    country: "United Kingdom",
    telephone: "+447 47 47 47 471",
    birthday: "30/09/1991",
  },
  {
    _id: "4ae79b3d-1c0c-4163-a625-6b8426708d61",
    name: "Xavier",
    street: "Pork corner",
    city: "Edinburgh",
    state: "Scotland",
    country: "United Kingdom",
    telephone: "+447 47 43 41 52",
    birthday: "06/05/1996",
  },
  {
    _id: "f5f61edd-265e-447a-b8e8-a036c4625dea",
    name: "Robert",
    street: "Potato lane",
    city: "Minsk",
    state: "Belarusia",
    country: "Belarusia",
    telephone: "+556 8897 778 9",
    birthday: "26/01/1945",
  },
];

function App() {
  const [userData, setUserData] = React.useState("");
  return (
    <div className="App">
      <div className="left-side">
        <h1>Person list</h1>
        <hr />
        <ul>
          {peopleList.map((person) => {
            return (
              <li key={person._id}>
                <button type="button" onClick={() => setUserData(person)}>
                  {person.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right-side">
        <h1>Person Information</h1>
        <hr />
        <div className="user-info">
          <p>
            <strong>Name: </strong>
            {userData.name}
          </p>
          <p>
            <strong>Street: </strong>
            {userData.street}
          </p>
          <p>
            <strong>City: </strong>
            {userData.city}
          </p>
          <p>
            <strong>State: </strong>
            {userData.state}
          </p>
          <p>
            <strong>Country: </strong>
            {userData.country}
          </p>
          <p>
            <strong>Telephone: </strong>
            {userData.telephone}
          </p>
          <p>
            <strong>Birthday: </strong>
            {userData.birthday}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
