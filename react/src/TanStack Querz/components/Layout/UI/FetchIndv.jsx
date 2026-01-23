import { useQuery } from "@tanstack/react-query"
import { fetchInvPost } from "../../../API/api"
import { useParams } from "react-router-dom"

export const FetchIndv = () =>{
   
   const {id} = useParams();

    const {data, isPending, isError, error}= useQuery({
        queryKey:["post"],
        queryFn:() =>fetchInvPost(id),
    })
    if (isLoading) return <p>Loading...</p>;  
    if (isError) return <p>Error :{error.message ||  "loading posts!"}</p>;
     return (
     <div>
     <ul>
        <li>
            <p>ID:{data[]}</p>
        </li>
     </ul>
     </div>

     )
}

13.35