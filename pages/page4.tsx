import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [names, setNames] = useState<string[]>([]);

  const getNames = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data.map((user) => user.name);
    setNames(data);
  };
  useEffect(() => {
    getNames();
  }, []);
  console.log(names);
  return (
    <>
      {names.map((name: string) => (
        <h1>{name}</h1>
      ))}
    </>
  );
};

export default Users;
