
import {  useBioContext } from "./index";

export const Home = () => {
  const { name, age } = useBioContext();

 return <h1>Hello (Home). my name is {name}. I am {age} yrs old👋</h1>;
};
