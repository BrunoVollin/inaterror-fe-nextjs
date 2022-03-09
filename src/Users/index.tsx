import React from "react";
import axios from "axios";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from "next";

const Users = ({
  names,
}: InferGetStaticPropsType<typeof getStaticProps >) => {
  console.log(names);
  return (
    <>sdaxc</>
  );
};

export const getStaticProps: GetStaticProps  = async () => {
  const names: string[] = ["sax", "xsa", "ds"];

  return {
    props: {
      names: ["sax", "xsa", "ds"],
    },
  };
};

export default Users;
