import Link from "next/link";
import React, { useState } from "react";
import { StyledForm } from "./style";

export default function Form() {
  const [name, setName] = useState(0);
  const [numero, setNumero] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const result = name + numero;
    alert(`${result}`);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Primeiro Numero:
        <input
          type="number"
          value={name}
          onChange={(e) => setName(Number(e.target.value))}
        />
      </label>
      <label>
        Segundo Numero:
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(Number(e.target.value))}
        />
      </label>
      <input type="submit" value="Submit" />
      <Link href="/page2">
        <a>pagina2</a>
      </Link>
    </StyledForm>
  );
}
