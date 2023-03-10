import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner({ children }) {
  return <section className="home__banner">{children}</section>;
}
