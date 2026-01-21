import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";

export const FetchRQ = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;  
  if (isError) return <p>Error :{error.message ||  "loading posts!"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data.map(({ id, title, body }) => (
          <li key={id}>
            <p>{title}</p>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
