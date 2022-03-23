import React, { useState } from "react";
import { Wrapper, Note, NoteMenu } from "../styles/pages/login";
import logo from "../public/assets/logo.png";
import Image from "next/image"

export default function Form(props) {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  

  function handleNameChange(event) {
    setName( event.target.value );
  }

  function handlePassChange(event) {
    setPass(event.target.value );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name && pass) {
      //Evitar contas com Strings vazias
      alert("Pronto " + name + pass +" conta criada.");
      props.createAccount(name, pass);
    } else {
      alert("Erro,o campo de nome ou senha estão vazios");
    }
  }

  return (
    <Wrapper>
      <Image src={logo} alt="" />
      <Note>
        <NoteMenu>
          <p>
            <strong>{props.title}</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <label>
                Nome
              {props.nameLabel}:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Senha
              {props.passLabel}:
              <input type="password" value={pass} onChange={handlePassChange} />
            </label>

            <input type="submit" value="Criar conta" />
          </form>
          <button onClick={() => props.handleLogin(name, pass, props.history)}>
            Entrar
          </button>
        </NoteMenu>
      </Note>
    </Wrapper>
  );
}