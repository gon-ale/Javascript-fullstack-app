import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { createPost } from "../features/posts/postsThunks";

const PostForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;
    dispatch(createPost({ name, description }));
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default PostForm;
