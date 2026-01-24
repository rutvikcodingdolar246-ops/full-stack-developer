import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPosts, updatePost } from "../API/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {
  const queryClient = useQueryClient();
  const [pageNumber, setPageNumber] = useState(0);

  // Fetch posts
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: (_, id) => {
      queryClient.setQueriesData(["posts", pageNumber], (oldData) =>
        oldData?.filter((post) => post.id !== id)
      );
    },
  });


const updateMutation = useMutation({
  mutationFn: (id) => updatePost(id),

  onSuccess: (apiData, postId) => {
    queryClient.setQueryData(["posts", pageNumber], (postData) => {
      return postData?.map((curPost) =>
        curPost.id === postId ? { ...curPost, ...apiData } : curPost
      );
    }); 
  },
});


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message || "Loading posts failed"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data.map(({ id, title, body }) => (
          <li key={id}>
            <NavLink to={`/rq/${id}`}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </NavLink>
            <button onClick={() => deleteMutation.mutate(id)}>
              Delete
            </button>
            <button onClick={() => updateMutation.mutate(id)}>
              Update
            </button>
          </li>
        ))}
      </ul>

      <div className="pagination-section container">
        <button
          disabled={pageNumber === 0}
          onClick={() => setPageNumber((prev) => prev - 3)}
        >
          Prev
        </button>

        <h2>{pageNumber / 3 + 1}</h2>

        <button onClick={() => setPageNumber((prev) => prev + 3)}>
          Next
        </button>
      </div>
    </div>
  );
};
