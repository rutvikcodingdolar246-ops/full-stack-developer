import { useId } from "react";
import { BsPass } from "react-icons/bs";

export const UseID = () => {
    
    // const usernameId = useId();

    //  const passwordId = useId();

    // const emailId = useId();
    


    
    // return(
    //  <form>
    //      <div>
    //     <label htmlFor={usernameId}>Username</label>
    //     <input type="text" id={usernameId} name="name"/>
    //     </div>
        
    //     <div>
    //     <label htmlFor={passwordId}>Password</label>
    //     <input type="password" id={passwordId} name="password"/>
    //     </div>
        


    //     <div>
    //         <label htmlFor={emailId}>Email:</label>
    //         <input type="email" id={emailId} name="email"/>
    //     </div>
    //     <button type="submit">Submit</button>
    //  </form>



//This lets you avoid calling useId for every single element that needs a unique ID.
 const Id = useId();



    
    return(
     <form>
         <div>
        <label htmlFor={ Id + "usernameId" }>Username</label>
        <input type="text" id={ Id + "usernameId" } name="name"/>
        </div>
        
        <div>
        <label htmlFor={ Id + "passwordId"}>Password</label>
        <input type="password" id={ Id + "passwordId"} name="password"/>
        </div>
        


        <div>
            <label htmlFor={ Id + "emailId"}>Email:</label>
            <input type="email" id={ Id + "emailId"} name="email"/>
        </div>
        <button type="submit">Submit</button>
     </form>
    );
};