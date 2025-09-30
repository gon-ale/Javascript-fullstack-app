import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setFilterName } from "./features/posts/postsSlice";
import PostTable from "./components/PostTable";
import PostForm from "./components/PostForm";

function App() {
  const dispatch = useDispatch();
  const { filterName } = useSelector((state: RootState) => state.posts);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Gestión de Posts</h1>
      <div>
        <input
          type="text"
          placeholder="Filtro por nombre"
          value={filterName}
          onChange={(e) => dispatch(setFilterName(e.target.value))}
        />
      </div>
      <PostTable />
      <PostForm />
    </div>
  );
}

export default App;
