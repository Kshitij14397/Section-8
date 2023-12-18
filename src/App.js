//# Section 8: Time to Practice: A Complete Practice Project

//# 89. Adding a "User" Component
/*
import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
*/

//# 90. Adding a re-usable "Card" Component
/*
import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
*/

//# 91. Adding a re-usable "Button" Component
/*
import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
*/

//# 92. Managing the User Input State
/*
import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
*/

//# 93. Adding Validation & Resetting Logic
/*
import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
*/

//# 94. Adding a Users List Component
/*
import React from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
*/

//# 95. Managing a List Of Users via State
/*
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
*/

//# 96. Adding The "ErrorModal" Component
/*
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
*/

//# 97. Managing the Error State
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
