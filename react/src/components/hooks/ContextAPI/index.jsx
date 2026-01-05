import { createContext, use } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const myName = "Rutvik";
  const age = 23;

  return (
    <BioContext.Provider value={{ name: myName, age }}>
      {children}
    </BioContext.Provider>
  );
};



// Custom Hooks


export const useBioContext = () =>{
  const context = use(BioContext);
  if(context === undefined ){
    throw new Error("Component must be wrapped with BioProvider")
  }
  return context;
}