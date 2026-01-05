import "./index.css"
import { forwardRef, useId, useRef } from "react"

export const ForwardRefs = () => {

   const username = useRef(null)
   const password = useRef(null)

   const handelFormSubmit = (e) =>{
    e.preventDefault();

    console.log("Username:", username.current.value)
    console.log("Password:", password.current.value)
   }

    return(
        <form onSubmit={handelFormSubmit}>
          <BeforeReact19Input label="Username" ref={username}/>
          <BeforeReact19Input label="Password" ref={password}/>
          <button type="submit">Login</button>
        </form>
    )
}

// const BeforeReact19Input = forwardRef((props, ref)=>{
//     const id = useId();

//     return(
//         <div className="field">
//             <label htmlFor={id}>{props.label}</label>
//             <input id={id} type="text" ref={ref} />
//         </div>
//     )
// })


const BeforeReact19Input = forwardRef((props, ref)=>{
    const id = useId();

    return(
        <div className="field">
            <label htmlFor={id}>{props.label}</label>
            <input id={id} type="text" ref={ref} />
        </div>
    )
})
