import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";

const Users = ({ users }) => {
  console.log(users);
  return (
    <>
      {users.map((user) => (
        <h1>
          <Link href='/profile/[id]' as={`/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </h1>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  // const names = res.data.map((user) => user.name);
  const users = res.data;

  return {
    props: {
      users,
    },
  };
};

export default Users;
