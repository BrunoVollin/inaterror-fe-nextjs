import React, { useContext, useEffect } from "react";
import { AuthContext } from "../src/contexts/AuthContext";
import { api } from "./../src/services/api";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import Head from 'next/head';

const pagina2: React.FC = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users");
  }, []);

  return (
    <>
      <Head>
        <title>Titulo da pagina no Head</title>
      </Head>
      <img src={user?.avatarUrl} alt="" />
      {user?.name}
      asxasxsaxas
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "nextauth.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default pagina2;
