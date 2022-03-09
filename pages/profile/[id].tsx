import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Profile = ({ user }) => {
  const route = useRouter();
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </>
  );
};

export async function getStaticProps(ctx) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
    params: { id: ctx.params.id },
  });

  const user = await res.data[0];

  return {
    props: { user },
  };
}

export async function getStaticPaths(ctx) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  const users = await res.data;

  const paths = users.map((user) => {
    return { params: {id: String(user.id)}}
  })

  return {
    paths,
    fallback: false,
  };
}

export default Profile;
