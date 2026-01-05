import { useRef } from "react";
import "./index.css";

export const UseRef = () => {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(
      usernameRef.current.value,
      passwordRef.current.value
    );
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" ref={usernameRef} placeholder="Username" />
      <br />
      <input type="password" ref={passwordRef} placeholder="Password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
