import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchPosts, deletePost } from "../features/posts/postsThunks";

const PostTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, filterName, filterDescription } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredItems = items.filter((p) => {
    return (
      p.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterDescription === "" || p.description.toString() === filterDescription)
    );
  });

  return (
    <div>
      {loading && <p>Cargando...</p>}
      <table border={1} cellPadding={5} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td>
                <button onClick={() => dispatch(deletePost(post.id))}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
