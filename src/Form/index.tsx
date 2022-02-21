import Link from "next/link";
import React, { useContext, useState } from "react";
import { StyledForm, StyledInput } from "./style";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../contexts/AuthContext";

type Data = {
  password: string;
  userName: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn({ userName, password }: Data) {
    await signIn({ userName, password });
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleSignIn)}>
      <label>
        Nome de Usuario:
        <br />
        <input {...register("userName")} name="userName" type="text" />
      </label>
      <label>
        Senha:
        <br />
        <input {...register("password")} name="password" type="text" />
      </label>
      <br />
      <StyledInput type="submit" value="Submit" />
      <Link href="/page2">
        <a>pagina2</a>
      </Link>
    </StyledForm>
  );
}
