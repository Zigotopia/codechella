import React, { createContext, useState } from "react";

export const formContext = createContext();

export default function ThemeProvider({children}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [categoria, setCategoria] = useState("Meia");
  const [date, setDate] = useState("");

  return (
    <formContext.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        categoria,
        setCategoria,
        date,
        setDate,
      }}>
      {children}
    </formContext.Provider>
  );
}
