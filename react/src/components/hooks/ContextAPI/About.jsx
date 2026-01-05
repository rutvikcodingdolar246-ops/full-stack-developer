import { useContext } from "react";
import { BioContext } from "./index";

export const About = () => {
  const { name, age } = useContext(BioContext);

  return <h1>Hello (About). my name is {name}. I am {age} y👋</h1>;
};
