import React from "react";
import { UserListTest } from "./styles.js";

const CheckedUsers = ({ namesList }) => {
  let users = [];

  namesList.map(checkedUser => {
    Object.values(checkedUser)[2] === true
      ? users.push(Object.values(checkedUser)[1])
      : "";
  });

  return (
    <UserListTest>
      {users.map(x => (
        <pre>{x}, </pre>
      ))}
    </UserListTest>
  );
};

export default CheckedUsers;
