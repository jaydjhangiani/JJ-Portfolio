import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Coincap from "../assets/pdfs/Coincap.pdf";

const Internship = () => {
  const history = useHistory();
  useEffect(() => {
    window.open(Coincap);
    history.push("/");
  }, []);
  return <div></div>;
};

export default Internship;
