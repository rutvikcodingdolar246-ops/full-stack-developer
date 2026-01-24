import { useQuery } from "@tanstack/react-query";
import { fetchInvPost } from "../../../API/api";
import { NavLink, useParams } from "react-router-dom";

export const FetchIndv = () => {

    
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchInvPost(id),
  });
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error :{error.message || "loading posts!"}</p>;
  return (
    <div className="section-accordion">
      <h1>Post Details Number - {id}</h1>
      <li>
        <p>ID:{data.id}</p>
        <p>Title:{data.title}</p>
        <p>Body:{data.body}</p>
      </li>
      <NavLink to="/rq">
        <button>Go Back</button>
      </NavLink>
      
    </div>
  );
};


