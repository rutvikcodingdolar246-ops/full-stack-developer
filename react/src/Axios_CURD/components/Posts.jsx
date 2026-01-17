import { useEffect, useState } from "react";
import { getPost, deletePost, updatePost } from "../api/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    body: "",
  });

  // GET POSTS
  const getPostData = async () => {
    const res = await getPost();
    setData(res.data);
  };

  // DELETE
  const handleDelete = async (id) => {
    await deletePost(id);
    setData((prev) => prev.filter((post) => post.id !== id));
  };

  // EDIT CLICK
  const handleEditClick = (post) => {
    setEditId(post.id);
    setEditData({
      title: post.title,
      body: post.body,
    });
  };

  // EDIT CHANGE
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // SAVE EDIT (NO 500 ERROR)
  const handleUpdate = async (id) => {
    // ⚠️ Call API ONLY for real JSONPlaceholder IDs
    if (id <= 100) {
      await updatePost(id, editData);
    }

    // ✅ Always update local state
    setData((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, ...editData } : post
      )
    );

    setEditId(null);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <section className="main-section">
      <Form setData={setData} />

      <div className="section-post">
        <ol>
          {data.map((post) => (
            <li key={post.id}>
              {editId === post.id ? (
                <>
                  <input
                    name="title"
                    value={editData.title}
                    onChange={handleEditChange}
                  />
                  <input
                    name="body"
                    value={editData.body}
                    onChange={handleEditChange}
                  />

                  <button onClick={() => handleUpdate(post.id)}>
                    Save
                  </button>
                  <button onClick={() => setEditId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>

                  <button onClick={() => handleEditClick(post)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(post.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
