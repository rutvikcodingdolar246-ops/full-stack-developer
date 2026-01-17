import { useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await postData(addData);

    if (res.status === 201 || res.status === 200) {
      // JSONPlaceholder does not save → add locally
      setData((prev) => [
        { id: Date.now(), ...addData },
        ...prev,
      ]);

      setAddData({ title: "", body: "" });
    }
  };

  return (
    <section className="section-form">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleChange}
          required
        />
        <input
          name="body"
          placeholder="Add Post"
          value={addData.body}
          onChange={handleChange}
          required
        />
        <button type="submit">ADD</button>
      </form>
    </section>
  );
};
